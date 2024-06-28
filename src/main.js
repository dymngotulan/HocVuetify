/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'
import { createPinia } from 'pinia';

// Composables
import { createApp } from 'vue'
import router from "@route/routers.js";
import './style.css'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const app = createApp(App)

registerPlugins(app)
app.use(createPinia())
app.use(router)
app.mount('#app')
