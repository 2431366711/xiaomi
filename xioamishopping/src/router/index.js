import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'mianview',
    component: () => import('../views/MainView.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
