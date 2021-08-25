// base router
export default {
  path: '/',
  component: () => import('/@/layouts/BaseLayout.vue'),
  redirect: '/test',
  children: [
    {
      path: '/test',
      name: 'home-test',
      component: () => import('/@/views/Home.vue')
    }
  ]
}