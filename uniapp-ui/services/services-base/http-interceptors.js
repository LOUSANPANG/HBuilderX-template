import md5 from 'md5'
import {
	v1 as uuidv1
} from 'uuid'
import Request from '../luch-request/index.js'
import CustomCustomShowToast from '@/utils/custom_toast.js'
import {
	GetStorageSync,
	ClearStorageSync
} from '@/utils/custom_storage.js'
import GetBaseUrl from './base-url.js'
import md5WithSalt from './md5Signature.js'
// import { NavToLogin } from './tologin'


const $API = new Request()


/**
 * 修改全局默认配置
 * baseURL
 * header
 * custom
 */
$API.setConfig((config) => {
	console.info('=====修改全局默认配置: ', config)
	const _config = {
		baseURL: GetBaseUrl(config.data, GetStorageSync('key')),
		header: {
			sign: md5WithSalt(),
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
	console.info('=====请求拦截前: ', config)
	config.header = {
		...config.header,
		Authorization: GetStorageSync('token')
	}
	// if (config.custom.auth) {
	//   config.header.token = 'token'
	// }

	return config

}, config => {
	return Promise.reject(config)
})


/**
 * 请求后拦截
 * status code 状态判断
 * code 数据判断
 */
$API.interceptors.response.use((response) => {
	console.info('=====请求拦截后[成功]: ', response)
	const code = response.data.code

	if (response.statusCode === 200) {
		if (code === '11111') {
			// token 失效 -> 静默登录
		} else if (code === 10000) {
			return Promise.resolve(res.data)
		} else {
			CustomShowToast(res.data.msg || '调用服务失败')
			return Promise.reject(res.data)
		}
	}

}, (response) => {
	console.info('=====请求拦截后[失败]: ', response)
	const statusCode = response.statusCode

	if (statusCode === 404) {
		CustomShowToast(`${statusCode}请求资源不存在`)
		return Promise.reject(`${statusCode}请求资源不存在`)

	} else if (statusCode === 500 || statusCode === 502 || statusCode === 503) {
		CustomShowToast(`${statusCode}系统繁忙稍后重试`)
		return Promise.reject(`${statusCode}系统繁忙稍后重试`)

	} else if (statusCode === 403) {
		CustomShowToast(`${statusCode}没有权限访问`)
		// setTimeout(() => {
		// 	ClearStorageSync()
		// 	NavToLogin()
		return Promise.reject(`${statusCode}没有权限访问`)
		// }, 2000)

	} else if (statusCode === 401) {
		// 401
		CustomShowToast(`${statusCode}需要鉴权`)
		// setTimeout(() => {
		// 	ClearStorageSync()
		// 	NavToLogin()
		return Promise.reject(`${statusCode}需要鉴权`)
		// }, 2000)
	}
})

export default $API
