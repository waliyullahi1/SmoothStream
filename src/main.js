

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "./assets/tailwind.css";
import App from './App.vue'
import router from './router'
import Header from "./components/header.vue";
import play from "./components/play.vue";

const app = createApp(App)
app.component("play", play);
app.component("Header", Header);
app.use(createPinia())
app.use(router)

app.mount('#app')
