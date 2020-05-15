<template>
  <div class="typeasside">
    <asside-bscroll class="asside-bscroll">
      <ul>
      <li v-for="(item,index) in SelectInfos" :key="index" @click="AssideitemClick(index,item)" :class="{Style: index === countindex}">
        <div :class="{Duli: index === countindex}"></div>
        {{item.title}}</li>
    </ul>
    </asside-bscroll>
  </div>
</template>

<script>
import AssideBscroll from 'components/common/bscroll/Bscroll';
import {getSubcategory,getCategoryDetail} from 'network/typeclass.js';
export default {
  name:"TypeAsside",
  components:{
    AssideBscroll
  },
  data(){
    return{
      countindex: 0
    }
  },
  props:{
    SelectInfos:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods:{
    AssideitemClick(index,item){
      this.countindex = index;
      Promise.all([
        new Promise((resolve,reject) => {
          getSubcategory(item.maitKey).then(res =>{
            resolve(res)
          }) 
        }),
        new Promise((resolve,reject) => {
          getCategoryDetail(item.miniWallkey,'pop').then(res =>{
            resolve(res)
          })
        })
      ]).then((res) =>{
        this.$emit('getSubcategory',res);
        this.$bus.$emit('setScrollTo');
      })
    }
  }
}
</script>

<style scoped>
.typeasside{
  height: 100%;
}
.asside-bscroll{
  height: 100%;
  overflow: hidden;
}
  ul li{
    position: relative;
    height: 45px;
    text-align: center;
    line-height: 45px;
    font-size: 14px;
    background-color: #eee;
  }
  .Duli{
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: 5px;
    height: 100%;   
    vertical-align: middle;
    background-color: red;
  }
  .Style{
    background: #fff;
    color: #ff8198;
  }
</style>