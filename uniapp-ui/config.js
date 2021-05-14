/**
 * 导出全局变量 静态配置文件
 * @return {object} CONFIG 全局变量
 * @return {object} CONFIG.SERVERAPI 服务地址列表
 * @return {string} CONFIG.SERVERAPI.test 测试服务地址
 */

const rootHost = 'https://vipcard.sdykt.com.cn'

const CONFIG = {
	rootHost,
	login: '/jeecg-boot/userManage'
}

export default CONFIG
