/**
 * 接口签名工具
 * @param {Object} data 待签名数据（需进行md5处理的数据）
 * @param {String} salt 盐值
 */
import md5 from '@/js_sdk/js-md5/build/md5.min.js'

function md5WithSalt(data = {}, salt) {
	let md5Val
	let strData
	// if (!salt) throw new Error('salt is required')
	if (typeof data !== 'object') throw new Error("data's type should be Object")
	if (typeof data === 'object' && !Object.keys(data).length) {
		strData = ''
	} else {
		// 数据字段按ascii码升序排列
		const keysArr = Object.keys(data)
		const sortedKeysArr = keysArr.sort()
		// 生成待md5字符串
		const strArr = []
		for (let i = 0, arrLength = sortedKeysArr.length; i < arrLength; i++) {
			if (typeof data[sortedKeysArr[i]] === 'object' || data[sortedKeysArr[i]] instanceof Array) {
				strArr.push(sortedKeysArr[i] + '=' + JSON.stringify(data[sortedKeysArr[i]]))
			} else if (data[sortedKeysArr[i]]) {
				strArr.push(sortedKeysArr[i] + '=' + data[sortedKeysArr[i]])
			}
		}
		strData = strArr.join('&')
	}
	// 生成md5值
	const str = salt + strData
	const hash = md5.create().update(str)
	md5Val = hash.hex()
	return md5Val
}

export default md5WithSalt
