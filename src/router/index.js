import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect:'/index'
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('../view/home/index.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../view/news/index.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../view/about/index.vue')
    },
    {
      path: '/channel',
      component: () => import('../view/channel/index.vue')
    },
    
  ]
})

export default router
