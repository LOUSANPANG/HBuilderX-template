/**
 * 判断APP、小程序的API，回调，参数，组件，是否在当前版本可用
 * @example uni.canIUse('getSystemInfoSync.return.safeArea.left')
 * @Description 使用 ${API}.${method}.${param}.${option} 或者 ${component}.${attribute}.${option} 方式来调用
 * @param {string} ${API}代表 API 名字
 * @param {string} ${method}代表调用方式，有效值为return, success, object, callback
 * @param {string} ${param}代表参数或者返回值
 * @param {string} ${option}代表参数的可选值或者返回值的属性
 * @param {string} ${component}代表组件名字
 * @param {string} ${attribute}代表组件属性
 * @param {string} ${option}代表组件属性的可选值
 */
export const canIUse = (param) => {
	const _CANIUSE = uni.canIUse(param)
	return _CANIUSE
}
