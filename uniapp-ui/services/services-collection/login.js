import CONFIG from '@/config.js'
import $API from '../services-base/http-interceptors.js'

export const PostLogin = (data) => {
	return $API.post(CONFIG.login + '/userLogin', data)
}
