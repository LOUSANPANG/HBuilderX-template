// 拦截器
import { v1 as uuidv1 } from 'uuid'
import Request from '../luch-request/index.js'
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
	console.info('请求拦截前⛔️: ', config)
	config.header = {
		...config.header,
		sign: md5WithSalt(config.data, getStorageSync('user') && getStorageSync('user').key),
		Authorization: getStorageSync('user') && getStorageSync('user').token
	}
	// if (config.custom.auth) {
	//   config.header.token = 'token'
	// }
	return Promise.resolve(config)
}, config => {
	return Promise.reject(config)
})


/**
 * 请求后拦截
 * status code 状态判断
 * code 数据判断
 */
$API.interceptors.response.use(async (response) => {
	console.info('请求拦截后成功码✅: ', response)
	const code = response.data.code

	if (response.statusCode === 200) {
		if (code === '11111') {
			// token 失效 静默登录
			await silentLogin()
			// 递归
			return await $API.post(response.config.url, response.config.data)
		} else if (code === '10000') {
			return Promise.resolve(response.data)
		} else {
			return Promise.reject(response.data)
		}
	}

}, (response) => {
	console.info('请求拦截后错误码❌: ', response)
	const statusCode = response.statusCode

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
})

export default $API
