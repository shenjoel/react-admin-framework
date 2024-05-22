<div align="center">
  <a href="https://gitlab.com/fe1615203/admin-common-framework">
    <img align="center" width="200" src="/src/assets/logo.svg">
  </a>
</div>

<div align="center">
一套快速、便捷、开箱即用的admin项目工具
</div>

## ✨ 特点

更多的关注在业务层开发，减少配置、集成基础功能，形成一套成熟的前端（技术体系 + 构建）的方案

- 技术栈
  - [vite](https://cn.vitejs.dev/)
  - [react](https://react.dev/)
  - [antd](https://ant.design/)
  - [zustand](https://awesomedevin.github.io/zustand-vue/docs/introduce/start/zustand)
  - [axios](https://www.axios-http.cn/)
  - [ahooks](https://ahooks.js.org/zh-CN/)
  - [typescript](https://www.typescriptlang.org/)
- 内置环境
  - localized (本地)
  - development (开发)
  - testing (测试)
  - staging (预发)
  - production (生产)
- 内置布局组件
- 内置 save bar 组件
- 内置登录注册
- 内置路由鉴权

## 安装

```bash
$ yarn install
# or 推荐
$ pnpm install
# or
$ bun install
```

## 使用

```bash
# 本地开发
pnpm run dev
# 生产环境构建
pnpm run build
# 开发环境构建
pnpm run build:dev
# 测试环境构建
pnpm run build:test
# 预发环境构建
pnpm run build:pre
```

## 目录

- create 构建相关
  - config 配置
  - plugins 插件存放目录
- src 业务代码
  - assets 资源
  - components 公共组件
    - auth 鉴权组件
  - constants 常量
  - hooks 常用的 hook
  - http 请求库
  - layout 部局组件
  - pages 页面
  - route 路由相关
  - store 状态相关
  - style 公用样式
  - types 常用的类型

## 关于路由鉴权

路由组件内部会检查每一个路由，是否有权限或是白名单

- `/components/auth` 鉴权组件
- `/hooks/useAuth.ts` 鉴权逻辑
- `/constants` 白名单配置
- `/store/auth.ts` 权限状态存储

---

接口权限可根据业务情况在`axios`的拦截器自行添加

```javascript
http.interceptors.response.use(
  (response) => {
    const { data = {}, status } = response;
    // 根据status 或 code 自定义
    if (status === 200) {
      const { code, message: msg } = data;
      if (code !== 0) {
        message.error(msg || 'error');
      }
    }
    return response?.data || {};
  },
  (error) => {
    // 错误请求处理
    if (error.response) {
      // 请求已发出，但服务器响应的状态码不在 2xx 范围内
      console.error('Error status', error.response.status);
    } else if (error.request) {
      // 请求已发出但没有收到响应
      console.error('Error request', error.request);
    } else {
      // 发生了一些事情，导致请求触发了一个错误
      console.error('Error', error.message);
    }
    // 与响应相关的配置信息
    console.error('Error config', error.config);
    return Promise.reject(error);
  }
);
```

自定义权限请求，在`useAuth.ts`修改或替换 fetchAuth 方法：

```javascript
// 鉴权请求
const { loading } = useRequest(fetchAuth, {
  manual: isWhiteRouter, // 白名单不会发起请求
  onSuccess({ data }) {
    if (data?.isAuthenticated) {
      state.authenticate();
    }
  },
});
```

## Todo

- [ ] 多语言
- [x] 路由鉴权
- [x] 统一注册登录
- [x] 统一界面布局
- [x] 环境配置
- [x] 基础功能(集 ui 库、请求库、hooks、状态机等等)

## Feature

- 接入权限系统
- 接入多语言系统
- 通用 CI/CD 工作流

## 🙋‍♂️ 注意

1. **VITE_NODE_ENV** 用于区分不同环境下的构建配置, 不建议改动
2. **/create/plugins** 目录放 vite 插件，统一管理
