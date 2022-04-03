import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.VUE_APP_BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: { name: 'article' },
    },
    {
      path: '/article',
      name: 'article',
      component: () => import('../views/ArticleView'),
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('../views/OrderView'),
    },
    {
      path: '*',
      redirect: { name: 'article', params: { is404: true } },
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
})

export default router
