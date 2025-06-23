import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      meta: { title: 'WMS Login' },
    },
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: { title: 'WMS HomePage' },
      children: [
        {
          path: '/',
          component: () => import('../views/LoginView.vue'),
          meta: { title: 'WMS Login' },
        },
        {
          path: '/welcome',
          name: 'welcome',
          component: () => import('../components/system/WelcomePage.vue'),
          meta: { title: 'Welcome WMS' },
        },
        {
          path: '/t-rms',
          name: 'rawMaterialStorage',
          component: () => import('../components/system/RMStorage.vue'),
          meta: { title: 'Raw Material Storage' },
        },
        {
          path: '/t-rmo',
          name: 'rawMaterialOutflow',
          component: () => import('../components/system/RMOutflow.vue'),
          meta: { title: 'Raw Material Outflow' },
        },
        {
          path: '/rpt-inventory',
          name: 'reportInventory',
          component: () => import('../components/system/InventoryReport.vue'),
          meta: { title: 'Inventory Report' },
        },
        {
          path: '/rpt-task',
          name: 'reportTask',
          meta: { title: 'Task Report' },
        },
        {
          path: '/settings',
          name: 'settings',
          component: () => import('../components/system/SettingsPage.vue'),
          meta: { title: 'Settings' },
        },
      ],
    },
  ],
})

export default router
