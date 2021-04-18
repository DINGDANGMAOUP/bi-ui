import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login/index'
import Home from '@/views/Home'
import NotFound from '@/views/404'
import navPage from '@/views/NavPage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/navPage',
      name: 'navPage',
      component: navPage
    },
    {
      path: '/404',
      name: 'notFound',
      component: NotFound
    }
  ]
})
