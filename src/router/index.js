import Vue from 'vue'
import Router from 'vue-router'

//懒加载
const Header = ()=> import('views/home/Header.vue');
const Typeclass = ()=> import('views/typeclass/Typeclass.vue');
const Car = ()=> import('views/car/Car.vue');
const User = ()=> import('views/user/User.vue');
const Detail = ()=> import('../views/detail/Detail');

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/header'
    },
    {
      path: '/header',
      component: Header
    },
    {
      path: '/typeclass',
      component: Typeclass
    },
    {
      path: '/car',
      component: Car
    },
    {
      path: '/user',
      component: User
    },
    {
      path: '/detail/:iid',
      component: Detail
    }
  ],
   mode: 'history'
})

export default router
