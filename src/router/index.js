import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/view/HomeView.vue'
import Page from '@/view/Page.vue'
import Hot from '@/view/Hot.vue'
import DetailProduct from '@/view/DetailProduct.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path:"/",
    name:"home",
    component:HomeView
    },
    {path:"/page",
      name:"page",
      component:Page
    },
    {path:"/Hot",
      name:"Hot",
      component:Hot
    },
    {path:"/DetailProduct",
      name:"DetailProduct",
      component:DetailProduct
    },
  ]
})

export default router