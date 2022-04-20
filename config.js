/**
 * 导出小程序host配置文件
 * @return {object} CONFIG 全局变量
 * @return {string} CONFIG.host 域名
 * @return {string} CONFIG.wxLogin 二次登录
 * @return {string} CONFIG.root1 服务模块一
 */

const host = process.env.HOST

const CONFIG = {
	host,
	wxLogin: `${host}/xxx`,
	root1: '/root1'
}

export default CONFIG
