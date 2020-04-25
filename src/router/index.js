import Vue from 'vue'
import Router from 'vue-router'

const Header = ()=> import('views/home/Header.vue');
const Typeclass = ()=> import('views/typeclass/Typeclass.vue');
const Car = ()=> import('views/car/Car.vue');
const User = ()=> import('views/user/User.vue');

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
    }
  ],
   mode: 'history'
})

export default router
