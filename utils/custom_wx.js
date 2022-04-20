import CONFIG from '@/config.js'
import { postLogin, postSubscribeInfo } from '../services/api/user.js'
import { getWxConfig } from '../services/api/activity.js'
import customShowToast from './custom_toast.js'
import { parseHistoryUrl, removeUrlParams } from './parse_url.js'
import { setStorageSync, getStorageSync, setSessionStorage, getSessionStorage } from './custom_storage.js'


/**
 * 是否是微信环境
 */
export const isWxClient = () => {
	const UA = window.navigator.userAgent.toLowerCase()
	if (UA.match(/MicroMessenger/i) != 'micromessenger') {
		uni.redirectTo({
			url: '/pages/404/404'
		})
		return true
	}
}

/**
 * 获取微信授权回调code
 */
export const getWxCode = (url) => {
	const appid = CONFIG.appId
	const scope = 'snsapi_userinfo'
	let local = url ? url : window.location.href
	local = encodeURIComponent(decodeURIComponent(local))
	location.href =
		`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${local}&response_type=code&scope=${scope}&state=STATE#wechat_redirect`
}

/**
 * 授权登录
 *
 * 检测无缓存信息未登录
 * 路径参数是否有code？
 * 有code - login - 判断是否关注公众号
 * 无code - 微信授权 - 回调login登录 - 判断是否关注公众号
 *
 * 检测有缓存信息已登录
 * token是否过期？
 * 已过期 - 二次登录
 * 未过期 - 执行 - 判断是否关注公众号
 *
 * @return {boolean}
 */
export const authorizedLogin = async () => {
	// HACK 删除缓存但是code还存在 login服务就会报500
	if (!getStorageSync('userToken')) {
		const loginCode = parseHistoryUrl('code')
		if (loginCode) {
			const loginData = await postLogin({ loginCode })
			// 登录失败后的处理
			if (!loginData) {
				const newUrl = removeUrlParams('code')
				getWxCode(newUrl)
				return false
			} else {
				setStorageSync('userToken', loginData.result)
				return await isFollowGzh()
			}
		} else {
			getWxCode()
			return false
		}
	} else {
		return await isFollowGzh()
	}
}

/**
 * 配置微信api
 * 调用服务获取签名参数
 * 调用wx.config
 * 调用wx.ready
 * 使用权限API
 * @param {object} data login服务返回的数据
 * @param {array} jsApiList api参数
 */
import wx from '@/js_sdk/jweixin/jweixin-1.6.0.js'
export const configWxApi = async (url, jsApiList, fn) => {
	return new Promise(async (resolve, reject) => {
		// 调用config服务
		const wxConfigData = await getWxConfig(url)
		if (wxConfigData) {
			const { timestamp, nonceStr, signature } = wxConfigData.result
			wx.config({
				// debug: true,
				appId: CONFIG.appId,
				timestamp, // 签名的时间戳
				nonceStr, // 签名的随机串
				signature, // 签名
				jsApiList // JS接口列表
			})
			wx.ready(fn)
		} else {
			reject()
		}
		wx.error((res) => {
			reject()
			customShowToast(`配置验证失败: ${res}`)
		})
	})
}

/**
 * 是否关注公众号
 * @return {boolean} true 关注 false 未关注
 */
export const isFollowGzh = async () => {
	let isReturn = true
	if (!getSessionStorage('isFollow')) {
		const { result: isFollow } = await postSubscribeInfo()
		if (isFollow !== '1') {
			isReturn = false
			uni.navigateTo({
				url: '/pages/follow/follow'
			})
		} else {
			setSessionStorage('isFollow', true)
		}
	}
	return isReturn
}
