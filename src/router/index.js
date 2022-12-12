import { createRouter, createWebHistory } from 'vue-router'
import CountEr from '../components/CountEr.vue'

const routes = [
  {
    path: '/',
    name: 'CountView',
    component: CountEr
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.VUE_APP_HASH),
  routes
})

export default router
