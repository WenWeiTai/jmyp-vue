import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      // 首页
      path: '/',
      alias: 'index',
      component: () => import('./views/Home.vue'),
      children: [
        {
          path: 'index',
          name: 'index',
          component: () => import('./views/Index.vue')
        },
        {
          path: 'group',
          name: 'group',
          component: () => import('./views/Group.vue')
        },
        {
          path: 'card',
          name: 'card',
          component: () => import('./views/Card.vue')
        },
        {
          path: 'center',
          name: 'center',
          component: () => import('./views/Center.vue')
        }
      ]
    },
    {
      path: '*',
      redirect: '/index'
    }
  ]
})

export default router
