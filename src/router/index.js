/*
 * @Author: Cary
 * @Date: 2021-12-17 17:23:02
 * @FilePath: \alien-docse:\cary\project\scss-tools\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRoutes = [
  {
    path: '/',
    component: () => import('../demo/pages/index.vue'),
  },
  {
    path: '/index',
    component: () => import('../demo/pages/index.vue'),
  }
]


const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})


export default createRouter()
