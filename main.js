import Vue from 'vue'
import App from './App'
import uView from '@/uni_modules/uview-ui'
// import store from '@/store'
import CONFIG from './config.js'

import customShowToast from './utils/custom_toast.js'
import { systemInfo } from './utils/is_systeminfo.js'
import './utils/promise_vue3.js'
import './filter/filter.js'
import './router.js'


Vue.use(uView)
Vue.config.productionTip = false
Vue.prototype.$CONFIG = CONFIG
Vue.prototype.$TOAST = customShowToast
Vue.prototype.$SYSTEMINFO = systemInfo
// #ifndef APP-PLUS
Vue.prototype.$ICON = process.env.HOST.ICON_URL
Vue.prototype.$FSfURL = process.env.HOST.FSF_URL
// #endif


uni.$u.setConfig({
	// 修改$u.config对象的属性
	config: {
		unit: 'rpx'
	},
	// 修改$u.props对象的属性
	props: {}
})


App.mpType = 'app'
const app = new Vue({
	// store,
	...App
})
app.$mount()
