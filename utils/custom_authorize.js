// HACK 授权成功后的各个权限接口⛔️
import customShowToast from './custom_toast.js'


/**
 * 获取scope title
 * @param {string} scope 需要获取权限的scope(eg:'userInfo')
 * @return {string} scopeTitle 权限文本
 */
const getScopeTitle = (scope) => {
	let scopeTitle
	switch (scope) {
		case 'userInfo':
			scopeTitle = '用户信息'
			break;
		case 'userLocation':
			scopeTitle = '地理位置'
			break;
			// #ifdef MP-WEIXIN
		case 'userLocationBackground':
			scopeTitle = '后台定位'
			break;
			// #endif
		case 'address':
			scopeTitle = '通信地址'
			break;
		case 'record':
			scopeTitle = '录音功能'
			break;
		case 'writePhotosAlbum':
			scopeTitle = '保存到相册'
			break;
		case 'camera':
			scopeTitle = '摄像头'
			break;
			// #ifdef MP-WEIXIN
		case 'invoice':
			scopeTitle = '获取发票'
			break;
		case 'invoiceTitle':
			scopeTitle = '发票抬头'
			break;
		case 'werun':
			scopeTitle = '微信运动步数'
			break;
			// #endif
	}
	return scopeTitle
}


/**
 * 获取权限接口信息
 * @param {string} scope 需要获取权限的scope(eg:'userInfo')
 * @return {object | void} res 返回权限接口信息
 */
const getScopePortRes = async (scope) => {
	if (scope === 'userInfo') {
		// NOTE 登录状态过期getUserInfo的userInfo为匿名数据，需用getUserProfile代替。
		// 必须用户手动触发
		const [err, res] = await uni.checkSession()
		if (err) {
			console.log('登录状态已过期❌：', [err, res])
			const [err, res] = await uni.getUserProfile({
				desc: '授权您的信息保证系统正常使用'
			})
			if (err) {
				console.log('用户信息获取失败❌：', err)
				customShowToast('用户信息获取失败，请重新授权。', 3000)
			} else {
				return res
			}
		} else {
			const [err, res] = await uni.getUserInfo({
				// #ifdef MP-WEIXIN
				withCredentials: true
				// #endif
			})
			if (!err) {
				console.log('用户信息获取失败❌：', err)
				customShowToast('用户信息获取失败')
			} else {
				return res
			}
		}
	} else if (scope === 'userLocation') {
		const [err, res] = await uni.getLocation()
		if (err) {
			console.log('地理位置获取失败❌：', err)
			customShowToast('地理位置获取失败')
		} else {
			return res
		}
	} else if (scope === 'userLocationBackground') {
		wx.startLocationUpdateBackground({
			success(res) {
				return res
			},
			fail(err) {
				console.log('后台定位开启失败❌：', err)
				customShowToast('后台定位开启失败')
			}
		})
	} else if (scope === 'address') {
		const [err, res] = await uni.chooseAddress()
		if (err) {
			console.log('通信地址获取失败❌：', err)
			customShowToast('通信地址获取失败')
		} else {
			return res
		}
	} else if (scope === 'record') {
		const [err, res] = await uni.chooseAddress()
		if (err) {
			console.log('录音功能开启失败❌：', err)
			customShowToast('录音功能开启失败')
		} else {
			return res
		}
	} else if (scope === 'writePhotosAlbum') {
		const [err, res] = await uni.saveImageToPhotosAlbum()
		if (err) {
			console.log('保存到相册开启失败❌：', err)
			customShowToast('保存到相册开启失败')
		} else {
			return res
		}
	} else if (scope === 'camera') {} else if (scope === 'invoice') {
		const [err, res] = await uni.chooseInvoice()
		if (err) {
			console.log('获取发票失败❌：', err)
			customShowToast('获取发票失败')
		} else {
			return res
		}
	} else if (scope === 'invoiceTitle') {
		// NOTE 前当前小程序必须关联一个公众号，且这个公众号是完成了微信认证的，才能调用 chooseInvoiceTitle。
		const [err, res] = await uni.chooseInvoiceTitle()
		if (err) {
			console.log('获取发票抬头失败❌：', err)
			customShowToast('获取发票抬头失败')
		} else {
			return res
		}
	} else if (scope === 'werun') {
		// NOTE 获取用户过去三十天微信运动步数。需要先调用 wx.login 接口。步数信息会在用户主动进入小程序时更新。
		wx.getWeRunData({
			success(res) {
				return res
			},
			fail(err) {
				console.log('获取微信运动步数失败❌：', err)
				customShowToast('获取微信运动步数失败')
			}
		})
	}
}


/**
 * 授权逻辑处理
 * @param {string} scope 需要获取权限的scope(eg:'userInfo')
 * @NOTE userLocation 权限需要在 manifest.json 配置 permission。
 * 1 立刻弹窗询问用户是否同意授权小程序使用某项功能或获取用户的某些数据。
 * 2 用户之前拒绝了授权，此接口会直接进入失败回调。
 * 2.1 显示模态弹窗, 引导手动开启授权。
 * 2.2 取消引导，提示授权失败，功能无法使用。
 * 2.3 开启授权，功能正常使用。
 * 3 用户已授权成功，功能正常使用。
 */
const customAuthorize = async (scope) => {
	// #ifndef APP-PLUS || H5 || MP-ALIPAY

	const [err, res] = await uni.authorize({ scope: `scope.${scope}` })
	const scopeTitle = getScopeTitle(scope)

	if (err) {
		console.log('===授权请求失败[err, res]❌：', [err, res])
		uni.showModal({
			title: `授权${scopeTitle}权限`,
			content: '您之前拒绝了授权，请手动开启授权，否则无法使用此功能。',
			confirmText: '设置',
			async success(res) {
				if (res.confirm) {
					const [err, res] = await uni.openSetting()
					if (err) {
						customShowToast(`${scopeTitle}授权失败，该功能无法使用。`)
					} else {
						return await getScopePortRes(scope)
					}
				} else if (res.cancel) {
					customShowToast(`${scopeTitle}授权失败，该功能无法使用。`)
				}
			}
		})
	} else {
		console.log('授权请求成功[err, res]✅：', [err, res])
		return await getScopePortRes(scope)
	}

	// #endif
}

export default customAuthorize
