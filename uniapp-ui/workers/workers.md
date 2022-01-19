## 多线程 Worker
* 一些异步处理的任务，可以放置于 Worker 中运行，待运行结束后，再把结果返回到小程序主线程。Worker 运行于一个单独的全局上下文与线程中，不能直接调用主线程的方法。
* Worker 与主线程之间的数据传输，双方使用 Worker.postMessage() 来发送数据，Worker.onMessage() 来接收数据，传输的数据并不是直接共享，而是被复制的。

### 使用
- app.json 编写 Worker 代码
```json
{
  "workers": "workers"
}
```

- 在主线程的代码 app.js 中初始化 Worker
```js
// app.js
const worker = uni.createWorker('workers/request.js') // 文件名指定 worker 的入口文件路径，绝对路径
```

- 主线程向 Worker 发送消息
```js
// app.js
worker.postMessage({
  msg: 'hello worker'
})
```


### 注意事项
- Worker 最大并发数量限制为 1 个，创建下一个前请用 Worker.terminate() 结束当前 Worker
- Worker 内代码只能 require 指定 Worker 路径内的文件，无法引用其它路径
- Worker 的入口文件由 wx.createWorker() 时指定，开发者可动态指定 Worker 入口文件
- Worker 内不支持 wx 系列的 API
- Workers 之间不支持发送消息
- Worker 目录内只支持放置 JS 文件，其他类型的静态文件需要放在 Worker 目录外
- 基础库 v2.18.1 开始支持在插件内使用 worker。相应地，插件使用worker前需要在plugin.json内配置workers代码路径，即一个相对插件代码包根目录的路径。

