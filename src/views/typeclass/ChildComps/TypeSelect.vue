<template>
  <div class="type-select">
    <slot name="asside"></slot>
    <slot name="assideinfo"></slot>
  </div>
</template>

<script>
export default {
  name: 'TypeSelect'
}
</script>

<style>
.type-select{
  display: flex;
  height: calc(100% - 44px - 49px);
}
.type-select :nth-child(1){
  flex: 2;
}
.type-select :nth-child(2){
  flex: 5;
}
</style>