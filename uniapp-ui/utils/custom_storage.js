import CustomShowToast from './custom_toast.js'


/**
 * 封装缓存存取操作 （上限10MB，单个key上限1MB）
 * @param {string} key 本地缓存中指定的key
 * @param {any} data 需要缓存的内容（原生类型、Date、JSON.stringify序列化的对象）
 * @param {boolean=} ifToast 存储成功是否提示
 */


// 异步存储缓存
export const SetStorage = ( key, data, ifToast = false ) => {
  uni.setStorage({
    key,
    data,
    success() {
      ifToast && CustomShowToast('存储成功')
    },
    fail() {
      CustomShowToast('存储失败')
    }
  })
}


// 同步存储缓存
export const SetStorageSync = ( key, data, ifToast = false ) => {
  try {
    uni.setStorageSync(key, data)
    ifToast && CustomShowToast('存储成功')
  } catch (e) {
    CustomShowToast('存储缓存失败')
  }
}


// 同步读取缓存[实际工作中暂未用到异步读取缓存][存储数据量暂时不是很大]
export const GetStorageSync = ( key ) => {
  try {
    const _GETDATA = uni.getStorageSync(key)
    if (_GETDATA) return _GETDATA
  } catch (e) {
    CustomShowToast('读取缓存失败')
  }
}


// 异步清除指定key
export const RemoveStorage = ( key, ifToast = false ) => {
  uni.removeStorage({
    key,
    success() {
      ifToast && CustomShowToast('清除缓存成功')
    },
    fail() {
      CustomShowToast('清除缓存失败')
    }
  })
}


// 同步清除指定key
export const RemoveStorageSync = ( key, ifToast = false ) => {
  try {
    uni.removeStorageSync(key)
    ifToast && CustomShowToast('清除缓存成功')
  } catch (e) {
    CustomShowToast('清除缓存失败')
  }
}


// 异步清除所有缓存
export const ClearStorage = ( ifToast = false ) => {
  uni.clearStorage({
    success() {
      ifToast && CustomShowToast('清除缓存成功')
    },
    fail() {
      CustomShowToast('清除缓存失败')
    }
  })
}


// 同步清除所有缓存
export const ClearStorageSync = ( ifToast = false ) => {
  try {
    uni.clearStorageSync()
    ifToast && CustomShowToast('清除缓存成功')
  } catch (e) {
    CustomShowToast('清除缓存失败')
  }
}