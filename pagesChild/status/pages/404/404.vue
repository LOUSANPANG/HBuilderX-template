<!-- 404页 -->
<template>
	<view class="notfound">
		<view class="container">
			<view class="title">404</view>
			<view class="text">Page not found</view>
			<view class="action">
				<navigator class="nav" open-type="navigateBack">返回</navigator>
				<navigator class="nav" open-type="switchTab" url="/pages/index/index">回到首页</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'NotFound'
	}
</script>

<style lang="scss" scoped>
	.notfound {
		position: relative;
		width: 100vh;
		height: 100vh;
		background-color: #2F3242;
	}

	.container {
		width: 440rpx;
		height: 360rpx;
		position: absolute;
		left: 25%;
		top: 40%;
		transform: translate(-50%, -50%);
		color: #FFF;
		.title {
			font-size: 80rpx;
			margin-bottom: 40rpx;
		}
		.text {
			font-size: 60rpx;
			margin-bottom: 40rpx;
		}
	}

	.action {
		display: flex;
		.nav {
			background: #68c950;
			padding: 18rpx 45rpx;
			border-radius: 8rpx;
			color: #FFF;
			font-weight: 700;
			font-size: 30rpx;
			margin-right: 40rpx
		}
	}
</style>
