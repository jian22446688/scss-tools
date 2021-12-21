/*
 * @Author: Cary
 * @Date: 2021-12-17 17:23:02
 * @FilePath: \alien-docse:\cary\project\scss-tools\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'

import Layout from '../demo/layout/index.vue'

Vue.use(Router)

// 首页菜单
export const indexRoutes = [
  {
    path: '/',
    component: () => import('../demo/pages/index.vue')
  }
]

export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    children: indexRoutes
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

export default createRouter()
