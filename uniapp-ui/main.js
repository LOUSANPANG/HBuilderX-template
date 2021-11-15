import Vue from 'vue'
import App from './App'
import uView from 'uview-ui'
// import store from '@/store'
import CONFIG from './config.js'

import customShowToast from './utils/custom_toast.js'
import isEnvironment from './utils/is_environment.js'
import './filter/filter.js'
import './router.js'


Vue.use(uView)
Vue.config.productionTip = false
Vue.prototype.$CONFIG = CONFIG
Vue.prototype.$TOAST = customShowToast
Vue.prototype.$ISENV = isEnvironment()
Vue.prototype.$ICON = process.env.HOST.ICON_URL
Vue.prototype.$FSfURL = process.env.HOST.FSF_URL


App.mpType = 'app'
const app = new Vue({
	// store,
	...App
})
app.$mount()
