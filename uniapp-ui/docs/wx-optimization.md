## 微信小程序优化文档

### 图片
- 避免使用大图;

### 组件 API
- 减少组件数量、减少节点嵌套层级;
- scroll-view尤其注意视图层和逻辑层频繁进行通讯;
- 长列表使用ulist;
- 左右滑动的长列表推荐新闻模板;
- canvas里做跟手操作，app端建议使用renderjs，小程序端建议使用web-view组件;

### 页面
- 新页面渲染和窗体进入动画抢资源，造成页面切换卡顿、掉帧。建议延时100ms~300ms渲染图片或复杂原生组件，分批进行数据通讯，以减少一次性渲染的节点数量;
- App-nvue和H5，支持页面预载，uni.preloadPage，可以提供更好的使用体验;
- 优化背景闪白将样式写在 App.vue 里;
- app端还可以在pages.json的页面的style里单独配置页面原生背景色，比如在globalStyle->style->app-plus->background下配置全局背景色;

### 打包
- 配置某些编译功能是否开启;
- 开启摇树优化;
- App端不需要地图、蓝牙等这些模块，可以裁剪掉，以缩小发行包体积。在 manifest.json-App模块权限里可以选择;
- 页面初始渲染缓存配置 initialRenderingCache
#### 分包
- 分包预下载
- 分包异步化(允许通过一些配置和新的接口，使部分跨分包的内容可以等待下载后异步使用，从而一定程度上解决这个限制)
- 避免非必要的全局自定义组件和插件
- 控制代码包内的资源文件
- 及时清理无用代码和资源
#### 代码注入优化(按需注入和用时注入)
- 避免启动页面所在的主包或者分包文件全部加载。
- {"lazyCodeLoading": "requiredComponents"}
- 启动过程中减少同步 API 的调用
	* 合理缓存getSystemInfo/getSystemInfoSync
	* getStorageSync/setStorageSync不应用于运行时的数据传递或全局状态管理
	* 避免启动过程进行复杂运算

### js
- 高性能渲染优先选用 `wxs`
#### 初始渲染缓存[https://developers.weixin.qq.com/miniprogram/dev/framework/view/initial-rendering-cache.html]
- 使视图层不需要等待逻辑层初始化完毕，而直接提前将页面初始 data 的渲染结果展示给用户
#### data数据
- 合理使用优化data数据;
- 减少一次性节点数量，延迟setdata;
#### 渲染性能优化
- 适当监听页面或组件的 scroll 事件
- 选择高性能的动画实现方式
- 使用 IntersectionObserver 监听元素曝光
- 控制 WXML 节点数量和层级
- 控制在 Page 构造时传入的自定义数据量
#### 页面切换优化
- 避免在 onHide/onUnload 执行耗时操作
- 首屏渲染优化
- 提前发起数据请求
#### 资源加载优化
- 控制图片资源的大小
- 避免滥用 image 组件的 widthFix/heightFix 模式
#### 内存优化
- 合理使用分包加载
- 使用按需注入和用时注入
- 内存分析
- 处理内存告警

### 宽屏适配
- leftWindow
- topWindow
- rightWindow

### 启用多线程worker
- 一些异步处理的任务

### 周期性更新
- 能够在用户未打开小程序的情况下，也能从服务器提前拉取数据
### 数据预拉取
- 在小程序冷启动的时候通过微信后台提前向第三方服务器拉取业务数据


