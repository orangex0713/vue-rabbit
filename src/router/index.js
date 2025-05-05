import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import LayOut from '@/views/LayOut/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'

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
        }
      ]
    },
    {
      path: '/login',
      component: Login
    },
  ],
})

export default router
