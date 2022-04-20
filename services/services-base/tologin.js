// @description {toLogin} 权限问题跳转登录页

const getCurrentPageUrl = () => {
	let pages = getCurrentPages()
	let currentPage = pages[pages.length - 1]
	let url = currentPage.route
	return url
}

export const toLogin = () => {
	let path = getCurrentPageUrl()
	if (!path.includes('/login/login')) {
		uni.navigateTo({
			url: '/pages/login/login'
		})
	}
}
