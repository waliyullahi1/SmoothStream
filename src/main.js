

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "./assets/tailwind.css";
import App from './App.vue'
import router from './router'
import Header from "./components/header.vue";
import play from "./components/play.vue";
import { AVPlugin } from "vue-audio-visual";
import primarybtn from "./components/primarybtn.vue";
const app = createApp(App)
app.component("play", play);
app.component("Header", Header);
app.component("primarybtn", primarybtn);
app.use(createPinia())
app.use(router)
app.use(AVPlugin);
app.mount('#app')
