import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '@/views/DashboardView.vue'
import { ROUTES } from '@/modules/Shared/core/constants/routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTES.HOME.PATH,
      name: ROUTES.HOME.NAME,
      component: DashboardView
    },
    {
      path: ROUTES.DASHBOARD.PATH,
      name: ROUTES.DASHBOARD.NAME,
      component: DashboardView
    },
    {
      path: ROUTES.OPERATIONS.PATH,
      name: ROUTES.OPERATIONS.NAME,
      component: () => import('../views/OperationsView.vue')
    },
    {
      path: ROUTES.LOGIN.PATH,
      name: ROUTES.LOGIN.NAME,
      component: () => import('../views/LoginView.vue')
    },
    {
      path: ROUTES.SIGN_UP.PATH,
      name: ROUTES.SIGN_UP.NAME,
      component: () => import('../views/SignUpView.vue')
    }
  ]
})

export default router
