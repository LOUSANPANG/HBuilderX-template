import customShowToast from './custom_toast.js'


/**
 * 封装缓存存取操作 （上限10MB，单个key上限1MB）
 * @param {string} key 本地缓存中指定的key
 * @param {any} data 需要缓存的内容（原生类型、Date、JSON.stringify序列化的对象）
 * @param {boolean=} ifToast 存储成功是否提示
 */

const isType = (value) => {
	const type = Object.prototype.toString.apply(value)
	return type
}

/**
 * {} => '{}' => {}
 * 1 => '1' => 1
 * true => 'true => true
 * 'string' => 'string' => 'string'
 * null => 'null' => null
 * @param {string|number|boolean|object|null} value 数据
 * @param {string} type 存储 | 读取
 * @returns {string|number|boolean|object|null}
 */
const cacheValue = (value, type) => {
	let newValue
	const valueType = isType(value)
	if (type === 'set') {
		if (valueType === '[object Object]' || valueType === '[object Array]') {
			newValue = JSON.stringify([JSON.stringify(value), valueType])
		} else {
			newValue = JSON.stringify([value, valueType])
		}
	} else if (type === 'get') {
		if (!value) return null
		const [storageVal, storageType] = [...JSON.parse(value)]
		if (storageType === '[object String]') {
			newValue = storageVal
		} else {
			newValue = JSON.parse(storageVal)
		}
	}
	return newValue
}


// 异步存储缓存
export const setStorage = (key, data, ifToast = false) => {
	uni.setStorage({
		key,
		data: cacheValue(data, 'set'),
		success() {
			ifToast && customShowToast('存储成功')
		},
		fail() {
			customShowToast('存储失败')
		}
	})
}


// 同步存储缓存
export const setStorageSync = (key, data, ifToast = false) => {
	try {
		uni.setStorageSync(key, cacheValue(data, 'set'))
		ifToast && customShowToast('存储成功')
	} catch (e) {
		customShowToast('存储缓存失败')
	}
}

// 同步读取缓存[实际工作中暂未用到异步读取缓存][存储数据量暂时不是很大]
export const getStorageSync = (key) => {
	try {
		const _GETDATA = cacheValue(uni.getStorageSync(key), 'get')
		return _GETDATA
	} catch (e) {
		customShowToast(`读取${key}缓存失败`)
	}
}


// H5存储临时缓存
export const setSessionStorage = (key, data, ifToast = false) => {
	try {
		sessionStorage.setItem(key, cacheValue(data, 'set'))
		ifToast && customShowToast('存储成功')
	} catch (e) {
		customShowToast('存储临时缓存失败')
	}
}

// H5同步读取临时缓存
export const getSessionStorage = (key) => {
	try {
		const _GETDATA = cacheValue(sessionStorage.getItem(key), 'get')
		return _GETDATA
	} catch (e) {
		customShowToast(`读取${key}缓存失败`)
	}
}


// 异步清除指定key
export const removeStorage = (key, ifToast = false) => {
	if (!uni.getStorageSync(key)) return
	uni.removeStorage({
		key,
		success() {
			ifToast && customShowToast('清除缓存成功')
		},
		fail() {
			customShowToast('清除缓存失败')
		}
	})
}


// 同步清除指定key
export const removeStorageSync = (key, ifToast = false) => {
	if (!uni.getStorageSync(key)) return
	try {
		uni.removeStorageSync(key)
		ifToast && customShowToast('清除缓存成功')
	} catch (e) {
		customShowToast('清除缓存失败')
	}
}


// 异步清除所有缓存
export const clearStorage = (ifToast = false) => {
	uni.clearStorage({
		success() {
			ifToast && customShowToast('清除缓存成功')
		},
		fail() {
			customShowToast('清除缓存失败')
		}
	})
}


// 同步清除所有缓存
export const clearStorageSync = (ifToast = false) => {
	try {
		uni.clearStorageSync()
		ifToast && customShowToast('清除缓存成功')
	} catch (e) {
		customShowToast('清除缓存失败')
	}
}
