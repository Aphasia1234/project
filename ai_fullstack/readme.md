# AI 全栈项目

## 技能点
### 前端 
#### react 开发全家桶
- react + typescript
- react-router-dom 前端路由
- zustand react的状态管理库(vue的pinia)
- axios http请求库

### 后端
- node + typescript
- nestjs 企业级别后端开发框架
- postgresql(psql) 数据库
- redis 缓存数据库

### AI
- langchain
- coze/n8n
- llm
- trae/cursor

## 项目安排
- frontend 前端服务
- backend  后端服务
- ai_service  ai服务端
- admin 后台管理系统

## git 操作
- 全新的实战项目
  git init 
- 提交的时机
  每次完成一个相对独立的模块后，提交到git仓库
  提交信息要准确完整

## react 全家桶
### react-router-dom
- 前端路由
早期前端没有路由，路由由后端处理
前后端分离，前端有独立的(html5) 路由，实现页面切换。
- 两种形式
  - HashRouter  #/ 丑一点  兼容性好  锚点
  - BrowserRouter  / 美观  和后端路由一致，需要使用到html5的history api，兼容不好，ie11 之前不支持，现在的浏览器都支持
- BrowserRouter as Router  别名，方便在项目中使用BrowserRouter
- 性能， 快  页面路由懒加载
  / Home  延迟加载About组件  阻止加载About组件，直到用户点击About链接 -> 动态引入

### 路由有多少种
- 普通路由
- 动态路由 /product/:id
- 通配路由 *
- 嵌套路由  <Outlet/>展示子路由(react-router-dom 提供的组件)
- 鉴权路由 ProtectRoute(路由守卫)
- 重定向路由 Navigate
### 路由生成访问历史
  history 栈 先进后出
  replace redirect 跳转，会替换当前的历史纪录

### 单页应用
- 传统的开发是单页的，基于http请求，每次url改变后，去服务器重新请求整个页面。
  体验不好，页面会白屏
- 单页应用 react-router-dom html5 history api
  前端路由 前后端分离
  路由改变后
  前端会收到一个事件，将匹配的新路由显示在页面上

## typescript
JavaScript 的超集，添加了类型检查，使开发更安全、更方便。
强类型静态语言
- 安装ts
  npm install -g typescript

  tsc 3.ts
  生成的js文件 3.js
- ts 的优点
  - 静态类型
  - 边写边检查bug
  - 编译时检查类型错误
  - 代码建议、文档查看非常方便
  - 没有使用的变量等垃圾代码会提示未使用
    重构、修改别人的代码时，ts 可以帮助我们发现未使用的变量等垃圾代码
### typescript 实战 todos

### zustand 状态管理
如果说国家需要有银行，那么前端项目就需要中央状态管理系统。 zustand/redux
- 组件 = UI + State
- store 将状态存到store仓库中管理
  全局共享
- 基于hooks思想实现的