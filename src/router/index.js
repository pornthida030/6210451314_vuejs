import Vue from 'vue'
import VueRouter from 'vue-router'
import IncomeAndExpensesList from '@/views/IncomeAndExpensesList'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'IncomeAndExpensesList',
    component: IncomeAndExpensesList
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
