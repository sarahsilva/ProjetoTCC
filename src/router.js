import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Cliente from './views/Cliente.vue'
import Funcionario from './views/Funcionario.vue'

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
      path: '/cliente',
      name: 'cliente',
      component: Cliente
    },
    {
      path: '/funcionario',
      name: 'funcionario',
      component: Funcionario
    }
  ]
})
