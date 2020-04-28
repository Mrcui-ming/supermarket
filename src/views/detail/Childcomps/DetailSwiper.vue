<template>
<!-- 注意类名不要和Swiper组件重名了。 -->
  <swiper class="detail-swiper">
    <swiper-item v-for="(item,index) in topImages" :key="index">
      <img :src="item" alt="" >
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index.js';
export default {
  name: 'DetailSwiper',
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    topImages:{
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.detail-swiper{
  height: 300px;
  margin: 0!important;
}
</style>
