import { createRouter, createWebHistory } from 'vue-router'
import MainMap from "@/views/mainMap.vue"

const routes = [
  {
    path: '/',
    name: 'MainMap',
    component: MainMap
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router