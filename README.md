# vue3全家桶变化

## vue3实例



## Vue Router4 有哪些变化

- router的创建使用createRouter
- history取代了mode，通过方法返回createWebHistory   原因：为未使用history启用摇树（tree shaking）
- 移动了base的配置，作为createWebHistory的第一个参数
- 删除*路由通配符
- scrollBehavior: () => ({ left: 0, top: 0 })