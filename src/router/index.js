import { createRouter, createWebHistory } from 'vue-router'
import PlayerView from '@/views/PlayerView.vue'
import SplashScreen from '@/views/SplashScreen.vue'

const routes = [
  {
    path: '/',
    name: 'SplashScreen',
    component: SplashScreen,
  },
  {
    path: '/player',
    name: 'PlayerView',
    component: PlayerView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

