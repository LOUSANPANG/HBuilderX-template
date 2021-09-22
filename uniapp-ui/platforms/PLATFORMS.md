# [存放各平台专用页面的目录](https://uniapp.dcloud.io/matter)
## platforms目录下只支持放置页面文件（即页面vue文件）


### uni-app
* 不能使用 `*` 选择器	。
* 不支持按键修饰符。
* 不支持 keep-alive。
* 不支持 transition。

### app nvue
* `rem` 根字体大小不可以通过 `page-meta` 配置。
* 不支持 `vw`、`vh`、百分比单位。
* 暂不支持全局样式 `app。vue` 中定义的 `css`。
* 不支持 `v-show`。
* 不支持全局注册组件。
* 若要使用操作 `window`、`document` 的库，需要通过 `renderjs` 来实现。
* 在 `pages。json` 里的 `titleNView` 或页面里写的 `plus api` 中涉及的单位，只支持 `px`。
* 不支持 `--status-bar-height` 变量。
* 不可直接使用css的方式引入字体文件。
* 暂不支持wxs、sjs、filter。js，但支持renderjs。
* url(//alicdn.net)等路径，改为url(https://alicdn.net)，因为在App端//是file协议。
* nvue web-view 必须指定样式宽高。
* 文字内容，必须、只能在<text>组件下。不能在<div>、<view>的text区域里直接写文字。否则即使渲染了，也无法绑定js里的变量。
* 只有text标签可以设置字体大小，字体颜色。
* nvue 的各组件在安卓端默认是透明的，如果不设置background-color，可能会导致出现重影的问题。
* class 进行绑定时只支持数组语法。
* Android端在一个页面内使用大量圆角边框会造成性能问题，尤其是多个角的样式还不一样的话更耗费性能。应避免这类使用。

### h5
* `< 4kb` 转化 `base64`。
* `v-for="(item, index) in 10"` `item` 从 1 开始。
* 使用 `vh` 单位的时候注意 `100vh` 包含导航栏，使用时需要减去导航栏和 `tabBar` 高度。
* 使用罗盘、地理位置、加速计等相关接口需要使用 https 协议，本地预览（localhost）可以使用 http 协议。
* PC 端 Chrome 浏览器模拟器设备测试的时候，获取位置 API 需要连接谷歌服务器。
* 组件内（页面除外）不支持 onLoad、onShow 等页面生命周期。
* 不支持 v-once。
* 不支持微信小程序自定义组件。

### 非H5
### 不支持 * 选择器。
* `v-for="(value, name, index) in object"` 中，`index` 参数是不支持的。
* 事件修饰符不支持 `prevent`、`capture`、`self`、`once`、`passive`。
* 只能用于获取自定义组件，不支持通过 `this。$refs。content` 来获取内置组件实例（如：view、text）。
* 不支持 作用域插槽、动态组件、异步组件、keep-alive、transition。
* v-for="(item, index) in 10" 中，在H5平台 item 从 1 开始，其他平台 item 从 0 开始。

### 小程序
* 小程序不支持在 `css` 中使用本地文件，需以 `base64` 方式方可使用，但 `uni-app` 会自动将小于 `40kb` 其转化为 `base64` 格式。

### weixin
* 自定义组件中仅支持 `class` 选择器。
* `css` 背景图片不支持相对路径（真机不支持，开发工具支持）。
* 不支持 v-once。


### alipay
* 组件内 `image` 标签不可使用相对路径。
* 不支持 `vue` 的事件监听绑定方式。
* showLoading 是不透传的，也就是说 loading 显示的时候无法点击页面内容。
* 使用伪元素做边框时，高度值不能用 1rpx，需要直接用 1px。
* 不支持 ECharts。
* 支付功能模拟不了，需要真机测试。



## baidu
* 不要在 data 内使用 hidden ，可能会导致渲染错误。
* 不支持属性选择器。
* 不支持 scoped。
