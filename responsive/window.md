## 宽屏适配指南
* flex 取代 100%

```
{
  "globalStyle": {

  },
  "topWindow": {
    "path": "responsive/top-window.vue", // 指定 topWindow 页面文件
    "style": {
      "height": "44px"
    }
  },
  "leftWindow": {
    "path": "responsive/left-window.vue", // 指定 leftWindow 页面文件
    "style": {
      "width": 300
    }
  },
  "rightWindow": {
    "path": "responsive/right-window.vue", // 指定 rightWindow 页面文件
    "style": {
      "width": "calc(100vw - 400px)" // 页面宽度
    },
    "matchMedia": {
      "minWidth": 768 //生效条件，当窗口宽度大于768px时显示
    }
  }
}
```