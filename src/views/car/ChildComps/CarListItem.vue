<template>
  <div class="carlistitem">
    <div class="carlistitem-log">
      <i class="login" :class="{logo: carList.checked}" @click="logoShow"></i>
    </div>
    <div class="carlistitem-img">
      <img :src="carList.image" alt="">
    </div>
    <div class="carlistitem-params">
      <div class="carlistitem-infos">
        <p>{{carList.title}}</p>
        <div class="carlistitem-infos-style">
          {{carList.style}}:{{carList.size}}
        </div>
        <div class="carlistitem-price clearfix">
          <span class="price">{{infoStyle}}</span>
          <span class="count">{{"×"+carList.count}}</span>
      </div> 
      </div>
      
    </div>      
    </div>
</template>

<script>
export default {
  name: 'CarListItem',
  data(){
    return{
      isShow: false
    }
  },
  props:{
    carList:{
      type: Object,
      default(){
        return {}
      }
    }
  },
  computed:{
    infoStyle(){
      return "￥"+this.carList.prices+":"+this.carList.size
    }
  },
  methods:{
    logoShow(){
      this.carList.checked = !this.carList.checked; 
    }
  }
}
</script>

<style>
.carlistitem{
  display: flex;
  height: 130px;
  padding: 10px 10px;
  border-bottom: 1px solid #ccc;
}
.carlistitem-log{
  flex: 1;
  display: flex;
  align-items: center;
}
.login{
  font-family: 'icomoon';
  display: inline-block;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid #ccc;
  color: #ffff;
}
.logo{
  font-family: 'icomoon';
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: red;
  font-size: 16px;
  text-align: center;
  line-height: 21px;
  color: #fff;
  border: 0;
}
.carlistitem-img{
  flex: 3;
  border-radius: 10px;
  background-color: skyblue;
  overflow: hidden;
}
.carlistitem div:nth-child(2) img{
  height: 100%;
  width: 100%;
}
.carlistitem-params{
  flex: 6;
  overflow: hidden;
}
.carlistitem-infos{
  width: calc(100% - 10px);
  height: 100%;
  margin-left: 10px;
}
.carlistitem-infos p{
  width: 100%;
  color: #000;
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.carlistitem-infos-style{
  margin-top: 10px;
  display: inline-block;
  padding: 5px;
  font-size: 12px;
  background-color: #ddd;
  border-radius: 5px;
}
.carlistitem-price{
  position: relative;
  left: 0px;
  bottom: -40px;
  font-size: 18px;
}
.carlistitem-price .price{
  float: left;
  color: rgb(231, 152, 5);
}
.carlistitem-price .count{
  float: right;
}

</style>