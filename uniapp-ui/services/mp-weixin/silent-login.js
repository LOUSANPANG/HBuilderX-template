import CustomCustomShowToast from '@/utils/custom_toast.js'

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
	uni.login({
		provider: 'weixin',
		success(res) {
			console.info('===静默登录success：', res)
			uni.request({

			})
		},
		fail(err) {
			CustomCustomShowToast('静默登录失败')
			return Promise.reject(err)
		}
	})
}

export default SilentLogin
