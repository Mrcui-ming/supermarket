<template>
  <div class="recommend">
    <div v-for="(item,index) in recommends" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
name: 'RecommedView',
props:{
  recommends:{
    type: Array,
    default(){
      return []
    }
  }
}
}
</script>

<style>
.recommend{
  display: flex;
  padding-bottom: 20px;
  border-bottom: 10px solid #eee;
}
.recommend-item{
  flex:1;
  text-align: center;
}
.recommend-item img{
  width: 70px;
  height: 70px;
  margin: 10px 0;
}

</style>