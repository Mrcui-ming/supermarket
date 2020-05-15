<template>
  <div class="guard" v-if="Object.keys(skuinfos).length !== 0">
    <div class="guard-hd">
      <h2 class="hd-shopprice">{{prices}}</h2>
      <div>{{stocks}}</div>
      <div style="font-size:14px">
        <span>请选择</span>
        <span class="size">尺码</span>
        <span>颜色</span>
      </div>
    </div>
    <div class="guard-action clearfix">
      <div class="guard-action-style"><span class="style">样式</span><span>{{stylenum}}</span></div>
      <ul class="style-item">
        <li v-for="(item,index) in skuinfos.styleinfo" :key="index" @click="styleClick(index,item.name)" :class="{addred: stylecountindex === index}">
          {{item.name}}
        </li>
      </ul>
    </div>
    <div class="guard-size clearfix">
      <div class="guard-action-style"><span class="style">尺码</span><span>{{sizenum}}</span></div>
      <ul class="style-item size-item">
        <li v-for="(item,index) in skuinfos.sizeinfo" :key="index"
        @click="sizeClick(index,item.name)" :class="{addred: sizecountindex === index}">
          {{item.name}}
        </li>
      </ul>
    </div>
    <div class="guard-footer clearfix">
      <span class="shopcount">购买数量</span>
      <div class="shopcount-btn">
        <span @click="count++">+</span>
        <div class="comptedcount">{{count}}</div>
        <span @click="countClick">-</span>
      </div>
    </div>
    <button @click="btnClick">确认</button>
  </div>
</template>

<script>
export default {
  name:"DetailGuard",
  props:{
    skuinfos:{
      type: Object,
      default(){
        return {};
      }
    }
  },
  data(){
    return {
      stylecountindex: 0,
      sizecountindex:0,
      count: 1,
      prices: 0,
      stock:0,
      size: null,
      style: null
    }
  },
  methods:{
    styleClick(index,item){
      this.stylecountindex = index;
      this.style = item;      
    },
    sizeClick(index,item){
      this.sizecountindex = index;
      this.size = item;    
    },
    countClick(){
      if(this.count === 0){
        return
      }
      this.count--;    
    },
    btnClick(){
      let infos = {};
      this.trueInfos = infos;
      infos.prices = this.prices;
      infos.style = this.style;
      infos.size = this.size;
      infos.stock = this.stock;
      const counts = this.count;
      infos.count = counts; 
      this.$emit('btnClick',infos)
    }
  },
  computed:{
    stocks(){
      return "库存" + this.stock + "件";
    },
    stylenum(){
      return this.skuinfos.styleinfo.length;
    },
    sizenum(){
      return this.skuinfos.sizeinfo.length
    }  
  },
  updated(){
    this.prices = this.skuinfos.price;
    this.stock = this.skuinfos.stock;
  }
}
</script>

<style scoped>
.guard{
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  z-index: 999;
  width: calc(100% - 20px);
  height: calc(100% - 44px - 38px);
  background-color: #fff;
  padding: 20px 10px;
  overflow: hidden;
  border-top: 1px solid #000;
}
.guard-hd{
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #ccc;
  text-align: center;
}
.hd-shopprice{
  color: red;
  font-weight: 500;
}
.size{
  margin: 5px;
}
.guard-action{
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
}
.guard-action-style{
  font-size: 16px;
  color: #000;
}
.style{
  margin-right: 10px;
}
.style-item{
  list-style: none;
  width: 100%;
  margin-top: 10px;
}
.style-item li{
  float: left;
  padding: 0 5px;
  height: 30px;
  line-height: 30px;
  background-color: #eeeeee;
  text-align: center;
  border-radius: 5px;
  border: 1px solid #eeee;
  margin-right: 10px;
  margin-bottom: 5px;
}
.size-item li{
  width: 30px;
  height: 30px;
}
.guard-size{
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
}
.guard-footer{
  padding-top: 10px;
}
.shopcount{
  font-size: 14px;
  color: #000;
  float: left;
}
.shopcount-btn{
  float: right;
}
.shopcount-btn div,
.shopcount-btn span{
  display: inline-block;
  width: 30px;
  height: 30px;
  background-color: #ddd;
  vertical-align: middle;
  text-align: center;
  line-height: 30px;
  font-size: 16px;
}
.shopcount-btn .comptedcount{
  width: 40px;
  margin: 0 1.5px;
  border-radius: 0;
}
button{
  position: relative;
  bottom: -50px;
  left: 0px;
  width: calc(100% - 20px);
  height: 40px;
  background-color: red;
  border-radius: 20px;
  border: 0;
  margin-left: 10px;
}
.addred{
  border: 1px solid red!important;
}
</style>