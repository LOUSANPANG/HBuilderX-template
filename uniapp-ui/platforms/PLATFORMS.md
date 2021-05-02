# 存放各平台专用页面的目录

## app
* 不支持 vw vh 百分比单位
* 暂不支持全局样式
* 不支持 v-show
* 不支持全局注册组件
* 若要使用操作window、document的库，需要通过renderjs来实现

## h5
* < 4kb 转化 base64
* v-for="(item, index) in 10" item 从 1 开始
* 使用 vh 单位的时候注意 100vh 包含导航栏，使用时需要减去导航栏和 tabBar 高度
* 使用罗盘、地理位置、加速计等相关接口需要使用 https 协议，本地预览（localhost）可以使用 http 协议
* PC 端 Chrome 浏览器模拟器设备测试的时候，获取位置 API 需要连接谷歌服务器
* 组件内（页面除外）不支持 onLoad、onShow 等页面生命周期


## weixin
* 仅支持 class 选择器

## alipay
* 组件内 image 标签不可使用相对路径
* 不支持 vue 的事件监听绑定方式

## 非H5
* v-for="(value, name, index) in object" 中，index 参数是不支持的
* 事件修饰符不支持 prevent、capture、self、once、passive
* 只能用于获取自定义组件，不支持通过this.$refs.content来获取内置组件实例（如：view、text）
* 不支持 作用域插槽\动态组件\异步组件\keep-alive\transition