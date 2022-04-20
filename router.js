// 跳转拦截
import Vue from 'vue'
import { getStorageSync } from '@/utils/custom_storage.js'

Vue.prototype.$JUMP = function(backurl, jumpType = 'navigateTo') {
	const token = getStorageSync('token')

	if(token) {
		uni[jumpType]({
			url: backurl
		})
	} else {
		uni.navigateTo({
			url: `/pages/login/login?backurl=${url}`
		})
	}
}
