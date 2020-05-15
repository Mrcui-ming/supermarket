<template>
  <div class="detailgoodsinfo" v-if="Object.keys(goodsinfos).length !== 0">
    <div class="goodsinfo-depict">
      <div>{{goodsinfos.desc | getgoodsdesc}}</div>
      <div></div>
      <div>{{goodsinfos.detailImage[0].key}}</div>
    </div>
    <div class="goodsinfoimgs">
      <img :src="item" v-for="(item,index) in goodsinfos.detailImage[0].list" :key="index" @load="goodsImgsLoad">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailGoodsInfo',
  data(){
    return{
      countimgs:0
    }
  },
  props:{
    goodsinfos:{
      type: Object,
      default(){
        return {}
      }
    }
  },
  filters:{
    getgoodsdesc(value){
      return value.substr(0,5)+'~';
    }
  },
  methods:{
    goodsImgsLoad(){
        this.$emit('goodsImgsLoad');
    }
  }
}
</script>

<style>
  .detailgoodsinfo{
    border-bottom: 5px solid #f2f5f8;
    padding-bottom: 10px;
  }
  .goodsinfo-depict{
    width: 100%;
    height: 110px;
  }
  .goodsinfo-depict div:nth-child(1){
    width: 33%;
    height: 60px;
    float: left;
    margin-top: 20px;
    margin-left: 20px;
    border-top: 2px solid #ccc;
    line-height: 60px;
  }
   .goodsinfo-depict div:nth-child(2){
    width: 33%;
    height: 60px;
    float: right;
    margin-top: 20px;
    margin-right: 20px;
    border-bottom: 2px solid #ccc;
   }
   .goodsinfo-depict div:nth-child(3){
     float: left;
     width: 100%;
     margin-left: 20px;
     font-size: 15px;
     color: #000;
   }
   .goodsinfoimgs img{
     width: 100%;
   }
</style>