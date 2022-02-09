/**
 * vue2 的 promise   const [err, res] = await uni.request()
 * vue3 的 promise ==>  try{
													var res = await uni.request()
													console.log(res); // 此处的 res 参数，与使用默认方式调用时 success 回调中的 res 参数一致
												} catch (err) {
													console.error(err) // 此处的 err 参数，与使用默认方式调用时 fail 回调中的 err 参数一致
												}
 */

function isPromise (obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function'
}

uni.addInterceptor({
  returnValue (res) {
    if (!isPromise(res)) {
      return res
    }
    return new Promise((resolve, reject) => {
      res.then(res => {
        if (res[0]) {
          reject(res[0])
        } else {
          resolve(res[1])
        }
      })
    })
  }
})