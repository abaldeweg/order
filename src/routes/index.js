export default [
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
]
