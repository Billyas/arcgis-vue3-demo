import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@arcgis/core/assets/esri/themes/light/main.css' 
import esriConfig from "@arcgis/core/config";

esriConfig.locale = "zh-cn";
createApp(App).use(router).mount('#app')
