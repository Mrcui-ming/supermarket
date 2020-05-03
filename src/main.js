import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import toast from 'components/common/toast/index.js';

//移动端300ms延迟解决方案
import FastClick from 'fastclick';
FastClick.attach(document.body);

Vue.use(toast);

Vue.config.productionTip = false;

Vue.prototype.$bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
