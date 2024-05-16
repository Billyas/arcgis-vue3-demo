import { createRouter, createWebHistory } from 'vue-router'
import MainMap from "@/views/mainMap.vue"
import {baseUrl} from '@/js/consts'

const routes = [
  {
    path: '/',
    name: 'MainMap',
    component: MainMap
  }
]

const router = createRouter({
  history: createWebHistory(baseUrl),
  routes
})

export default router