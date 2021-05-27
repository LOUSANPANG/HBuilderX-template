import CustomShowToast from './custom_toast.js'

/**
 * 登录
 * @return {object} res 登录成功的返回信息
 */
const CustomLogin = async () => {
	// #ifndef H5

	const [err, res] = await uni.login()
	if(err) {
		console.log('===uni.login失败❌：', err)
		CustomShowToast('登录失败')
	}else {
		return res
	}

	// #endif
}

export default CustomLogin
