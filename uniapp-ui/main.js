import Vue from 'vue'
import App from './App'
// import store from '@/store'
import CONFIG from './config.js'


Vue.prototype.$CONFIG = CONFIG

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	// store,
	...App
})
app.$mount()
