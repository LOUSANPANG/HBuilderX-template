/**
 * 封装uni.showToast()
 * @param {string} title 标题
 * @param {number} duration 时间
 * @param {string} icon 图标
 */
const customShowToast = (title, duration = 2000, icon = 'none') => {
	return new Promise((resolve, reject) => {
		uni.showToast({
			title,
			duration,
			icon,
			mask: true,
			success: resolve,
			fail: reject
		})
	})
}

export default customShowToast
