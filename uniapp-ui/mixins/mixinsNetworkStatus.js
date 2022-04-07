/**
 * 监听网络状态
 * 在父级组件添加 <u-top-tips ref="networkStatus"></u-top-tips>
 */

export default {

	mounted() {
		// #ifdef H5 || MP-WEIXIN || APP-PLUS
			uni.onNetworkStatusChange(function(res) {
				console.log(11111)
				console.log('当前是否有网络连接 ===> ', res.isConnected)
				console.log('当前网络类型 ===> ', res.networkType)
				if (!res.isConnected) {
					this.$refs.networkStatus.show({
						title: '暂无网络链接，请检查网络。',
						type: 'info',
						duration: '5000'
					})
				}
			})
		// #endif
	},

	destroyed() {
		// #ifdef H5 || MP-WEIXIN || APP-PLUS
		console.log(2222)
			uni.offNetworkStatusChange()
		// #endif
	},

}
