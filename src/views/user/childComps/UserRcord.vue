<template>
  <div class="rcord">
    <div class="rcord-appear margin">
      <img src="~assets/img/user.png" alt />
    </div>
    <div class="rcord-right">
      <span class="rcordbtn">登录/</span>
      <span class="registerbtn">注册</span>
      <p>暂无绑定手机号</p>
    </div>
    <span class="right-bar"></span>
  </div>
</template>

<script>
export default {
  name: "UserRcord"
};
</script>

<style>
.margin {
  margin-left: 20px;
}
.rcord {
  height: 80px;
  background-color: #ff8198;
  overflow: hidden;
}
.rcord-appear,
.rcord-right {
  float: left;
  height: 100%;
}
.rcord-appear {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #eee;
  margin-top: 10px;
}
.rcord-right {
  padding-top: 15px;
  margin-left: 10px;
  color: #fff;
  font-size: 14px;
}
.rcord-appear img {
  height: 100%;
}
.rcordbtn,
.registerbtn {
  color: #fff;
  font-size: 18px;
}
.right-bar {
  position: absolute;
  top: 60px;
  right: 20px;
  width: 12px;
  height: 12px;
  transform: rotate(45deg);
  margin: 16px 0 0 25px;
  border-top: 3px solid #fff;
  border-right: 3px solid #fff;
}
</style>