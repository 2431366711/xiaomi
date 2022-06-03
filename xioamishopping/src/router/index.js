import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'mianview',
    component: () => import('../views/MainView.vue')
  },
  {
    path: '/login',
    name: 'login',
    redirect: '/login/password',
    component: () => import('../views/LoginView.vue'),
    children: [
      {
        path: 'password',
        name: 'password',
        component: () => import('../components/Login/LoginPassword.vue')
      },
      {
        path: 'phone',
        name: 'phone',
        component: () => import('../components/Login/LoginPhone.vue')
      }
    ]
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
