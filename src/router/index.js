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
      component: () => import('@/components/list/list.vue'),
      meta: {
        keepAlive: true // true为需要缓存，false为不需要缓存（不需要的也可以不加）
      }
    },
    {
      path: '/newlyAdd',
      name: 'newlyAdd',
      component: () => import('@/components/newlyAdd/newlyAdd.vue')
    },
    {
      path: '/edit',
      name: 'edit',
      component: () => import('@/components/edit/edit.vue')
    },
    {
      path: '/details',
      name: 'details',
      component: () => import('@/components/details/details.vue')
    }
  ]
})
