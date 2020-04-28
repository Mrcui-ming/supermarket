<template>
  <div class="detailshopinfo">
    <div class="firm-titil">
      <img :src="firm.logo" alt="">
      <span>{{firm.name}}</span>
    </div>
    <div class="firm-muster">
    <div class="musterleft">
      <div class="unilnum"> {{firm.sells | sellCountFilter}}</div>
      总销量
    </div>
    <div class="musterright alone">
       <div class="unilnum"> {{firm.goodsCount}}</div>
       全部宝贝
    </div>
    <div class="musterinfo">
      <table>
        <tr v-for="(item,index) in firm.score" :key="index">
          <td>{{item.name}}</td>
          <td class="musterinfoitem" :class="{infostyle: item.isBetter}">{{item.score}}</td>
          <td class="musterinfoitem2" :class="{infostyle: item.isBetter}">{{item.isBetter ? '高' : '低'}}</td>
        </tr>
      </table>
    </div>
    </div>
    <div class="firm-bottom">
      <div class="enter-firm">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  data(){
    return{
      isShow: true
    }
  },
  props:{
    firm:{
      type: Object,
      default(){
        return {}
      }
    }
  },
  filters:{
    sellCountFilter(value){
      if(value < 10000){    
        return value;
      }else{
         return (value /10000).toFixed(1)+"万";
      }
    }
  }
}
</script>

<style scoped>
.detailshopinfo{
  padding: 5px;
  height: 240px;
  border-bottom: 5px solid #f2f5f8;
}
.firm-titil{
  margin: 30px 0;
}
.firm-titil img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,.1);
    margin-right: 10px;
    vertical-align: middle;
}
.firm-titil span{
  font-size: 18px;
  columns: #000;
}
.firm-muster{
  display: flex;
  height: 80px;
}
.musterleft,
.musterright{
  flex: 1;
  height: 50px;
  font-size: 14px;
  text-align: center;
}
.musterinfo{
  flex: 2;
  height: 100px;
  transform: translateY(-25px);
}
.musterinfo table{
  height: 100%;
  margin: 0 auto;
}
.musterinfoitem{
  padding: 0 25px;
  color: #ff8198;
}
.alone{
  border-right:  1px solid #ccc;
}
.unilnum{
  width: 100%;
  margin-bottom: 8px;
}
.firm-bottom{
  width: 150px;
  height: 35px;
  background-color: #f2f5f8;
  margin: 0 auto;
  margin-top: 5px;
  text-align: center;
  line-height: 35px;
  border-radius: 10px;
}
.musterinfoitem2{
  color: #ff8198;
}
.infostyle{
  color: green;
}
</style>