const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/layouts/index.vue'),
    children: [
      {
        path: '/mine',
        name: 'mine',
        component: () => import('@/pages/home/mine/index.vue')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('@/pages/home/about/index.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login/index.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/pages/error/404.vue')
  }
]

export default routes
