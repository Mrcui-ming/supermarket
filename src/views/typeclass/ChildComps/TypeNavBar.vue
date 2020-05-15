<template>
  <nav-bar class="type-nav-bar">
    <div slot="center">商品分类</div>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
export default {
  name: 'TypeNavBar',
  components:{
    NavBar
  }
}
</script>

<style>
.type-nav-bar{
  text-align: center;
  color: #fff;
  font-size: 18px;
  background-color: #ff8198;
}
</style>