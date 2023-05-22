import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'about',
      component: () => import('../views/dashbord.vue')
    },

    {
      path: '/view',
      name: 'viewchart',
      component: () => import('../views/viewchart.vue')
    }
  ]
})

export default router
