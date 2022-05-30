import crypto from 'crypto';
import uuidv1 from '@/js_sdk/uuid/dist/v1.js';
import Request from '@/uni_modules/luch-request/luch-request/luch-request/index.js';

import { setStorageSync, getStorageSync } from '@/utils/custom_storage.js'
import customShowToast from '@/utils/custom_toast.js'
import CONFIG from '@/config.js'


// accis码排序
function sort_ascii(obj) {
	let arr = new Array();
	let num = 0;
	for (let i in obj) {
		arr[num] = i;
		num++;
	}
	let sortArr = arr.sort();
	let str = ''; //自定义排序字符串
	for (let i in sortArr) {
		if (obj[sortArr[i]] instanceof Array || obj[sortArr[i]] instanceof Object) {
			str += sortArr[i] + '=' + JSON.stringify(obj[sortArr[i]]) + '&';
		} else {
			str += sortArr[i] + '=' + obj[sortArr[i]] + '&';
		}
	}
	//去除两侧字符串ss
	let char = '&'
	str = str.replace(new RegExp('^\\' + char + '+|\\' + char + '+$', 'g'), '');
	return str;
}


const http = new Request();

http.setConfig(config => {
	config.baseURL = CONFIG.host
	config.data = {}
	return config
})


http.interceptors.request.use((config) => {
	let key = ''
	if (getStorageSync('key')) {
		key = getStorageSync('key')
	}
	let s_data = sort_ascii(config.data);
	if (s_data != null && s_data != "") {
		s_data.substr(0, s_data.length - 1);
	}
	const md5 = crypto.createHash('md5');
	let md5_data = md5.update(key + s_data).digest('hex');
	let uuid = uuidv1();
	var timestamp = Date.parse(new Date());

	config.header = {
		...config.header,
		userToken: getStorageSync('token') || '',
		sign: md5_data,
		uuid,
		timestamp
	}
	console.log('请求前正确拦截⛔️: ', config)
	return Promise.resolve(config)
}, config => {
	console.error('请求前错误拦截⛔️: ', config)
	return Promise.reject(config)
})

let innerLogin = null;


let wxLogin = function() {
	return new Promise((resolve, reject) => {
		wx.login({
			success: rs => {
				if (rs.code) {
					console.log('wxlogin code === ', rs.code)
					resolve(rs)
				} else {
					reject(rs)
				}
			},
			fail: function(res) {
				reject(res)
			}
		})
	})
}
let getOpenId = function(rs) {
	console.log("微信获取的code:", rs.code)
	return http.post(CONFIG.wxLogin, {
			code: rs.code,
			phone: getStorageSync('phone')
		})
		.then(re => {
			re = re.data
			setStorageSync('token')
			setStorageSync('isacc')
			setStorageSync('iscore')
			setStorageSync('key')
			setStorageSync('session_key')
		})
}
let toLogin = () => {
	if (!innerLogin) {
		innerLogin = wxLogin()
			.then(res => getOpenId(res))
	}
	return innerLogin.finally(() => { innerLogin = null })
}


http.interceptors.response.use(response => {
	console.log('响应拦截后成功码✅: ', response)
	const { resCode, resMsg } = response.data
	let res;

	if (response.statusCode === 200) {
		if (resCode === '00') {
			return Promise.resolve(response.data)
		} else if (resCode === '02') {
			return toLogin().then(r => {
				return http.request(response.config)
			})
		} else {
			customShowToast(resCode + resMsg)
			return null
			// return Promise.reject(response.data)
		}
	}
}, (response) => {
	console.error('响应拦截后错误码❌: ', response)
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
			// return Promise.reject(`${statusCode}没有权限访问`)
		} else if (statusCode === 401) {
			customShowToast(`${statusCode}需要鉴权`)
			// return Promise.reject(`${statusCode}需要鉴权`)
		}
	}
	return null
})

export default http
