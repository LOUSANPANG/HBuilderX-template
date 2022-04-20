import customShowToast from './custom_toast.js'

/**
 * 登录
 * @return {object} res 登录成功的返回信息
 */
const customLogin = async () => {
	// #ifndef H5

	const [err, res] = await uni.login()
	if (err) {
		console.log('uni.login失败❌：', err)
		customShowToast('登录失败')
		return null
	} else {
		return res.code
	}

	// #endif
}

export default customLogin
