<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
name: 'Bscroll',
props:{
  ProbeTypes:{
    type: Number,
    default(){
      return 0
    }
  },
  PullingLoad:{
    type: Boolean,
    default: false
  }
},
data(){
  return{
    bscroll: null,
  }
},
methods:{
  //可以用这个方法来做下来刷新。2s内不可重复刷新
  finishPullUp(){
    this.bscroll && this.bscroll.finishPullUp();
  },
  //对bscroll.scrollHeight做一次刷新。因为默认可滑动区域是没有合计图片的高度.
  refresh(){
    //逻辑与先判断有没有BScroll实例对象
    this.bscroll && this.bscroll.refresh();    
  },
  //返回顶部
  scrollTo(x, y, time = 700){
    this.bscroll && this.bscroll.scrollTo(x,y,time); 
  },
  //计算被卷去头部的距离
  swiperY(){
    return this.bscroll ? this.bscroll.y : 0;
  }
},
mounted(){
  this.bscroll = new BScroll(this.$refs.wrapper,{
  probeType: this.ProbeTypes,
  //被bscroll包裹的元素默认鼠标事件为禁止的
  click: true,
  pullUpLoad: this.PullingLoad
 });
 //监听滚动
  if(this.ProbeTypes === 2 || this.ProbeTypes ===3){
    this.bscroll.on('scroll',(position) => {
    this.$emit('scroll',position)
  });
  }
  //监听页面到底
 if(this.PullingLoad == true){
    this.bscroll.on('pullingUp',() => {
    this.$emit('pullingUp')
  })
 }
}
}
</script>

<style>
</style>