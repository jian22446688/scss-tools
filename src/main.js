/*
 * @Author: Cary
 * @Date: 2021-12-17 16:56:25
 * @FilePath: \alien-docse:\cary\project\scss-tools\src\main.js
 */

import Vue from 'vue'
import App from './App.vue'
import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import './demo/styles/index.css'

import router from './router/index'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
