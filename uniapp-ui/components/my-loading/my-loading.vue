<template>
	<view class="my-loading">

		<!-- 旋转动画 -->
		<template v-if="loadingType === 'loading1'">
			<view class="loading1" />
		</template>

		<!-- 三个圆圈横向交叉动画 -->
		<template v-else-if="loadingType === 'loading2'">
			<view class="loading2">
				<view class="loading2-cirle loading2-cirle1" />
				<view class="loading2-cirle loading2-cirle2" />
				<view class="loading2-cirle loading2-cirle3" />
			</view>
		</template>

		<!-- 音乐跳动动画 -->
		<template v-else-if="loadingType === 'loading3'">
			<view class="loading3">
				<view class="loading3-line loading3-line1" />
				<view class="loading3-line loading3-line2" />
				<view class="loading3-line loading3-line3" />
			</view>
		</template>

	</view>
</template>

<script>
	/**
	 * MyLoading 全屏加载组件
	 * @description 数据加载时展示的加载组件
	 * @property {string=} loadingType 加载动画的类型
	 */
	export default {
		name: 'MyLoading',

		props: {
			loadingType: {
				type: String,
				default: 'loading1'
			}
		}
	}
</script>

<style lang="scss">
	@mixin positionCenter {
		position: absolute;
		left: 50%;
		top: 40%;
		transform: translate(-50%, -50%);
	}

	.my-loading {
		position: absolute;
		z-index: 10000;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: rgba(255, 255, 255, .4);
	}


	// =============================旋转动画
	$loading1Color: #2274e7;

	@keyframes loading1Spin {
	  to {
	    transform: rotate(360deg);
	  }
	}

	.loading1 {
		margin: 70% auto;
	  width: 100rpx;
	  height: 100rpx;
	  border: 10rpx solid rgba(255, 255, 255, 0);
	  border-top-color: $loading1Color;
	  border-right-color: $loading1Color;
	  border-radius: 50%;
	  animation: loading1Spin 1s linear infinite;
	}

	// =============================三个圆圈横向交叉动画
	$loading2Color1: #2274e7;
	$loading2Color2: #22e795;
	$loading2Color3: #e79522;

	.loading2 {
		@include positionCenter;
		z-index: 1;

		@keyframes rightToLeft {
			0% {
				transform: translateX(40rpx);
			}
			50% {
				transform: translateX(-40rpx);
			}
			100% {
				transform: translateX(40rpx);
				z-index: 2;
			}
		}
		@keyframes leftToRight {
			0% {
				transform: translateX(-40rpx);
				z-index: 2;
			}
			50% {
				transform: translateX(40rpx);
			}
			100% {
				transform: translateX(-40rpx);
			}
		}

		&-cirle {
			display: inline-block;
			position: absolute;
			width: 30rpx;
			height: 30rpx;
			border-radius: 50%;
			animation: 3s infinite linear;
			&1 {
				background: $loading2Color1;
				animation: leftToRight 1.2s infinite linear;
			}
			&2 {
				background: $loading2Color2;
				z-index: 2;
			}
			&3 {
				background: $loading2Color3;
				animation: rightToLeft 1.2s infinite linear;
			}
		}
	}

	// =============================音乐跳动
	$loading3Color1: #2274e7;
	$loading3Color2: #22e795;
	$loading3Color3: #e79522;

	.loading3 {
		display: flex;
		@include positionCenter;
		z-index: 1;

		@keyframes anim-scY {
			0%,
			100% {
				transform: scaleY(0);
			}
			50% {
				transform: scaleY(1);
			}
		}

		&-line {
			width: 20rpx;
			height: 80rpx;
			margin: 0 5rpx;
			transform: scaleY(0);
			transform-origin: bottom;
			animation: anim-scY 1s linear infinite;
			&1 {
				background: $loading3Color1;
			}
			&2 {
				animation-delay: .3s;
				background: $loading3Color2;
			}
			&3 {
				animation-delay: .6s;
				background: $loading3Color3;
			}
		}
	}
</style>
