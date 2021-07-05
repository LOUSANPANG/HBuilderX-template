<template>
	<view class="login">
		<button type="primary" @click="handleLogin">登录</button>
	</view>
</template>

<script>
	export default {
		name: 'Login',

		data() {
			return {
				routeQuery: {}
			}
		},

		onLoad() {
			const { query } = this.$Route
			this.routeQuery = query
		},

		methods: {
			handleLogin() {
				uni.navigateTo({ url: this.routeQuery.formPath })
			}
		}
	}
</script>

<style lang="scss">
</style>
