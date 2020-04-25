export function debounce(fuc,time){
  let timer = null;
  return function(...arr){
    if(timer){clearTimeout(timer)};
    timer = setTimeout(() => {
      //改变this指向，传参就正常显示，否则就是...arr数组
      fuc.apply(this,arr);         
    },time)   
  }
}