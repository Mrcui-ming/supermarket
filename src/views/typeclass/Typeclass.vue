<template>
  <div id="typeclass">
    <type-nav-bar></type-nav-bar>
     <type-select>
       <type-asside slot="asside" :select-infos="selectinfos" @getSubcategory="getSubcategory"></type-asside>
       <type-asside-info slot="assideinfo" :asside-infos="assideinfos" :action-infos="actioninfos"></type-asside-info>
     </type-select>
  </div>
</template>

<script>
import TypeSelect from './ChildComps/TypeSelect';
import TypeNavBar from './ChildComps/TypeNavBar';
import TypeAsside from './ChildComps/TypeAsside';
import TypeAssideInfo from './ChildComps/TypeAssideInfo';
import {getCategory,getSubcategory,getCategoryDetail} from 'network/typeclass.js';
export default {
  name: 'Typeclass',
  data(){
    return{
      selectinfos:[],
      assideinfos:[],
      actioninfos:[]
    }
  },
  components:{
    TypeNavBar,
    TypeSelect,
    TypeAsside,
    TypeAssideInfo
  },
  created(){
    getCategory().then(res => {
      this.selectinfos = res.data.data.category.list;  
      console.log(this.selectinfos[0].maitKey);
      this.$nextTick(() => {
        Promise.all([
        new Promise((resolve,reject) => {
          getSubcategory(this.selectinfos[0].maitKey).then(res =>{
            resolve(res)
          }) 
        }),
        new Promise((resolve,reject) => {
          getCategoryDetail(this.selectinfos[0].miniWallkey,'pop').then(res =>{
            resolve(res)
          })
        })
      ]).then((res) =>{
         this.assideinfos = res[0].data.data.list;
         this.actioninfos = res[1].data;
      })
      })
    })
  },
  methods:{
    getSubcategory(res){
      this.assideinfos = res[0].data.data.list;
      this.actioninfos = res[1].data; 
    }
  }
}
</script>

<style>
#typeclass{
  height: 100vh;
}
</style>