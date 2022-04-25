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
    path: '/goodbrain',
    name: 'goodbrain',
    component: () => import('../views/GoodBrain.vue')
  },
  {
    path: '/focus',
    name: 'focus',
    component: () => import('../views/FocusUp.vue')
  },
  {
    path: '/memory',
    name: 'memory',
    component: () => import('../views/MemoryUp.vue')
  },
  {
    path: '/thinking',
    name: 'thinking',
    component: () => import('../views/ThinKing.vue')
  },
  {
    path: '/brainup',
    name: 'brainup',
    component: () => import('../views/BrainUp.vue')
  },
  {
    path: '/season',
    name: 'season',
    component: () => import('../views/SeaSon.vue')
  },
  {
    path: '/vegetablelist',
    name: 'vegetablelist',
    component: () => import('../views/VegetableList.vue')
  },
  {
    path: '/vegetable',
    name: 'vegetable',
    component: () => import('../views/VegeTable.vue')
  },
  {
    path: '/nasucomp',
    name: 'nasucomp',
    component: () => import('../components/NasuComp.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
