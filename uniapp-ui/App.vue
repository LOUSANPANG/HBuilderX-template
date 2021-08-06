<script>
	import { detectVersionUpdate } from '@/utils/can_version.js'

	export default {
		onShow() {
			// 检查版本更新
			detectVersionUpdate()
		}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
</style>
