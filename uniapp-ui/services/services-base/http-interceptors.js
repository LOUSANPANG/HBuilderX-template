// 拦截器
import { v1 as uuidv1 } from 'uuid'
import Request from '@/js-sdk/luch-request/index.js'
import md5WithSalt from './md5-signature.js'
import silentLogin from './silent-login.js'
import { toLogin } from './tologin'
import customShowToast from '@/utils/custom_toast.js'
import { getStorageSync, clearStorageSync } from '@/utils/custom_storage.js'
import CONFIG from '@/config.js'


const $API = new Request()

$API.setConfig((config) => {
	const _config = {
		baseURL: CONFIG.host,
		header: {
			uuid: uuidv1(),
			timestamp: Date.parse(new Date()) / 1000
		},
		custom: {}
	}
	return {
		...config,
		..._config
	}
})

/**
 * 请求前拦截
 * header 添加 token
 * 通过 custom 做一系列其他操作
 */
$API.interceptors.request.use((config) => {
	config.header = {
		...config.header,
		sign: md5WithSalt(config.data, getStorageSync('key')),
		Authorization: getStorageSync('token')
	}
	// if (config.custom.auth) {
	//   config.header.token = 'token'
	// }
	console.log('请求前正确拦截⛔️: ', config)
	return Promise.resolve(config)
}, config => {
	console.error('请求前错误拦截⛔️: ', config)
	return Promise.reject(config)
})


/**
 * 请求后拦截
 * status code 状态判断
 * code 数据判断
 */
$API.interceptors.response.use(async (response) => {
	console.info('请求拦截后成功码✅: ', response)
	const { resCode, resMsg } = response.data

	if (response.statusCode === 200) {
		if (resCode === '02') {
			// token 失效 静默登录
			await silentLogin()
			// 递归
			return await $API.post(response.config.url, response.config.data)
		} else if (code === '00') {
			return Promise.resolve(response.data)
		} else {
			customShowToast(resCode + resMsg)
			return null
			// return Promise.reject(response.data)
		}
	}

}, (response) => {
	console.info('请求拦截后错误码❌: ', response)
	const { statusCode, errMsg } = response

	if (!statusCode) {
		customShowToast(`${errMsg}系统繁忙`)
	} else {
		if (statusCode === 404) {
			customShowToast(`${statusCode}请求资源不存在`)
			// return Promise.reject(`${statusCode}请求资源不存在`)
		} else if (statusCode === 500 || statusCode === 502 || statusCode === 503) {
			customShowToast(`${statusCode}系统繁忙稍后重试`)
			// return Promise.reject(`${statusCode}系统繁忙稍后重试`)
		} else if (statusCode === 403) {
			customShowToast(`${statusCode}没有权限访问`)
			// setTimeout(() => {
			// 	clearStorageSync()
			// 	toLogin()
			// 	// return Promise.reject(`${statusCode}没有权限访问`)
			// }, 2000)
		} else if (statusCode === 401) {
			// 401
			customShowToast(`${statusCode}需要鉴权`)
			// setTimeout(() => {
			// 	clearStorageSync()
			// 	toLogin()
			// 	// return Promise.reject(`${statusCode}需要鉴权`)
			// }, 2000)
		}
	}
	// return null
})

export default $API
