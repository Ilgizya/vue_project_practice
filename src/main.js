import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import UUID from 'vue3-uuid'

import './assets/styles/reset.css'
import './assets/styles/style.scss'

createApp(App)
  .use(store)
  .use(router)
  .use(UUID)
  .mount('#app')
