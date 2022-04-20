<!-- 金额组件 ¥100.00 ¥/.00字体小 100字体大 -->

<template>
	<view class="my-amount" :style="{ color: amountColor }">
		<view class="unit-amount" :style="{ fontSize: decimalAmountSize + 'rpx' }">{{unitAmount}}</view>
		<view class="integer-amount" :style="{ fontSize: integerAmountSize + 'rpx' }">{{integerAmount}}</view>
		<view class="decimal-amount" :style="{ fontSize: decimalAmountSize + 'rpx' }">{{decimalAmount}}</view>
	</view>
</template>

<script>
	export default {
		name: 'MyAmount',
		props: {
			amount: { // 展示的金额
				type: Number,
				required: false,
				default: 0
			},
			integerAmountSize: { // 整数金额字体大小
				type: Number,
				required: false,
				default: 30
			},
			decimalAmountSize: { // 小数金额字体大小
				type: Number,
				required: false,
				default: 24
			},
			amountColor: { // 金额颜色
				type: String,
				required: false,
				default: '#F7283D'
			}
		},

		data() {
			return {
				unitAmount: '¥', // 单位
				integerAmount: '--', // 整数部分
				decimalAmount: '.--' // 小数部分
			}
		},
		
		mounted() {
			this.splitAmount()
		},

		methods: {
			// 格式化金额方法
			commFormatAmount(num, options = { style: 'currency', currency: 'CNY' }) {
				if (!num) return ''
				return (Number(num)).toLocaleString('zh-CN', options)
			},
			// 拆分金额
			splitAmount() {
				const formatAmount = this.commFormatAmount(this.amount)
				this.unitAmount = formatAmount[0]
				this.integerAmount = formatAmount.slice(1, formatAmount.length - 3)
				this.decimalAmount = formatAmount.slice(-3)
			}
		}
	}
</script>

<style lang="scss">
	.my-amount 	{
		display: flex;
		align-items: flex-end;
	}
</style>
