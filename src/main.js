
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

/* Custom CSS link */
import './assets/sass/style.scss'

const app = createApp(App)
app.use(createPinia())
app.mount('#app')


/* Import all of Bootstrap js */
import * as bootstrap from 'bootstrap';