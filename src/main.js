import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
import App from '@/components/App.vue'

// Universal Styling rules
import './assets/css/universal.css'
// Fonts
import './assets/css/fonts.css'

import Home from "@/views/Home.vue"
import Crew from "@/views/Crew.vue"
import Learn from "@/views/Learn.vue"
import Archive from "@/views/Archive.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/club-website",         name: "Home",    component: Home    },
    { path: "/club-website/crew",   name: "Crew",   component: Crew   },
    { path: "/club-website/learn",   name: "Learn",   component: Learn   },
    { path: "/club-website/archive", name: "Archive", component: Archive },
  ]
})

createApp(App)
.use(router)
.mount('#app')
