import type { RouteRecordRaw } from 'vue-router';


// 基本路由包含，登录页，首页，NOT FIND页
export const loginRouter: RouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import("/@/views/login/index.vue")
}

export const homeRouter: RouteRecordRaw = {
  path: '/',
  name: 'Home',
  redirect: '/home',
  component: () => import('/@/views/home/index.vue')
}

export const notFindRouter: RouteRecordRaw = {
  path: '/:path(.*)*',
  name: 'ErrorPage',
  component: () => import('/@/views/exception.vue')

}

export const basicRoutes: RouteRecordRaw[] = [homeRouter, loginRouter, notFindRouter]
