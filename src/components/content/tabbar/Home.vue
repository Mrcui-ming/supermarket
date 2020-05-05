<template>
  <div id="tab-bar" class="tab-bar">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
  #tab-bar{
  display: flex;
  height: 49px;
  background-color: #f6f6f6;
  /* flex布局中必须left和right都设置 */
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px 2px rgba(0,0,0,0.1);
}
</style>
