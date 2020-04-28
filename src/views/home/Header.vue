<template>
  <div id="home">
    <!-- 头部start -->
    <nav-bar class="navbar">
      <div slot="center" class="center">购物街</div>
    </nav-bar>
    <!-- 头部end -->
    <!-- 详情模块1 -->
    <tab-contorl :titles="['流行','新款','精选']" @tabCtlclick="tabCtlclick" v-show="tabcontorlshow"
    class="hdtab-contorl"
    ref="tabcontorl1"/>
    <!-- 详情模块2 -->
    <bscroll class="content"
     :style="{height: height}" 
     ref="scroll" 
     :probe-types="3" 
     @scroll="backscroll"
     :pulling-load="true"
     @pullingUp="Load">
     <!-- 轮播图start -->
    <home-swiper :banners="banners" @swiperonload="swiperonload"/>
    <!-- 轮播图end -->
    <!-- 推荐模块start -->
    <recommed-view :recommends="recommends"/>
    <!-- 推荐模块end -->
    <!-- 详情模块2start: 这里v-bind传递的是数组，不用:的话传递的是字符串-->
    <tab-contorl :titles="['流行','新款','精选']" @tabCtlclick="tabCtlclick"
    ref="tabcontorl2"
    v-show="!tabcontorlshow"/>
    <!-- 详情模块2end -->
    <!-- 商品模块start -->
    <goods-list :goods="showshop"/>
    <!-- 商品模块end -->
    </bscroll>
    <BackTop @click.native="backtopclick" v-show="isShow"/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./Childcomps/HomeSwiper";
import RecommedView from "./Childcomps/RecommedView";
import TabContorl from "components/content/tabContorl/TabContorl";
import GoodsList from 'components/content/goods/GoodsList.vue';
import Bscroll from 'components/common/bscroll/Bscroll.vue';
import BackTop from 'components/content/backtop/BackTop.vue';

import { getHomeMultidata, getHomeGoods } from "network/header.js";
import {debounce} from 'common/utils.js'
export default {
  name: "Header",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop:  {page: 0, list: [] },
        new: {page: 0, list: [] },
        sell: {page: 0, list: [] }
      },
      counttype: 'pop',
      isShow: true,
      tabcontorlshow: false,
      swipertop: 0,
      swiperY: 0
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommedView,
    TabContorl,
    GoodsList,
    Bscroll,
    BackTop
  },
  //组件创建完成发送请求。
  created() {
    //请求数据
    this.getHomeMultidata();
    //请求商品数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');  
  },
  mounted(){  
    //利用闭包扩大了作用域 对refresh函数做一次防抖处理
    const refresh = debounce(this.$refs.scroll.refresh,20);
    this.$bus.$on('itemimgLoad',() => {
      //对scroll.Height进行刷新
      refresh();
    })
  },
  //进入组件生命周期函数
  activated(){
    //将离开首页时候的scroll.y赋值给进入组件后的scroll.y
    this.$refs.scroll.scrollTo(0,this.swiperY,0);
    //这里应该再次刷新一次scrollheight。否则有bug：自动滚动到顶部。
    this.$refs.scroll.refresh();
  },
  //离开组件生命周期函数
  deactivated(){
    this.swiperY = this.$refs.scroll.swiperY();
  },
  computed:{
    showshop(){
      return this.goods[this.counttype].list;
    },
    //计算wrapper高度
    height(){
    return window.innerHeight-44-49+'px'
    }
  },
  methods: {
    //swiper加载完毕
    swiperonload(){
      this.swipertop = this.$refs.tabcontorl2.$el.offsetTop;
    },
    //下拉加载更多
    Load(){
      this.getHomeGoods(this.counttype);
    },
    //返回顶部
    backtopclick(){
      //new BScroll的实例对象.scrollTo(x,y,ms) 可以实现快速到达顶部
     this.$refs.scroll.scrollTo(0,0);
    },
    //显示/隐藏返回顶部按钮
    backscroll(position){
      this.isShow = Math.abs(position.y) > 1000;
      this.tabcontorlshow = Math.abs(position.y) > this.swipertop-44
    },
    //监听事件tabCtlclick
    tabCtlclick(index){
      switch(index){
        case 0:
          this.counttype = 'pop';
          break;
        case 1: 
          this.counttype = 'new';
          break;
        case 2:
          this.counttype = 'sell';
          break;
      }
      this.$refs.tabcontorl1.countindex = index;
      this.$refs.tabcontorl2.countindex = index;
    },
    //网络请求
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    //发送网络请求进行对原有数组的追加渲染
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type,page).then(res => {
        //给数组内容依次追加新元素  
        this.goods[type].list.push(...res.data.data.list);     
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp();
      });
    }
  }
};
</script>

<style scoped>
.navbar {
  background-color: #ff8198;
}
.navbar .center {
  text-align: center;
}
.content{
  overflow: hidden;
}
</style>