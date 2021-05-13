<template>
	<view class="index">
	</view>
</template>

<script>
	import { PostTest } from '@/services/services-collection/test.js'
	export default {
		name: 'Index',

		data() {
			return {}
		},

		async onLoad() {
			try{
				const res = await PostTest({})
				console.log(res)
			}catch(e){
				console.log(e)
			}
		}
	}
</script>

<style lang="scss">
</style>
