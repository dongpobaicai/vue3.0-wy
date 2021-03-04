import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHashHistory } from 'vue-router'

import { basicRoutes } from './routes/index'


const router = createRouter({
  history: createWebHashHistory(),
  routes: basicRoutes as RouteRecordRaw[],
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export default router