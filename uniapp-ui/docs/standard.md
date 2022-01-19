## code standard 代码规范
### 文件管理
- common
	* 存放公共函数
	* SDK
- components
	* 自定义-组件
	* uni-组件
- hybrid
	* App端存放本地html文件的目录
- pages
	* 页面
	* 404
	* 状态页
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
- styles
	* mixin 变量等css
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
