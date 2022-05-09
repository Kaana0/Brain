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
    path: '/congrats',
    name: 'congrats',
    component: () => import('../views/CongRats.vue')
  },
  {
    path: '/todaypage',
    name: 'today',
    component: () => import('../views/TodayPage.vue')
  },
  {
    path: '/todaypage2',
    name: 'today',
    component: () => import('../views/TodayPage.vue')
  },
  {
    path: '/atamaii',
    name: 'atamaii',
    component: () => import('../views/AtamaIi.vue')
  },
  {
    path: '/lemon',
    name: 'lemon',
    component: () => import('../views/LemonPage.vue')
  },
  {
    path: '/nasi',
    name: 'nasi',
    component: () => import('../views/NasiPage.vue')
  },
  {
    path: '/avocado',
    name: 'avocado',
    component: () => import('../views/AvocadoPage.vue')
  },
  {
    path: '/potato',
    name: 'potato',
    component: () => import('../views/PotatoPage.vue')
  },
  {
    path: '/satumaimo',
    name: 'satumaimo',
    component: () => import('../views/SatumaimoPage.vue')
  },
  {
    path: '/soramame',
    name: 'soramame',
    component: () => import('../views/SoramamePage.vue')
  },
  {
    path: '/wakame',
    name: 'wakame',
    component: () => import('../views/WakamePage.vue')
  },
  {
    path: '/origo',
    name: 'origo',
    component: () => import('../views/OrigoPage.vue')
  },
  {
    path: '/sanma',
    name: 'sanma',
    component: () => import('../views/SanmaPage.vue')
  },
  {
    path: '/banana',
    name: 'banana',
    component: () => import('../views/BananaPage.vue')
  },
  {
    path: '/egg',
    name: 'egg',
    component: () => import('../views/EggPage.vue')
  },
  {
    path: '/eringi',
    name: 'eringi',
    component: () => import('../views/EringiPage.vue')
  },
  {
    path: '/tomato',
    name: 'tomato',
    component: () => import('../views/TomatoPage.vue')
  },
  {
    path: '/onion',
    name: 'onion',
    component: () => import('../views/OnionPage.vue')
  },
  {
    path: '/kaki',
    name: 'kaki',
    component: () => import('../views/KakiPage.vue')
  },
  {
    path: '/nut',
    name: 'nut',
    component: () => import('../views/NutPage.vue')
  },
  {
    path: '/pi-man',
    name: 'pi-man',
    component: () => import('../views/Pi-manPage.vue')
  },
  {
    path: '/edamame',
    name: 'edamame',
    component: () => import('../views/EdamamePage.vue')
  },
  {
    path: '/cheese',
    name: 'cheese',
    component: () => import('../views/CheesePage.vue')
  },
  {
    path: '/cu-ri',
    name: 'cu-ri',
    component: () => import('../views/Cu-riPage.vue')
  },
  {
    path: '/daikon',
    name: 'daikon',
    component: () => import('../views/DaikonPage.vue')
  },
  {
    path: '/okura',
    name: 'okura',
    component: () => import('../views/OkuraPage.vue')
  },
  {
    path: '/goma',
    name: 'goma',
    component: () => import('../views/GomaPage.vue')
  },
  {
    path: '/kaiware',
    name: 'kaiware',
    component: () => import('../views/KaiwarePage.vue')
  },
  {
    path: '/kabotya',
    name: 'kabotya',
    component: () => import('../views/KabotyaPage.vue')
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
    path: '/melon',
    name: 'melon',
    component: () => import('../views/MelonPage.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
