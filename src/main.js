import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
import App from './App.vue'

import Home from "@/views/Home.vue"
import About from "@/views/About.vue"
import Learn from "@/views/Learn.vue"
import Archive from "@/views/Archive.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/",        name: "Home",    componenet: Home},
    { path: "/about",   name: "About",   componenet: About},
    { path: "/learn",   name: "Learn",   componenet: Learn},
    { path: "/archive", name: "Archive", componenet: Archive},
  ]
})

createApp(App).use(router).mount('#app')
