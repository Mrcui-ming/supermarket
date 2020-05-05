<template>
  <div class="useritem">
    <ul class="useritem-top">
      <li><a href="#">我的消息</a></li>
      <li><a href="#">积分商场</a></li>
      <li><a href="#">会员卡</a></li>
    </ul>
    <ul class="useritem-bottom">
      <li><a href="#">我的购物车</a></li>
      <li><a href="#">下载购物APP</a></li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'UserItem'
}
</script>

<style>
.useritem-top{
  border-bottom: 10px solid #eee;
}
.useritem-top li{
  padding-left: 20px;
  line-height: 35px;
}
.useritem-top li:nth-child(2){
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
}
.useritem-bottom{
  padding-left: 20px;
  line-height: 35px;
}
.useritem-bottom :first-child{
  border-bottom: 1px solid #eee;
}
</style>