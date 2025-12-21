import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { WELCOME_ROUTE } from '@/modules/welcome/routers'
import { authGuard } from '@/middlewares/app/authGuard'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/welcome',
    beforeEnter: authGuard,
    component: () => import('@/layouts/DefaultLayout.vue'),
    children: [
      ...WELCOME_ROUTE.ROUTES,
      {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/views/NotFound.vue'),
      },
      {
        path: '/no-permission',
        name: 'NoPermission',
        component: () => import('@/views/NoPermission.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

export default router
