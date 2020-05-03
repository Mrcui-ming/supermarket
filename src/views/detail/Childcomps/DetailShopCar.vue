<template>
  <div class="detail-shop-car">
    <ul class="shop-car-module">
      <li>
        <div class="shop-car-icon shop-car-icon-first"></div>
        <span class="kefu">客服</span>
      </li>
      <li> 
        <div class="shop-car-icon"></div>
        <span class="dianpu">店铺</span>
      </li>
      <li>
        <div class="shop-car-icon"></div>
       <span class="shoucang">收藏</span>
      </li>
      <li @click="addshop">加入购物车</li>
      <li>购买</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DetailShopCar',
  methods:{
    addshop(){
      this.$emit('addShopCar')
    }
  }
}
</script>

<style>
.detail-shop-car{
  position: relative;
  z-index: 1;
  width: 100%;
  height: 49px;
  background-color: #fff;
}
.shop-car-module{
  list-style: none;
  width: 100%;
  height: 49px;
  display: flex;
  text-align: center;
}
.shop-car-module li:nth-child(-n+3){
  flex: 1;
  font-family: 'icomoon';
}
.shop-car-icon{
  padding-top: 1px;
  font-size: 22px;
}
.shop-car-icon-first{
  color: #ff8198;
}
.kefu,
.dianpu,
.shoucang{
  display: block;
  position: relative;
  top: -4px;
}
.shop-car-module li:nth-child(n+4){
  flex: 2;
  line-height: 49px;
}
.shop-car-module li:nth-child(4){
  background-color: yellow
}
.shop-car-module li:nth-child(5){
  background-color: #ff8198;
}
</style>