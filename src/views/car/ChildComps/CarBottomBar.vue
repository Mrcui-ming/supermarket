<template>
  <div class="carbottombar">
    <div class="checkmuster">
      <i class="login checkoffset" :class="{logo: IscheckedAll}" @click="Ischecked"></i>  
      <span>全选</span>
    </div>
    <div class="moenymuster">
      <span class="muster">合计:</span>
      <span>{{moenymuster}}</span>
    </div>
    <div class="numbermuster">
      <span @click="Settle">去结算</span>
      <span>{{numbermuster}}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'CarBottomBar',
  computed:{
    moenymuster(){
      //计算总价格
      return '￥' + this.carList.filter(value => value.checked == true).reduce((prevent,val)=>{
        return (prevent + val.prices * val.count);
      },0).toFixed(2);
    },
    ...mapGetters(['carList']),
    numbermuster(){
      //计算总件数
      return this.carList.filter(val => val.checked == true).length;
    },
    //全选按钮的选中
    IscheckedAll(){
      if(this.carList.length === 0) return false;
      return !this.carList.some(res => res.checked == false);
    }
  },
  methods:{
    //点击全选之后改变vuex变量的状态。
    Ischecked(){
      if(this.IscheckedAll){
        this.carList.forEach(res => res.checked = false);
      }else{
        this.carList.forEach(res => res.checked = true);
      }
    },
    Settle(){
      this.$emit('Settle',this.numbermuster);
    }
  }
}
</script>

<style scoped>
.carbottombar{
  display: flex;
  height: 40px;
  font-size: 16px;
  background-color: #eeeeee;
}
.checkmuster{
  flex: 3;
  display: flex;
  font-family: 'icomoon';
  align-items: center;
  justify-content: center;
}
.checkoffset{
  line-height: 18px;
}
.numbermuster{
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: red;
}
.moenymuster{
  flex: 4;
  display: flex;
  align-items: center;
}
.muster{
  margin-right: 5px;
}
</style>