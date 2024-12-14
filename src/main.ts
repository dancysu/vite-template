import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { pinia } from './pinia'
import '@/common/assets/styles/main.scss'
import 'normalize.css'
const app = createApp(App)

app.use(router).use(pinia)

app.mount('#app')
