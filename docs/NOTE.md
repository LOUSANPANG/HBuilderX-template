## 注意项

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
	* 小程序端 web-view 组件一定有原生导航栏，下面一定是全屏的 web-view 组件，navigationStyle: custom 对 web-view 组件无效。
- js
	* 事件中访问原始的 DOM 事件，使用 $event 参数变量;
	* 禁止蒙版下的页面滚动使用 @touchmove.stop.prevent="moveHandle"，moveHandle 可以用来处理 touchmove 的事件，也可以是一个空函数;
	* $event 获取 event 对象。
- css
	* 不能使用 * 选择器;
	* 设计稿 1px / 设计稿基准宽度 = 框架样式 1rpx / 750rpx;

