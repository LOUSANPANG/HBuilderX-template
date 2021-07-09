/**
 * 导出小程序host配置文件
 * @return {object} CONFIG 全局变量
 * @return {string} CONFIG.host 域名
 * @return {string} CONFIG.wxLogin 二次登录
 * @return {string} CONFIG.root1 服务模块一
 */

// #ifndef MP-DEV
	// #ifndef MP-TEST
const host = 'https://vipcard.sdykt.com.cn';//生产
	// #endif
// #endif

// #ifdef MP-TEST
const host = 'https://vipcard.sdykt.com.cn';//测试
// #endif

// #ifdef MP-DEV
const host = 'http://10.160.11.70:8080';//孙文超本地
// const host = 'http://10.160.11.154:8080';//娄广浩主机
// #endif


const CONFIG = {
	host,
	wxLogin: `${host}/xxx`,
	root1: '/root1'
}

export default CONFIG
