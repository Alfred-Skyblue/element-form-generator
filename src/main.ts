import { loadComponents } from '@/core/load-components'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'element-plus/dist/index.css'
import './styles'

const pinia = createPinia()
const app = createApp(App)
app.use(ElementPlus)
app.use(pinia)
loadComponents(app)
app.mount('#app')
