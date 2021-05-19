## 存 H5 App 微信小程序 QQ小程序 组件的目录
### 需要去微信工具里开启es6转换。
### 可以使用wxs


### 使用方式
```json
- wxcomponents
	- custom
		- index.wxml
		- index.js
		- index.wxss
		- index.json

{
    "pages": [{
        "path": "index/index",
        "style": {
            // #ifdef APP-PLUS || H5 || MP-WEIXIN || MP-QQ
            "usingComponents": {
                "custom": "/wxcomponents/custom/index"
            },
            // #endif
            // #ifdef MP-BAIDU
            "usingComponents": {
                "custom": "/swancomponents/custom/index"
            },
            // #endif
            // #ifdef MP-ALIPAY
            "usingComponents": {
                "custom": "/mycomponents/custom/index"
            },
            // #endif
            "navigationBarTitleText": "uni-app"
        }
    }]
}

<view>
    <!-- 在页面中对自定义组件进行引用 -->
    <custom name="uni-app"></custom>
</view>
```


## 支付宝小程序 mycomponents
## 百度小程序 swancomponents
## 字节跳动小程序 ttcomponents