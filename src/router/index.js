import { createRouter, createWebHistory } from 'vue-router'
import PlayerView from '@/views/PlayerView.vue'

const routes = [
  {
    path: '/',
    name: 'PlayerView',
    component: PlayerView
  }
  // {
  //   // path: '/about',
  //   // name: 'about',
  //   // // route level code-splitting
  //   // // this generates a separate chunk (about.[hash].js) for this route
  //   // // which is lazy-loaded when the route is visited.
  //   // component: () => import(/* webpackChunkName: "about" */ '@/views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

