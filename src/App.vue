<template>
  <div id="app">
    <!-- 离开后路由对应的组件后不进行销毁，但是排除Detail这个组件 -->
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from 'components/content/MainTabBar';
export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>
<style>
  @import 'assets/css/base.css';
</style>
