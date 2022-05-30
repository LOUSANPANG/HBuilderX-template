/**
 * 静默登录 A服务失效 - 重新登录 - A服务执行
 * 1. 获取临时登录凭证code
 * 2. 将code发送给服务端
 * 3. 保存登录信息，如auth-token
 * 4. 回调执行token失效的服务
 *
 * NOTE-session_key有效期
 * a wx.login 调用时，用户的 session_key 可能会被更新而致使旧 session_key 失效
 * b wx.checkSession可以校验 session_key 是否有效
 *
 * NOTE-接口调整
 * a wx.login接口获取的登录凭证可直接换取unionID
 * b 无法通过wx.getUserInfo接口获取用户个人信息 将直接获取匿名数据
 * c 新增getUserProfile接口可获取用户信息 均需用户确认
 */
import customShowToast from '@/utils/custom_toast.js'
import { clearStorageSync, setStorageSync } from '@/utils/custom_storage.js'
import customLogin from '@/utils/custom_login.js'
import CONFIG from '@/config.js'
import { toLogin } from './tologin'


const silentLogin = async (complete) => {
	const loginRes = await customLogin()

	if (!loginRes) {
		console.info('uni.login失败❌: ', loginErr)
		customShowToast('uni.login error')
		return null
		// return Promise.reject(loginErr)
	} else {
		console.info('uni.login成功✅: ', loginRes)
		// 重新调用登录接口
		const [requestErr, requestRes] = await uni.request({
			url: CONFIG.wxLogin + '/userLoginByCode',
			method: 'POST',
			data: {
				code: loginRes.code,
				phone: '153xxxx0730'
			}
		})

		if (requestErr) {
			console.info('登录接口失败❌: ', requestErr)
			customShowToast('静默登录请求失败')
			return null
			// return Promise.reject(requestErr)
		} else {
			console.info('登录接口成功✅: ', requestRes)
			if (requestRes.statusCode === 200 && requestRes.data.code === '00') {
				const data = requestRes.data.data
				setStorageSync('token', data.token)
				setStorageSync('key', data.key)
				setStorageSync('user', data)

				// 回调执行token失效的服务
				complete()
			} else {
				clearStorageSync()
				uni.showModal({
					title: "提示",
					content: "登录信息已过期，请重新登录",
					confirmText: "前往登录",
					showCancel: false,
					success(res) {
						toLogin()
					}
				})
			}
		}
	}
}

export default silentLogin
