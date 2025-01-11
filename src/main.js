import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// 在生产环境中禁用 Vue Devtools
if (process.env.NODE_ENV === 'production') {
  app.config.devtools = false;
  app.config.debug = false;
  app.config.silent = false;
}

app.use(router)
app.mount('#app')
