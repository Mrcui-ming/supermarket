<template>
  <div class="tab-bar-item" @click="itemclick">
    <div v-if="isArice"><slot name='activeimg'></slot></div>
    <div v-else><slot name='img'></slot></div>
    <div :style="Setstyle"><slot name='text' ></slot></div>
  </div>
</template>

<script>
export default {
 name: 'Tabbar-item',
 props:{
   path:{
     type: String
   },
   zdycolor:{
     type: String,
     default: 'blue'
   }
 },
 data(){
   return{
   /*  isArice:false */
   }
 },
 computed:{
   isArice(){
     return this.$route.path.indexOf(this.path) !== -1
   },
   Setstyle(){
     return this.isArice ? {color: this.zdycolor} : {}
   }
 },
 methods:{
   itemclick(){
     this.$router.replace(this.path);
   }   
 }
}
</script>

<style>
.tab-bar-item{
  flex: 1;
  text-align: center;
}
.tab-bar-item img{
  width: 24px;
  height: 24px;
  vertical-align: middle;
}
</style>