import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import setupDisableDevtools from './utils/disable-devtools'
createApp(App).mount('#app')

setupDisableDevtools({
    enableDetector: true,
})