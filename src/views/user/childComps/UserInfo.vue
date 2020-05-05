<template>
  <div class="userinfo">
    <div>
      <span class="style-red">0.00元</span>
      <span>我的余额</span>
    </div>
    <div>
      <span class="style-red">0个</span>
      <span>我的优惠</span>
    </div>
    <div>
      <span class="style-red">0分</span>
      <span>我的积分</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserInfo'
}
</script>

<style>
.userinfo{
  width: 100%;
  display: flex;
  height: 80px;
  border-bottom: 10px solid #eee;
  background-color: #fff;
}
.userinfo div{
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 15px;
}
.userinfo div:nth-child(2){
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
}
</style>