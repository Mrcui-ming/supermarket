//1.导入插件
import Toast from './Toast';
//把obj在Vue中进行安装
const obj = {};
//当Vue.use(toast)之后就会调用这个对象的install方法 toast.install
obj.install = function(Vue){
  //由于脚手架生成的render函数略过了模板的加载，所以我们需要先创建组件构造器。
  const toastContrustor =  Vue.extend(Toast);
  //通过new的方式， 根据组件构造器，可以创建出来一个组件对象
  const toast = new toastContrustor();
  //将组件对象，手动挂载到某一个元素上 挂载完之后会生成一个$el
  toast.$mount(document.createElement('div'))
  //toast.$el对应的就是div
  document.body.appendChild(toast.$el);

  
  Vue.prototype.$toast = Toast;
}

export default obj;