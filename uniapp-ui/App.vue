<script>
	export default {
		globalData: {
		},

		onLaunch: function() {
			// this.$scope.globalData
			console.warn('当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！')
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},

		// 捕获 app error
		onError(err) {
		}
	}
</script>

<style lang="scss">
	/* #ifndef APP-PLUS-NVUE */
	@import './common/compatible.css';
	/* #endif*/
</style>
