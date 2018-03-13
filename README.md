# 同构应用

本项目尝试搭建一个同构应用,使用react ssr技术实现页面直出，加快页面渲染速度和有利于SEO

技术栈：
react v16
redux
express
ssr
webpack

# 项目结构

--flame-shop
  |--bin   express自动生成
  |--controllers    controller层，路由处理
  |--middlewares    express中间件
  |--public         静态资源文件夹，react编译后的脚本也会一并放在这里
  |--react          同构react代码，所有react相关代码均会放在这里
  |--views          页面模板或页面
  |--webpack        构建工具
  |--app.js         应用主入口
  |--dynamicCfg.js  应用配置文件
  |--route_proxy.js 路由处理入口


# React v16 SSR

[React v16](https://reactjs.org/blog/2017/09/26/react-v16.0.html)于2017.9.26发布，其中在SSR方面有较大改进：

**server.js**

```js
var markup = ReactDOM.renderToString(<App />)
// insert *markup* into template and send to FE
```

**client.js**

若需要配合SSR，推荐使用`hydrate`替代`render`，在react v17中将会强制执行
```js
ReactDOM.hydrate(<App />, document.getElementById('root'))
```


# 组件的初始状态
一般来说，服务端渲染出的html应该与前端渲染出来的html保持一致（如果是记录timestamp等需求则会例外）。这里就需要让组件的初始状态一致。

本项目有用到`redux`，提取`createStore`为同构函数，保证服务器和前台使用同样的store处理逻辑。服务端完成渲染后，要把初始状态值输出到页面中，前端拿到初始状态后，以此来保证前后端使用的是相同的状态。使用`window.__INITIAL_STATE__`传递。

```js
var markup = ReactDom.renderToString(
    <Provider store={store}>
      <Root />
    </Provider>
  );

  res.render("template", {
    markup: markup,
    initialState: JSON.stringify(initialState)
  });
```