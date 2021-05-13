import $API from '../services-base/http-interceptors.js'

export const PostTest = (data) => {
	return $API.post('/cardinfoqry/ylcardproductlist', data)
}
