<template>
  <div class="carlist">
    <car-list-item v-for="(item,index) in carList" :key="index"
    :car-list="item"></car-list-item>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CarListItem from './CarListItem';
export default {
  name: 'CarList',
  components:{
    CarListItem
  },
  computed:{
    ...mapGetters(['carList'])
  }
}
</script>

<style>
</style>