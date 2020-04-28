<template>
  <swiper>
      <swiper-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" @load="swiperonload">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index.js'
export default {
 name: 'HomeSwiper',
 data(){
     return{
       countemit: false
     }
   },
 components:{
   Swiper,
   SwiperItem
 },
 props:{
   banners:{
     type: Array,
     default(){
       return []
     }
   }
 },
 methods:{
   swiperonload(){
     if(!this.countemit){
       this.$emit('swiperonload');
       this.countemit = true;
     }
   }
 }
}
</script>

<style>

</style>