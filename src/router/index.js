import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/login/login'
import bulletinBoard from '@/components/bulletinBoard/bulletinBoard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: HelloWorld
    },
    {
      path: '/bulletinBoard',
      name: 'bulletinBoard',
      component: bulletinBoard
    }
  ]
})
