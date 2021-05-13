/**
 * 导出全局变量 静态配置文件
 * @return {object} CONFIG 全局变量
 * @return {object} CONFIG.SERVERAPI 服务地址列表
 * @return {string} CONFIG.SERVERAPI.test 测试服务地址
 */

const rootHost = 'http://xxx.com/api/v1'

const CONFIG = {
	test: rootHost + '/test'
}

export default CONFIG
