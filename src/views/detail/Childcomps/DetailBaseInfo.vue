<template>
  <!--这个方法是取对象的所有属性名，返回的是一个数组。判断数组长度!=0 然后显示该组件 -->
  <div class="detailbseinfo"  v-if="Object.keys(goods).length !== 0">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="nowprice">{{'￥'+ goods.nowprice}}</span>
      <span class="oldprice">{{goods.oldprice}}</span>
      <span class="desc">{{goods.discountDesc}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span v-for="(item,index) in goods.services.length-1" :key="index">
        <img :src="goods.services[item-1].icon">
        <span>{{goods.services[item-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
 name: 'DetailBaseInfo',
 props:{
   goods:{
     type: Object,
     default(){
       return {}
     }
   }
 }
}
</script>

<style scoped>
.detailbseinfo{
  border-bottom: 5px solid #f2f5f8;
  padding: 5px;
  /* 换行 */
  word-wrap: break-word;
}
.info-title{
  width: 100%;
  font-size: 15px;
  color: #000;
}
.info-price{
  margin: 7px  0;
}
.nowprice{
  color: #ff8198;
  font-size: 22px;
  margin-right: 5px;
}
.oldprice{
  text-decoration: line-through;
}
.desc{
  padding: 1px 2px;
  background-color: #ff8198;
  border-radius: 7px;
  margin-left: 5px;
  line-height: 20px;
}
.info-other{
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(100,100,100,.1);
  font-size: 13px;
}
.info-service{
  display: flex;
  justify-content: space-between;
  height: 45px;
  line-height: 45px;
}
.info-service img{
  width: 14px;
  height: 14px;
  vertical-align: middle;
  margin-top: -2px;
  margin-right: 2px;
}
</style>