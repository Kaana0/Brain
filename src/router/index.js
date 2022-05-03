import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/SearchView.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../views/ListView.vue')
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: () => import('../views/CalenDar.vue')
  },
  {
    path: '/result',
    name: 'result',
    component: () => import('../views/ResultView.vue')
  },
  {
    path: '/todaypage',
    name: 'today',
    component: () => import('../views/TodayPage.vue')
  },
  {
    path: '/atamaii',
    name: 'atamaii',
    component: () => import('../views/AtamaIi.vue')
  },
  {
    path: '/syuutyuu',
    name: 'syuutyuu',
    component: () => import('../views/SyuutyuuUp.vue')
  },
  {
    path: '/kiokuup',
    name: 'kiokuup',
    component: () => import('../views/KiokuUp.vue')
  },
  {
    path: '/sikouup',
    name: 'sikouup',
    component: () => import('../views/SikouUp.vue')
  },
  {
    path: '/noukassei',
    name: 'noukassei',
    component: () => import('../views/NoukaSsei.vue')
  },
  {
    path: '/butaniku',
    name: 'butaniku',
    component: () => import('../views/ButanikuPage.vue')
  },
  {
    path: '/melonpage',
    name: 'melonpage',
    component: () => import('../views/MelonPage.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
