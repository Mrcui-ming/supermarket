<template>
  <div class="goodlist-item" @click="itemClick">
    <div class="imgbox"><img :src="showimg" alt="" @load="itemimgLoad"></div>
    <div class="item-info">
      <p>{{goodsitem.title}}</p>
      <span class="price">{{'￥'+goodsitem.price}}</span>
      <img src="~assets/img/timg.jpg" alt="">
      <span>{{goodsitem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
name: 'GoodsListItem',
props:{
  goodsitem:{
    type: Object,
    default(){
      return {}
    }
  }
},
methods:{
  itemimgLoad(){
    //利用事件总线发送了一个事件。
    this.$bus.$emit('itemimgLoad');  
  },
  itemClick(){
    this.$router.push('/detail/'+ this.goodsitem.iid)
  }
},
  computed:{
    showimg(){
      //这里主要: 不能从一个存在的对象里面调用不存在的属性的子属性会报错
      //做了一层判断 返回这俩个属性中，从前往后找存在的一个属性
      return this.goodsitem.image || this.goodsitem.show.img;
    }
  }
}
</script>

<style>
.item-info{
  width: 100%;
  text-align: center;
  padding: 15px 0 5px 0;
}
.item-info p{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.price{
  color: palevioletred;
}
span{
  vertical-align: middle;
}
.goodlist-item{
  width: 48%;
}
.imgbox{
  height: 250px;
}
.goodlist-item img{
  width: 100%;
  height: 100%;
}
.item-info img{
  width: 1em;
  height: 1em;
  margin-left: 5px;
}
</style>