<template>
  <nav-bar class="nav-bar">
      <div slot="left" @click="leftbarClick">
        <div class="leftbar"></div>
      </div>
      <div slot="center" class="centerbar">
        <span v-for="(item,index) in navbartitle" 
        :key="index"
        :class="{definecolor: index === countindex}"
        @click="centerbarClick(index)">{{item}}</span>
      </div>
    </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: 'DetailNav',
  components:{
    NavBar
  },
  data(){
    return{
      iid: null,
      navbartitle:['商品','参数','评论','推荐'],
      countindex: 0,
    }
  },
  methods:{
    centerbarClick(index){
      this.countindex = index;
    },
    leftbarClick(){
      //后退一栈
      this.$router.back();
    }
  }
}
</script>

<style>
.centerbar{
  display: flex;
}
.centerbar span{
  flex: 1;
  text-align: center;
  font-size: 14px;
}
.definecolor{
  color: #ff8198;
}
.nav-bar{
  border-bottom: 1px solid #f1f1f1;
}
.leftbar{
  width: 12px;
  height: 12px;
  transform: rotate(45deg);
  margin: 16px 0 0 25px;
  border-bottom: 3px solid #ccc;
  border-left: 3px solid #ccc;
}
</style>