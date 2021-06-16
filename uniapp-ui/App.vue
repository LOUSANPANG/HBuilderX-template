<script>
	import { DetectVersionUpdate } from '@/utils/can_version.js'
	export default {
		onShow() {
			// #ifdef MP
				// 检查版本更新
				DetectVersionUpdate()
			// #endif
		}
	}
</script>

<style lang="scss">
</style>
