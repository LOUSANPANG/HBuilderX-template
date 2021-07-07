<template>
	<view class="my-countup">{{digit}}</view>
</template>

<script>
	/**
	 * MyCountUp 数字动画组件
	 * @description 数子的滚动动画
	 * @property {Number} digitTo	终止数
	 * @property {Number=} digitTo 起始数
	 * @property {Number=} runTime 时间
	 * @property {Number=} digitDelay 延迟时间
	 */
	export default {
		name: 'MyCountUp',

		props: {
			digitTo: {
				required: true,
				type: Number,
				default: 0,
			},
			digitFrom: {
				type: Number,
				default: 0,
			},
			runTime: {
				type: Number,
				default: 700,
			},
			digitDelay: {
				type: Number,
				default: 0,
			}
		},

		data() {
			return {
				speed: 100,
				digit: 0
			}
		},

		created() {
			setTimeout(() => this.start(), this.digitDelay)
		},

		methods: {
			start() {
				this.digit = this.digitFrom
				let interval = this.runTime / this.speed

				const timer = setInterval(() => {
					let count = 0
					if (interval === 0) {
						clearInterval(timer)
					} else if (interval === 1) {
						count = (this.digitTo - this.digit) / interval
					} else {
						const dVal = (this.digitTo - this.digit) / interval
						count = parseFloat(Math.random() * dVal).toFixed()
					}
					this.digit = (parseFloat(this.digit) + parseFloat(count)).toFixed()
					interval--
				}, this.speed)
			}
		}
	}
</script>

<style>
</style>
