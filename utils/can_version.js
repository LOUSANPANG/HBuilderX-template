/**
 * 基础库
 * 在新版本客户端发布后，再通过后台灰度新版本基础库，灰度时长一般为 12 ～ 24 小时，在灰度结束后，用户设备上才会有新版本的基础库。
 * 第 1（major）、2（minor）位版本号更新通常需要依赖新版本的客户端，如：基础库 v2.1.3 运行在 v6.6.7 客户端，基础库 v2.2.0 需要 v6.7.0 客户端。
 * 第 3（patch） 位版本号的更新一般不需要依赖客户端更新，如：基础库v2.1.0 ~ v2.1.3 都运行在 v6.6.7 客户端，新版本发布会覆盖旧版本。
 */

import customShowToast from './custom_toast.js'


/**
 * 检测版本更新(检测版本中会有大概5s的延迟检测)
 * @function uni.getUpdateManager() 检测更新
 * @function _:onUpdateReady() 监听小程序有版本更新事件。客户端主动触发下载（无需开发者触发），下载成功后回调
 * @function _:applyUpdate() 强制小程序重启并使用新版本。在小程序新版本下载完成后（即收到 onUpdateReady 回调）调用
 * @function _:onUpdateFailed() 监听小程序更新失败事件
 */
export const detectVersionUpdate = () => {
	// #ifdef MP
	const _UpdateManager = uni.getUpdateManager()

	_UpdateManager.onUpdateReady(function() {
		uni.showModal({
			title: '更新提示',
			content: '新版本已经准备好，是否重启应用?',
			success(res) {
				if (res.confirm) {
					_UpdateManager.applyUpdate()
				}
			}
		})
	})

	_UpdateManager.onUpdateFailed(function() {
		customShowToast('新版本下载失败，请尝试清空缓存重新启动', 4000)
	})
	// #endif
}
