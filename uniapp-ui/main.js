import Vue from 'vue'
import App from './App'
import { router, RouterMount } from './router.js'
// import store from '@/store'
import CONFIG from './config.js'

Vue.prototype.$CONFIG = CONFIG
Vue.config.productionTip = false
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
