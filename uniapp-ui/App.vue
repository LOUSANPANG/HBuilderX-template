<script>
	import {
		DetectVersionUpdate
	} from '@/utils/can_version.js'

	export default {
		onShow() {
			// 检查版本更新
			DetectVersionUpdate()
		}
	}
</script>

<style lang="scss">
</style>
