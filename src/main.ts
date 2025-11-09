import { createApp } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './style.css'
import App from './App.vue'
createApp(App).use(AOS.init).mount('#app')
