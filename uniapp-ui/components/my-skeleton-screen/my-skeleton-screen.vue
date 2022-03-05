<template>
	<view class="my-skeleton-screen">
		<view class="post" v-for="item in num" :key="item">
			<view v-if="showThumbnail" class="thumbnail"></view>
			<view class="info">
				<view class="line line-title"></view>
				<view class="line line-desc"></view>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * SkeletonScreen 骨架屏
	 * @description 预加载数据时loading效果
	 * @property {Number} showThumbnail = [true|false] 是否开启缩略图
	 * @property {Boolean} num 骨架屏的展示数量
	 */
	export default {
		name: 'MySkeletonScreen',

		props: {
			num: {
				type: Number,
				default: 4
			},
			showThumbnail: {
				type: Boolean,
				default: true
			}
		}
	}
</script>

<style lang="scss">
	$base-color: #ddd;
	$shine-color: #e8e8e8;
	$animation-duration: 1.6s;
	$thumbnail-offset: 52+16;
	@mixin background-gradient() {
		background-image: linear-gradient(90deg, $base-color 0rpx, $shine-color 40rpx, $base-color 80rpx);
		background-size: 600rpx;
	}

	@keyframes shine-lines {
		0% {
			background-position: -100rpx;
		}
		40%,
		100% {
			background-position: 140rpx;
		}
	}
	@keyframes shine-thumbnail {
		0% {
			background-position: -100rpx + $thumbnail-offset;
		}
		40%,
		100% {
			background-position: 140rpx + $thumbnail-offset;
		}
	}

	.my-skeleton-screen {
		width: 100%;
		height: 100vh;
	}
	
	.post {
		display: flex;
		width: 95%;
		height: 168rpx;
		margin: 0 auto 24rpx;
	}
	.thumbnail {
		margin-right: 14rpx;
		width: 280rpx;
		height: 100%;
		border-radius: 14rpx;
		background-color: #ccc;
		@include background-gradient;
		animation: shine-thumbnail $animation-duration infinite linear;
	}
	
	.info {
		width: 100%;
	}
	.line {
		margin-top: 14rpx;
		height: 28rpx;
		border-radius: 7rpx;
		background-color: #ddd;
		@include background-gradient;
		animation: shine-lines $animation-duration infinite linear;
		&-title {
			margin-bottom: 28rpx;
			width: 35%;
		}
		&-desc {
			width: 45%;
		}
	}
</style>
