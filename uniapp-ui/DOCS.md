## 引入文件
* js文件不支持使用 / 开头的方式引入，可以使用 @ 或者相对路径
* 小程序不支持本地图片、字体图标
	* 小于 40kb，转化 base64；大于 40kb，需手动转 base64、网络图片
	* `background-image: url('~@/static/logo.png');`
	* 微信小程序不支持相对路径
* 不能使用 * 选择器


## css
[css变量](https://uniapp.dcloud.io/frame?id=css%e5%8f%98%e9%87%8f)


## 框架
* v-show 不支持 template 元素
* 事件中访问原始的 DOM 事件，使用 $event 参数变量
* 禁止蒙版下的页面滚动使用 @touchmove.stop.prevent="moveHandle"，moveHandle 可以用来处理 touchmove 的事件，也可以是一个空函数
* 全局注册
```
import Vue from 'vue'
import pageHead from './components/page-head.vue'
Vue.component('page-head',pageHead)
```

## 组件
* 组件传递对象时，v-bind="object" => :key1="value1" :key2="value2"
* v-slot 只能添加在 <template> 上 v-slot === #

## api
* 

## 


## 工具
* 默认不需要开启es6转换，但如果使用 wxcomponents wxml 自定义组件，HBuilderX 会自动开启es6转换

## [ts支持](https://uniapp.dcloud.io/frame?id=typescript-%e6%94%af%e6%8c%81)
## [小程序自定义组件](https://uniapp.dcloud.io/frame?id=%e5%b0%8f%e7%a8%8b%e5%ba%8f%e8%87%aa%e5%ae%9a%e4%b9%89%e7%bb%84%e4%bb%b6%e6%94%af%e6%8c%81)
## [wxs](https://uniapp.dcloud.io/frame?id=wxs)
## [renderjs](https://uniapp.dcloud.io/frame?id=renderjs)