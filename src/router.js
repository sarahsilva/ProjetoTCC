import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import LoginSarah from './views/LoginSarah.vue'
import DemoVariaveis from './views/DemoVariaveis'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/LoginSarah',
      name: 'LoginSarah',
      component: LoginSarah
    },
    {
      path: '/demo',
      name: 'DemoVariaveis',
      component: DemoVariaveis
    }
  ]
})
