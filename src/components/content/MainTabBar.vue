<template>
   <home>
      <tab-bar-item path="/header" zdycolor="#ffd900f1">
        <img slot='img' src="~assets/img/home.png" alt="">
        <img slot='activeimg' src="~assets/img/activehome.png" alt="">
        <div slot='text'>首页</div>
      </tab-bar-item>
      <tab-bar-item path="/typeclass" zdycolor="#ffd900f1">
        <img slot='img' src="~assets/img/newstext.png" alt="">
        <img slot='activeimg' src="~assets/img/activenewstext.png" alt="">
        <div slot='text'>分类</div>
      </tab-bar-item>
      <tab-bar-item path="/car" zdycolor="#ffd900f1">
        <img slot='img' src="~assets/img/shopcar.png" alt="">
        <img slot='activeimg' src="~assets/img/activeshopcar.png" alt="">
        <div slot='text'>购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/user" zdycolor="#ffd900f1">
        <img slot='img' src="~assets/img/user.png" alt="">
         <img slot='activeimg' src="~assets/img/activeuser.png" alt="">
        <div slot='text'>我的</div>
      </tab-bar-item>
    </home>
</template>

<script>
import Home from './tabbar/Home';
import TabBarItem from './tabbar/Tabbar-item';
export default {
  name: 'MainTabBar',
  components:{
    Home,
    TabBarItem
  }
}
</script>

<style>

</style>