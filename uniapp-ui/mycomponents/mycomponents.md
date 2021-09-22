## 支付宝小程序自定义组件存放目录
```js
├─mycomponents                  支付宝小程序自定义组件存放目录
│   └──custom                   支付宝小程序自定义组件
│        ├─index.js
│        ├─index.axml
│        ├─index.json
│        └─index.acss
```

### 在 pages.json 对应页面的 style -> usingComponents 引入组件：
```json
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
```

### 在页面中使用
```html
<!-- 页面模板 (index.vue) -->
<view>
    <!-- 在页面中对自定义组件进行引用 -->
    <custom name="uni-app"></custom>
</view>
```