<template>
  <div id="detail">
    <!-- nav start -->
    <detail-nav @navBarOnclick="navBaronclick" ref="nav"></detail-nav>
    <!-- nav end -->
    <bscroll class="detail-bscroll" ref="scroll" @scroll="scrolling" :probe-types="3">
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
    <detail-param-info :paraminfos="paraminfos" ref="param"></detail-param-info>
    <!-- paraminfo end -->
    <!-- commentinfo start -->
    <detail-comment-info :commentinfos="commentinfos" ref="comment"></detail-comment-info>
    <!-- commentinfo end -->
    <!-- goodslist -->
    <goods-list :goods="recommedinfos" ref="recommend"></goods-list>
    <!-- goodslist -->
    <!--  -->
    </bscroll>
    <back-top class="detail-backtop" @click.native="backtopclick" v-show="isShow"></back-top>
    <detail-shop-car></detail-shop-car>
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
import DetailCommentInfo from './Childcomps/DetailCommentInfo';
import GoodsList from 'components/content/goods/GoodsList';
import DetailShopCar from './Childcomps/DetailShopCar'

import {getDetail,Goods,Shop,GoodsParam,getRecommend} from 'network/detail.js';
import {debounce} from 'common/utils.js'
import {itemimgmixins,backtopmixins} from 'common/mixins.js';
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
      commentinfos:{},
      recommedinfos: [],
      detailitemTopY: [],
      getDetailitemTopY: null,
      countindex: 0
    }
  },
  mixins: [itemimgmixins,backtopmixins],
  components:{
    DetailNav,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Bscroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailShopCar
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
     //获取商品详情信息
     this.goodsinfos = data.detailInfo;
     //获取商品尺码/样式详情数据
     this.paraminfos = new GoodsParam(data.itemParams.info,data.itemParams.rule);
     //取出评论信息
     if(data.rate.cRate !== 0){
       this.commentinfos = data.rate.list[0];
     }
   });
   getRecommend().then(res => {
     const data = res.data.data;
     //获取相符商品数据
     this.recommedinfos = data.list;     
   });
   //对多次图片加载后的调用做一次防抖。
     this.getDetailitemTopY = new debounce(() =>{ 
        this.detailitemTopY = [];
        this.detailitemTopY.push(0);
        this.detailitemTopY.push(this.$refs.param.$el.offsetTop);
        this.detailitemTopY.push(this.$refs.comment.$el.offsetTop);
        this.detailitemTopY.push(this.$refs.recommend.$el.offsetTop);
        this.detailitemTopY.push(Number.MAX_VALUE);
      },300);
  },
  mounted(){},
  methods:{
    centerbarClick(index){
      this.countindex = index;
    },
    leftbarClick(){
      //后退一栈
      this.$router.back();
    },
    goodsImgsLoad(){  
    this.imgLoadHandle();
    this.getDetailitemTopY();
    },
    navBaronclick(index){
      //navbar与内容联动效果。
      this.$refs.scroll.scrollTo(0,-this.detailitemTopY[index],200);    
    },
    //监听bscroll滚动事件。
    scrolling(position){  
      //返回顶部按钮的显示/隐藏
      this.isShow = Math.abs(position.y) > 1000;
      //hack做法。：这种for循环超找不到最后一个值。所以我们刚开始就给数组中多添加了一个js最大值。
      const positionY = -position.y;
      let length = this.detailitemTopY.length;
      //这里最后一个值只是为了运算的时候i+1有值而已 不需要遍历
      for(let i = 0;i < length - 1;i++){
        //防止赋值过于频繁，刚开始0 == 0所以不需要参与后面的赋值操作。
        if(this.countindex !== i && (positionY >= this.detailitemTopY[i] && -position.y < this.detailitemTopY[i+1])){
          this.countindex = i;
          this.$refs.nav.countindex  = this.countindex;
        }  
      }
     
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
  height: calc(100% - 44px - 49px);
}
.detail-backtop{
  z-index: 999;
}
</style>