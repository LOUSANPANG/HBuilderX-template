## app优化文档

### 加载
- App-nvue和H5，支持页面预载，uni.preloadPage，可以提供更好的使用体验;
- 优化背景闪白；将样式写在 App.vue 里、或者package json的各页面style里边;
```
"style": {  
	"app-plus": {  
		"background":"#000000"
	}  
}
```


### 界面


### 系统
- 打包：App端不需要地图、蓝牙等这些模块，可以裁剪掉，以缩小发行包体积。在 manifest.json-App模块权限里可以选择;


### 工具
- renderjs：canvas里做跟手操作，app端建议使用