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
    { path: "/club-website",         name: "Home",    component: Home,    mode: 'history' },
    { path: "/club-website/about",   name: "About",   component: About,   mode: 'history' },
    { path: "/club-website/learn",   name: "Learn",   component: Learn,   mode: 'history' },
    { path: "/club-website/archive", name: "Archive", component: Archive, mode: 'history' },
  ],
  mode: 'hash'
})

createApp(App)
.use(router)
.mount('#app')
