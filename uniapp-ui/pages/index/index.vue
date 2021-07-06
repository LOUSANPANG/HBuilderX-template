<template>
	<view class="index">
	</view>
</template>

<script>
	// import { postLogin } from '@/services/api/login.js'

	export default {
		name: 'Index',

		data() {
			return {}
		},

		async onLoad() {
			// try {
			// 	const loginRes = await postLogin({ code: '' })
			// 	// TODO success
			// 	console.log(loginRes)
			// } catch(e) {
			// 	//TODO fail code !== '1000' & return Promise.reject()
			// 	console.log(e)
			// }
		},

		methods: {
		}
	}
</script>

<style lang="scss">
	@import "./index.scss"
</style>
