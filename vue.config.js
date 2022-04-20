module.exports = {
	chainWebpack: (config) => {
		// #ifdef H5
			// 调试时允许内网穿透，让外网的人访问到本地调试的H5页面
			config.devServer.disableHostCheck(true)
		// #endif
		
		// 生产环境去除console代码
		// config.optimization.minimizer('terser').tap((args) => {
		// 	const compress = args[0].terserOptions.compress
		// 	compress.drop_console = true
		// 	compress.pure_funcs = [
		// 		'__f__', // App 平台 vue 移除日志代码
		// 		// 'console.debug' // 可移除指定的 console 方法
		// 	]
		// 	return args
		// })
		
		// 配置环境变量
		config
			.plugin('define')
			.tap(args => {
				args[0]['process.env'].VAR = '"i am global var"'
				return args
			})
	}
}
