<template>
	<view class="index"></view>
</template>

<script>
	import { PostLogin } from '@/services/services-collection/login.js'

	export default {
		name: 'Index',

		data() {
			return {}
		},

		async onLoad() {
			// try {
			// 	const loginRes = await PostLogin({ code: '' })
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
	.index {
		width: 100%;
		height: 100vh;
		position: relative;
	}
</style>
