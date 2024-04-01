import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: { name: 'categories' }
    },
    {
      path: '/categories/:category(\\d+)?',
      name: 'categories',
      component: () => import('@/views/Categories.vue'),
      meta: { filter: true },
      children: [
        {
          path: 'products',
          name: 'products',
          component: () => import('@/views/Products.vue'),
          meta: { filter: true }
        }
      ]
    },
    {
      path: '/categories/:category(\\d+)/products/:product(\\d+)',
      name: 'product',
      component: () => import('@/views/Product.vue')
    },
    {
      path: '/search/:query(.+)?',
      name: 'search',
      component: () => import('@/views/Search.vue')
    }
  ]
})
