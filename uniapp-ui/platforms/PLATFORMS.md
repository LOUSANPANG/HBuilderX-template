# 存放各平台专用页面的目录

## app
* 不支持 vw vh 百分比单位

## nvue
* 暂不支持全局样式
* 不支持 v-show

## h5
* < 4kb 转化 base64
* v-for="(item, index) in 10" item 从 1 开始


## weixin
* 仅支持 class 选择器

## alipay
* 组件内 image 标签不可使用相对路径
* 不支持 vue 的事件监听绑定方式

## 非H5
* v-for="(value, name, index) in object" 中，index 参数是不支持的
* 事件修饰符不支持 prevent、capture、self、once、passive