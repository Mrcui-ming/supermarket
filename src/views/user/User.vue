<template>
  <div id="user">
    <nav-bar class="user-navbar">
      <div slot="center" class="user-navbar-ele">我的档案</div>
    </nav-bar>
    <user-rcord></user-rcord>
    <user-info></user-info>
    <user-item></user-item>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import UserRcord from './childComps/UserRcord';
import UserInfo from './childComps/UserInfo';
import UserItem from './childComps/UserItem'
export default {
  name:'User',
  components:{
    NavBar,
    UserRcord,
    UserInfo,
    UserItem
  }
}
</script>

<style>
.user-navbar{
  background-color: #ff8198;
  border: 0!important;
}
.user-navbar-ele {
  text-align: center;
  font-size: 20px;
  color: #fff;
}
</style>