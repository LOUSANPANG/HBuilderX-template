/**
 * 当前终端环境
 * 建议开发者在小程序的app.js里面对环境变量进行捕获并作为全局变量进行缓存
 *
 * 企业微信
 * 	额外返回environment字段并赋值为wxwork
 * 	wx.qy的接口，都只能在企业微信端调用
 *
 */

import { canSystemInfoSync } from './can_use.js'

export default function isEnvironment() {
	const systemInfo = canSystemInfoSync()
	if(systemInfo.environment) {
		return systemInfo.environment
	} else {
		return 'wx'
	}
}
