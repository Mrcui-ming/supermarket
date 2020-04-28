<template>
  <div class="detail-paraminfo" v-if="Object.keys(paraminfos).length !== 0">
    <table class="datail-paraminfo-size">
      <tr v-for="(item,index) in paraminfos.sizes[0]" :key="index">
        <td v-for="(td,tdindex) in item" :key="tdindex">{{td}}</td>
      </tr>
    </table>
    <table class="datail-paraminfo-publish">
      <tr v-for="(item,index) in paraminfos.infos" :key="index">
        <td v-for="td in item" :key="td">{{td}}</td>
      </tr>
    </table>
    <div class="info-img" v-if="paraminfos.image.length !== 0">
      <img :src="paraminfos.image" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailParamInfo',
  props:{
    paraminfos:{
      type: Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style>
.detail-paraminfo{
  padding: 20px 10px;
  border-bottom: 5px solid #f2f5f8
}
.datail-paraminfo-size{
  width: 100%;
  /*合并单元格的边框线。*/
  border-collapse: collapse; 
}
.datail-paraminfo-size td{
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #ccc;
}
.datail-paraminfo-publish{
  width: 100%;
  border-top: 1px solid #ccc;
  border-collapse: collapse;
}
.datail-paraminfo-publish tr{
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #ccc;
}
.datail-paraminfo-publish tr td:nth-child(1){
  width: 33.3%;
}
.datail-paraminfo-publish tr td:nth-child(2){
  width: 66.6%;
  color:  #eb4868;
}
.info-img{
  width: 100%;
}
.info-img img{
  width: 100%;
}
</style>