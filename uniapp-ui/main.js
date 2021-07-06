import Vue from 'vue'
import App from './App'
import { router, RouterMount } from './router.js'
// import store from '@/store'
import CONFIG from './config.js'

import customShowToast from './utils/custom_toast.js'
import isEnvironment from './utils/is_environment.js'


Vue.config.productionTip = false
Vue.prototype.$CONFIG = CONFIG
Vue.prototype.$TOAST = customShowToast
Vue.prototype.$ISENV = isEnvironment()

Vue.use(router)
App.mpType = 'app'


const app = new Vue({
	// store,
	...App
})


// #ifdef H5
RouterMount(app, router, '#app')
// #endif

// #ifndef H5
app.$mount()
// #endif
