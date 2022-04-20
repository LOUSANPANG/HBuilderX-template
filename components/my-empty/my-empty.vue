<template>
	<view class="my-empty">
		<image class="img" :src="url" />
		<view class="title">{{title}}</view>
	</view>
</template>

<script>
	/**
	 * MyEmpty 空状态组件
	 * @description 数据为空时展示空状态组件
	 * @property {string=} url	图片https路径
	 * @property {string=} title 标题
	 */
	export default {
		name: 'MyEmpty',

		props: {
			url: {
				type: String,
				default: '/static/system/no-data.png'
			},
			title: {
				type: String,
				default: '暂无相关数据'
			}
		}
	}
</script>

<style lang="scss">
	.my-empty {
		position: absolute;
		z-index: 9999;
		left: 50%;
		top: 40%;
		transform: translate(-50%, -50%);
		text-align: center;

		.img {
			margin-bottom: 10rpx;
			display: block;
			width: 374rpx;
			height: 288rpx;
		}

		.title {
			font-size: 28rpx;
			color: rgba(0, 0, 0, 0.45);
		}
	}
</style>
