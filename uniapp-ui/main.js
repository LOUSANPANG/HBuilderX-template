import Vue from 'vue'
import App from './App'
// import store from '@/store'
import CONFIG from './config.js'

import customShowToast from './utils/custom_toast.js'
import isEnvironment from './utils/is_environment.js'
import './router.js'


Vue.config.productionTip = false
Vue.prototype.$CONFIG = CONFIG
Vue.prototype.$TOAST = customShowToast
Vue.prototype.$ISENV = isEnvironment()

App.mpType = 'app'


const app = new Vue({
	// store,
	...App
})
app.$mount()
