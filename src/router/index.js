import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  { 
    path: '/404', 
    name: '404',
    component: () => import('../views/404.vue')
  },
  { 
    path: '/mentions-legales', 
    name: 'Mentions légales',
    component: () => import('../views/mentions-legales.vue')
  },
  { 
    path: '*', 
    component: () => import('../views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router