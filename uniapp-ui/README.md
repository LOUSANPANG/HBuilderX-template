## 安装使用
```
yarn add @vue/cli global

vue create -p dcloudio/uni-preset-vue my-project

选择自定义模版
LOUSANPANG/HBuilderX-template
```

## 一、基于 `uni-ui` 模版的二次封装
### 组件
- 空状态组件
- 骨架屏
### 兼容跨端
- platforms
### 工具
- can i use
- 版本更新
- 自定义缓存
- 简略的toast
- 自定义工具函数
### 样式
- uni.scss 
	- 布局
	- 色值
	- 基础样式
### request
- 基于 `luch-request` 二次 `promise` 封装
	* 基础配置
	* 请求前后拦截
	* 统一处理状态码
	* 统一处理权限
### vuex
- 全局状态管理




## 二、code standard
### 文件管理
- common
	* 存放公共css
	* 存放公共函数
	* SDK
- components
	* 公共组件
- hybrid
	* App端存放本地html文件的目录
- pages
	* 页面
- platforms
	* 存放各平台专用页面的目录
- resonsive
	* 适配pc宽屏文件
- services
  * 接口服务
- static
	* 静态文件目录
- store
	* vuex
- utils
	* 工具文件
- wxcomponents
	* wx文件

### css
- 命名
```
	布局(g-) 例如头部，尾部，主体，侧栏等
	模块(m-) 较大整体，如登录注册，搜索等
	元件(u-) 不可再分个体，例如按钮，input框等
	功能(f-) 使用频率较高样式，例如清除浮动
	皮肤(s-) 例如文字色，背景色，边框色等
	状态(z-) 例如hover，选中等
	j- 专门用于js获取节点，勿占用
```
- BEM
	* 同级块 `xx--xx`
	* 同级子元素 `xx-xx`
	* 下级块 `xx__xx`
	* 下级子元素 `xx_xx`

### template
- 自定义组件名称 `my-xxx`
- 组件属性名 `aa-bb`

### js
- 事件名称
	* handleXx 点击方法
	* customXx 自定义方法
	* commonXx 提取方法

### js note
- jsdoc 注释格式
- 功能标记 `TODO FIXME HACK XXX`

### git commit + Angular git + git moji
- [IMP] 更新
- [ADD] 添加
- [DEL] 删除
- `fix feat style chore docs test reset`

### uni_modules规范




## 三、优化
### 图片
- 避免使用大图;

### data数据
- 优化data数据;
- 减少一次性节点数量，延迟setdata;

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

### js
- 高性能渲染优先选用 `wxs`

### 宽屏适配
- leftWindow
- topWindow
- rightWindow




## 四、NOTE
### 平台差异记录 `/platforms/PLATFORMS.md`

### 引入文件
- js文件不支持使用`/`开头的方式引入，可以使用 `@`;
- @import 后跟需要导入的外联样式表的相对路径 `~@/`，用;表示语句结束;
- 小程序不支持在css中使用本地文件，但 uni-app 会自动将其转化为 base64 格式;

### HBuilderX
- 默认不需要开启es6转换，但如果使用 wxcomponents wxml 自定义组件，HBuilderX 会自动开启es6转换;
- process.env.NODE_ENV 判断环境 development production;
- 补充d.ts，可以在项目下先执行 npm init，然后npm i @types/uni-app -D，来补充d.ts;

### 配置文件
- 在 App 端和 H5 端屏幕宽度达到 960px 时，默认将按照 375px 的屏幕宽度进行计算;

### 打包
- 如需制作wgt包，使用npm run build:app-plus会在/dist/build/app-plus下生成app打包资源，将app-plus中的文件压缩成zip（注意：不要包含app-plus目录），再重命名为${appid}.wgt， appid为manifest.json文件中的appid;
- 

### 语法
- template
	* v-show 不支持 template 元素;
	* v-slot 只能添加在 <template> 上;
- js
	* 事件中访问原始的 DOM 事件，使用 $event 参数变量;
	* 禁止蒙版下的页面滚动使用 @touchmove.stop.prevent="moveHandle"，moveHandle 可以用来处理 touchmove 的事件，也可以是一个空函数;
	* $event 获取 event 对象。
- css
	* 不能使用 * 选择器;
	* 设计稿 1px / 设计稿基准宽度 = 框架样式 1rpx / 750rpx;



## 五、TODO
- 自定义授权设置
- 定位授权逻辑
- 登录授权逻辑
- 全局状态管理检测登录
- 自定义导航栏
- 成功失败页
- 自动化测试
