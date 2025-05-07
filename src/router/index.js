import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import LayOut from '@/views/LayOut/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from '@/views/Detail/index.vue'
import CartList from '@/views/CartList/index.vue'
import Checkout from '@/views/Checkout/index.vue'
import Pay from '@/views/Pay/index.vue'
import PayBack from '@/views/Pay/PayBack.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // path and component
    {
      path: '/',
      component: LayOut,
      children:[
        {
          // 默认路由置空
          path:'',
          component: Home
        },
        {
          path: 'category/:id',
          component: Category
        },
        {
          path: 'category/sub/:id',
          component: SubCategory
        },
        {
          path: 'detail/:id',
          component: Detail
        },
        {
          path: 'cartlist',
          component: CartList
        },
        {
          path:'checkout',
          component: Checkout
        },
        {
          path: 'pay',
          component: Pay
        },
        {
          path: 'paycallback',
          component: PayBack
        }
      ]
    },
    {
      path: '/login',
      component: Login
    },
  ],
  // 路由行为滚动定制
  scrollBehavior(){
    return{
      top:0
    }
  }
})

export default router
