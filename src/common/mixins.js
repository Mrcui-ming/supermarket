//混入工具
/* 使用方法:
1.exprot const obj = {}
2.mixins: [obj]
*/
import BackTop from 'components/content/backtop/BackTop.vue';
import {debounce} from './utils.js';
export const itemimgmixins = {
  data(){
    return{
      imgLoadHandle: null
    }
  },
  mounted(){  
    //利用闭包扩大了作用域 对refresh函数做一次防抖处理
    const refresh = debounce(this.$refs.scroll.refresh,20);
    this.imgLoadHandle = () => {
      //对scroll.Height进行刷新
      refresh();
    }
    this.$bus.$on('itemimgLoad',this.imgLoadHandle)
  }
};
export const backtopmixins = {
  components:{
    BackTop
  },
  data(){
    return {
      isShow: false
    }
  },
  methods:{
     //返回顶部
     backtopclick(){
      //new BScroll的实例对象.scrollTo(x,y,ms) 可以实现快速到达顶部
     this.$refs.scroll.scrollTo(0,0);
    },
  }
}