// @description {toLogin} 权限问题跳转登录页

const getCurrentPageUrl = () => {
  let pages = uni.getCurrentPages()
  let currentPage = pages[ pages.length - 1 ]
  let url = currentPage.route
  return url
}

export const ToLogin = () => {
  // let path = getCurrentPageUrl()
  // if ( !path.includes('login') ) {
  //   uni.reLaunch({
  //     url: '/pages/login/login'
  //   })
  // }
  uni.reLaunch({
    url: '/pages/login/login'
  })
}