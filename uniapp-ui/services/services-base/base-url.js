// @description {baseUrl} 基础路由环境

const GetBaseUrl = () => {
	let BASE_URL = ''

	process.env.NODE_ENV === 'development'
		// 开发环境
		?
		BASE_URL = ''
		// 生产环境
		:
		BASE_URL = ''

	return BASE_URL
}


export default GetBaseUrl
