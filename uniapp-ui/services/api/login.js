import CONFIG from '@/config.js'
import $API from '../services-base/http-interceptors.js'

export const postLogin = (data) => {
	return $API.post(CONFIG.login + '/userLogin', data)
}
