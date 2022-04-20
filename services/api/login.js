import CONFIG from '@/config.js'
import $API from '../services-base/http-interceptors.js'

export const postLogin = (data) => {
	return $API.post(CONFIG.root1 + '/userLogin', data)
}
