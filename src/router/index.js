import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/view/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/page1',
      name: 'page1',
      component: Home,
    },
    {
        path: '/page2',
        name: 'page2',
        component: Home,
      },
      {
        path: '/page3',
        name: 'page3',
        component: Home,
      },
      {
        path: '/Home',
        name: 'Home',
        component: Home,
      },
      {
        path: '/',
        redirect: '/Home',
      },

  ],
})

export default router
