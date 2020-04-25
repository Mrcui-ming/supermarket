<template>
  <div class="tabcontorl">
    <div v-for="(item,index) in titles" :key="index" class="tabcontorl-item"
    :class="{action: index === countindex}"
    @click="addcol(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
name: 'TabContorl',
  props:{
   titles:{
    type: Array,
    default(){
      return []
      }
    }
  },
  data(){
    return {
      countindex: 0
    }
  },
  methods:{
    addcol(index){
      this.countindex = index;
      this.$emit('tabCtlclick',index);
    }
  }
}
</script>

<style>
.tabcontorl{
  position: sticky;
  display: flex;
  background-color: #fff;
  top: 44px;
}
.tabcontorl-item{
  flex: 1;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
}
.tabcontorl-item span{
  padding: 3px;
}
/* 点击之后添加action这个类 并且同时修改别的元素属性*/
.action{
  color: #ff8198;
}
.action span{
  border-bottom: 1px solid #ff8198;
}
</style>