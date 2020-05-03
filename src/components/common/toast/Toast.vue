<template>
  <div class="toast" v-show="showtoast">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data(){
    return{
      message: '',
      showtoast: false
    }
  },
  methods:{  
    show(message,duration=2000){
      this.showtoast = true;
      console.log(this.showtoast);
      this.message = message;
      setTimeout(() => {
      this.showtoast = false;
      console.log(this.showtoast);
      this.message = '';
      },duration)
    }
    
  }
}
</script>

<style>
.toast{
  position: fixed;
  z-index: 999;
  top: 50%;
  left: 50%;
  font-size: 20px;
  border-radius: 4px;
  width: 200px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  background: rgba(0,0,0,0.7);
  color: #fff;
  transform: translate(-50%,-50%);
}
</style>