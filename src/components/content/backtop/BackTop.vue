<template>
  <div class="backtop">
    <img src="~assets/img/ltop.jpg" alt="">
  </div>
</template>

<script>
export default {
name: 'BackTop'
}
</script>

<style scoped>
.backtop {
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 65px;
  right: 15px;
  border-radius: 25px;
  overflow: hidden;
}
.backtop img{
width: 50px;
height: 50px;
}
</style>