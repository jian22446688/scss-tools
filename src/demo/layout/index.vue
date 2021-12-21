<!--
 * @Author: Cary
 * @Date: 2021-12-21 09:51:42
 * @FilePath: \alien-docse:\cary\project\scss-tools\src\demo\layout\index.vue
-->
<template>
  <div class="layout-contriner cc-bg-w">
    <div class="layout-menu cc-mar-r-20">
      <div class="title cc-bg-p cc-h-40">CC-TOOLS 通用工具</div>
      <div class="menu-box">
        <ul>
          <li class="active">首页测试</li>
          <li>首页测试</li>
          <li>首页测试</li>
          <li>首页测试</li>
          <li>首页测试</li>
          <li>首页测试</li>
          <li>首页测试</li>
          <li>首页测试</li>
          <li>首页测试</li>
          <li>首页测试</li>
          <li>首页测试</li>
          <li>首页测试</li>
          <li>首页测试</li>
          <li>首页测试</li>
          <li>首页测试</li>
          <li>首页测试</li>
          <li>首页测试</li>
          <li>首页测试</li>
          <li>首页测试</li>
          <li>首页测试</li>
          <li>首页测试</li>
          <li>首页测试</li>
          <li>首页测试</li>
          <li>首页测试</li>
          <li>首页测试</li>
          <li>首页测试</li>
          <li>首页测试</li>
          <li>首页测试</li>
          <li>首页测试</li>
          <li>首页测试</li>
          <li>首页测试</li>
          <li>首页测试</li>
          <li>首页测试</li>
          <li>首页测试</li>
          <li>首页测试</li>
          <li>首页测试</li>
          <li>首页测试</li>
          
        </ul>
      </div>
    </div>
    <div class="layout-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import { indexRoutes } from '../../router/index'
export default {
  data() {
    return {
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>
.layout-contriner {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  
  .layout-menu {
    position: relative;
    width: 260px;
    height: 100%;
    flex-shrink: 0;
    overflow-y: auto;

    .title {
      position: absolute;
      width: 100%;
      line-height: 40px;
      text-align: center;
      font-weight: bold;
    }
    .menu-box {
      overflow-y: auto;
      margin-top: 40px;
      height: calc(100% - 40px);
      background-color: rgb(240, 240, 240);
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        li {
          height: 40px;
          line-height: 40px;
          padding-left: 30px;
          border-bottom: #ddd 1px solid;
        }
        li:first-child {
          margin-top: 10px;
        }
        li:hover {
          background-color: #ddd;
        }
        li.active {
          color: #fff;
          background-color: #409EFF;
        }
      }
    }
  }
  .layout-content {
    flex: 1;
    height: 100%;
    width: 100%;
    overflow-y: auto;
  }
}
</style>
