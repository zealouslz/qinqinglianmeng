import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/components/login/login.vue')
    },
    {
      path: '/bulletinBoard',
      name: 'bulletinBoard',
      component: () => import('@/components/bulletinBoard/bulletinBoard.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('@/components/list/list.vue')
    }
  ]
})
