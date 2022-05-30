<script>
	import { detectVersionUpdate } from '@/utils/can_version.js'

	export default {
		globalData: {},
		onLaunch() {},
		onShow() {
			// 检查版本更新
			detectVersionUpdate()
		},
		onHide() {},
		onError() {},
		onUnhandledRejection() {},
		// 通过分享卡片、小程序码发现页面不存在，才会触发
		onPageNotFound() {},
	}
</script>

<style lang="scss">
	@import "./styles/iconfont.css";
	@import "@/uni_modules/uview-ui/index.scss";
	
	page {
		background-color: #ffffff;
	}
</style>
