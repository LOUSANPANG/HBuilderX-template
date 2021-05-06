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

## 跨端
```
#ifdef
#ifndef
#endef
APP-PLUS、H5、MAP-WEIXIN
// js json的编译格式
/* */ css scss的编译格式
<!-- --> html的编译格式
```

## 工具
* 默认不需要开启es6转换，但如果使用 wxcomponents wxml 自定义组件，HBuilderX 会自动开启es6转换

## [ts支持](https://uniapp.dcloud.io/frame?id=typescript-%e6%94%af%e6%8c%81)
## [小程序自定义组件](https://uniapp.dcloud.io/frame?id=%e5%b0%8f%e7%a8%8b%e5%ba%8f%e8%87%aa%e5%ae%9a%e4%b9%89%e7%bb%84%e4%bb%b6%e6%94%af%e6%8c%81)
## [wxs](https://uniapp.dcloud.io/frame?id=wxs)
## [renderjs](https://uniapp.dcloud.io/frame?id=renderjs)

## 规范
### css
```
布局(g-) 例如头部，尾部，主体，侧栏等
模块(m-) 较大整体，如登录注册，搜索等
元件(u-) 不可再分个体，例如按钮，input框等
功能(f-) 使用频率较高样式，例如清除浮动
皮肤(s-) 例如文字色，背景色，边框色等
状态(z-) 例如hover，选中等
j- 专门用于js获取节点，勿占用
```

## 优化
* 避免使用大图
* 优化data数据
* 长列表使用ulist
* 左右滑动的长列表推荐新闻模板
* 减少一次性节点数量，延迟setdata
* 减少组件数量、减少节点嵌套层级
* scroll-view尤其注意视图层和逻辑层频繁进行通讯
* canvas里做跟手操作，app端建议使用renderjs，小程序端建议使用web-view组件
* 优化页面切换卡顿
	* 新页面渲染和窗体进入动画抢资源，造成页面切换卡顿、掉帧。建议延时100ms~300ms渲染图片或复杂原生组件，分批进行数据通讯，以减少一次性渲染的节点数量
	* App-nvue和H5，支持页面预载，uni.preloadPage，可以提供更好的使用体验
* 优化背景闪白
	* 将样式写在 App.vue 里
	* app端还可以在pages.json的页面的style里单独配置页面原生背景色，比如在globalStyle->style->app-plus->background下配置全局背景色
* 优化包体积
	* 配置某些编译功能是否开启
	* 开启摇树优化
	* App端不需要地图、蓝牙等这些模块，可以裁剪掉，以缩小发行包体积。在 manifest.json-App模块权限里可以选择

## npm
1. 新建文件夹 - 进行npm init - npm i xx
2. 提取node_modules下用到的文件夹 - 提取至根目录
3. vue文件下直接引用