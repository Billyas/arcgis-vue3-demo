import { createRouter, createWebHistory } from 'vue-router'
import MainMap from "@/views/mainMap.vue"
import {baseUrl} from '@/js/config.js'

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