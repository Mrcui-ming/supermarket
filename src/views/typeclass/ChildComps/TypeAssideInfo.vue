<template>
  <div class="typeassideinfo">
    <asside-info-bscroll class="asside-info-bscroll" ref="scroll">
     <ul>
       <li class="assideinfo-item" v-for="(item,index) in AssideInfos" :key="index">
       <a :href="item.link">
         <img :src="item.image" alt="">
         <span>{{item.title}}</span>
       </a>
     </li>
     </ul>
    <type-goods-list :goods="ActionInfos"></type-goods-list>
    </asside-info-bscroll>
  </div>
</template>

<script>
import {itemimgmixins} from 'common/mixins.js';
import AssideInfoBscroll from 'components/common/bscroll/Bscroll';
import TypeGoodsList from 'components/content/goods/GoodsList'
export default {
  name:"TypeAssideInfo",
  components:{
    AssideInfoBscroll,
    TypeGoodsList
  },
  data(){
    return{
      countindex: 0
    }
  },
  props:{
    AssideInfos:{
      type: Array,
      default(){
        return []
      }
    },
    ActionInfos:{
      type: Array,
      default(){
        return []
      }
    }
  },
  mixins:[itemimgmixins],
  mounted(){
    this.$bus.$on('setScrollTo',() =>{
      this.$refs.scroll.scrollTo(0,0,0);
    })
  }
}
</script>

<style scoped>
.typeassideinfo{
  height: 100%;
  overflow: hidden;
}
.asside-info-bscroll{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.assideinfo-item{
  float: left;
  width: 80px;
  height: 110px;
  overflow: hidden;
  text-align: center;
  margin-left: 10px;
  margin-top: 15px;
}
.assideinfo-item img{
  width: 100%;
  height: 80px;
  margin-bottom: 10px;
}
</style>