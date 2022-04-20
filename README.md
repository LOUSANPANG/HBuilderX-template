## 安装使用
```
yarn add @vue/cli global

vue create -p dcloudio/uni-preset-vue my-project

选择自定义模版
LOUSANPANG/HBuilderX-template
```

## 一、基于 `uni-ui` 模版的二次封装

### common 公共工具函数
	- custom_filterfield.js 字段、中文转换工具
	- helper.js 其他辅助函数

### components 公共组件
	- my-amount 金额组件
	- my-empty 多种空状态组件
	- my-loading 多种加载动画组件
	- my-skeleton-screen 骨架屏组件

### docs 文档
	- APPOPTIMIZATION.md APP性能优化文档
	- HELP.md HBuilder帮助文档
	- NOTE.md 兼容性、边界问题帮助文档
	- STANDARD.md 代码规范文档
	- WXOPTIMIZATION.md 微信小程序性能优化文档

### filter
	- filter.js 项目过滤器（手机号、金额、卡号等）

### hybrid App端存放本地html文件的目录
		- docs.md 使用说明文档

### js_sdk 第三方sdk
	- js-md5
	- jweixin
	- luch-request
	- uuid 

### mixins
	- mixinsLoadMore.js 上拉加载、下拉刷新
	- mixinsNetWorkStatus.js 监听网络状态变化

### mycomponents 支付宝小程序自定义组件存放目录
	- docs.md 使用说明文档

### pages 页面放置目录
	- index 首页
	- login 登录页

### pagesChild 分包目录
	- status 状态页（成功、失败、404）

### platforms 存放各平台专用页面的目录
	- app-plus
	- h5
	- map-alipay
	- mp-weixin
	- PLATFORMS.md 各平台兼容性文档说明

### responsive 宽屏适配文件
	- left-window.vue
	- right-window.vue
	- top-window.vue
	- WINDOW.md 宽屏适配指南

### services 请求服务文件
	- api 各页面服务地址存放目录
	- services-base 服务拦截器
		- http-inerceptors.js 拦截器
		- md5-signature.js md5加解密
		- silent-login.js 二次登录
		- tologin.js 回调登录
	- http-interceptors__simple.js 服务拦截器简写版（可替代services-base文件）
	- docs.md 拦截器介绍文档 

### static 静态文件
	- h5 h5的静态文件
	- map-alipay 阿里小程序的静态文件
	- mp-weixin 微信小程序的静态文件
	- system 存放系统静态文件

### store vuex状态管理文件目录
	- test 测试module
	- index.js 出口

### style 样式文件目录
	- compatible.css 各平台兼容性css
	- iconfont.css icon文件
	- index.scss 样式出口文件
	- mixin.scss 布局相关、文本相关、动画类
	- variables.scss 文本颜色、功能色、主题色

### utils 工具函数
	- can_use.js 判断APP、小程序的API，回调，参数，组件，是否在当前版本可用
	- can_version.js 检测版本更新
	- custom_authorize.js 授权成功后的各个权限接口
	- custom_login.js 登录
	- custom_storage.js 二次封装缓存api
	- custom_toast.js 二次封装toast
	- custom_wx.js 微信公众号登录授权
	- is_systeminfo.js 判断终端环境
	- parse_url.js 解析url
	- promise_vue3.js vue2、vu3 promise的封装形式
	- rule_reg.js 正则校验手机号、邮箱、身份证等
	- wx_errno.js 微信错误码大全
	- wx_log.js 小程序实时日志

### uview-ui 1.x ui库

### workers 多线程

### wxcomponents 存 H5 App 微信小程序 QQ小程序 组件的目录

### config.js 存放服务地址文件

### package.json 多环境编译

### router.js 简易路由拦截

### vue.config.js 内网穿透、生产环境优化、环境变量等