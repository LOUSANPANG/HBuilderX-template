/**
 * 当前终端环境
 * 建议开发者在小程序的app.js里面对环境变量进行捕获并作为全局变量进行缓存
 */
import customShowToast from './custom_toast.js'

/**
 * 同步获取系统信息
 * @returns {object} res
 * @returns {object.platform} res.platform 客户端环境
 */
export const systemInfo = () => {
	try {
		const res = uni.getSystemInfoSync()
		return res
	} catch (e) {
		console.error(e)
		customShowToast('获取系统信息失败')
	}
}
