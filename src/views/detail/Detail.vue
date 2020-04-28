<template>
  <div id="detail">
    <!-- nav start -->
    <detail-nav></detail-nav>
    <!-- nav end -->
    <bscroll class="detail-bscroll" ref="scroll">
    <!-- banner start -->
    <detail-swiper :top-images="topImages"></detail-swiper>
    <!-- banner end -->
    <!-- info start -->
    <detail-base-info :goods="goods"></detail-base-info>
    <!-- info end -->
    <!-- firm start-->
    <detail-shop-info :firm="firm"></detail-shop-info>
    <!-- firm end -->
    <!-- goodsinfo start  -->
    <detail-goods-info :goodsinfos="goodsinfos" @goodsImgsLoad="goodsImgsLoad"></detail-goods-info>
    <!-- goodsinfo end -->
    <!-- paraminfo start-->
    <detail-param-info :paraminfos="paraminfos"></detail-param-info>
    <!-- paraminfo end -->
    <!-- commentinfo start -->
    <detail-comment-info :commentinfos="commentinfos"></detail-comment-info>
    <!-- commentinfo end -->
    <!--  -->
    </bscroll>
  </div>
</template>

<script>
import DetailNav from './Childcomps/DetailNav';
import DetailSwiper from './Childcomps/DetailSwiper'
import DetailBaseInfo from './Childcomps/DetailBaseInfo';
import DetailShopInfo from './Childcomps/DetailShopInfo';
import Bscroll from 'components/common/bscroll/Bscroll';
import DetailGoodsInfo from './Childcomps/DetailGoodsInfo';
import DetailParamInfo from './Childcomps/DetailParamInfo';
import DetailCommentInfo from './Childcomps/DetailCommentInfo'

import {getDetail,Goods,Shop,GoodsParam} from 'network/detail.js';
export default {
  name: 'Detail',
  data(){
    return{
      iid: null,
      topImages: [],
      goods: {},
      firm: {},
      goodsinfos: {},
      paraminfos: {},
      commentinfos:{}
    }
  },
  components:{
    DetailNav,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Bscroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo
  },
  created(){
    this.iid = this.$route.params.iid;  
   getDetail(this.iid).then(res => {
     const data = res.data.result;
     //获取轮播图数据
     this.topImages = data.itemInfo.topImages;
     //获取介绍栏数据
     this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
     //获取商家数据
     this.firm = new Shop(data.shopInfo); 
     console.log(data);
     //获取商品详情信息
     this.goodsinfos = data.detailInfo;
     //获取商品尺码/样式详情数据
     this.paraminfos = new GoodsParam(data.itemParams.info,data.itemParams.rule);
     //取出评论信息
     if(data.rate.cRate !== 0){
       this.commentinfos = data.rate.list[0];
     }
   })
  },
  methods:{
    centerbarClick(index){
      this.countindex = index;
    },
    leftbarClick(){
      //后退一栈
      this.$router.back();
    },
    goodsImgsLoad(){
      this.$refs.scroll.refresh();
    }
  }

}
</script>

<style scoped>
#detail{
  /* 占据可视区域的100% */
  height: 100vh;
}
.detail-bscroll{
  position: relative;
  z-index: 999;
  background-color: #fff;
  overflow: hidden;
  /* Css3计算属性父盒子高度的100% - 44px */
  height: calc(100% - 44px);
}
</style>