import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/home/HomePage'
import DetailPage from '@/pages/home/DetailPage'
import UserPage from '@/pages/user/UserPage'
import LoginPage from '@/pages/user/LoginPage'
import SelectPage from '@/pages/shop/SelectPage'
import CartPage from '@/pages/shop/CartPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'HomePage',
      component:HomePage
    },
    {
      path:'/detail',
      name:'DetailPage',
      component:DetailPage
    },
    {
      path:'/user',
      name:'UserPage',
      component:UserPage
    },
    {
      path:'/login',
      name:'LoginPage',
      component:LoginPage
    },
    {
      path:'/select',
      name:'SelectPage',
      component:SelectPage
    },
    {
      path:'/cart',
      name:'CartPage',
      component:CartPage
    }
  ]
})
