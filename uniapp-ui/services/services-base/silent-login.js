import CustomCustomShowToast from '@/utils/custom_toast.js'
import CONFIG from '@/config.js'
import { GetStorageSync, ClearStorageSync, SetStorageSync } from '@/utils/custom_storage.js'
// import { NavToLogin } from './tologin'

/**
 * 静默登录
 * 1. 获取临时登录凭证code
 * 2. 将code发送给服务端
 * 3. 保存登录信息，如auth-token
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

const SilentLogin = async () => {
	const [ loginErr, loginRes ] = await uni.login({
		provider: 'weixin'
	})

	if(loginErr) {
		// TODO
		CustomCustomShowToast('静默登录失败')
		return Promise.reject(loginErr)
	} else {
		const [ requestErr, requestRes ] = await uni.request({
			url: CONFIG.test,
			method: 'POST',
			data: {
				code: loginRes.code,
				phone: GetStorageSync('phone')
			}
		})

		if(requestErr) {
			// TODO
			CustomCustomShowToast('静默登录请求失败')
			return Promise.reject(requestErr)
		} else {
			if(requestRes.statusCode === 200 && requestRes.data.code === '1000' ) {
				const {
					token,
					phone,
					key,
					pwdFlag
				} = requestRes.data.data
				SetStorageSync('token', token)
			} else {
				ClearStorageSync()
				uni.showModal({
					title: "提示",
					content: "您的登录信息已过期，请重新登录",
					confirmText: "前往登录",
					showCancel: false,
					success(res) {
						// NavToLogin()
					}
				})
			}
		}
	}
}

export default SilentLogin
