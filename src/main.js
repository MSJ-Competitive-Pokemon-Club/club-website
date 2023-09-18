import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
import App from '@/components/App.vue'

import Home from "@/views/Home.vue"
import Crew from "@/views/Crew.vue"
import Learn from "@/views/Learn.vue"
import Archive from "@/views/Archive.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/",        name: "Home",    component: Home    },
    { path: "/crew",    name: "Crew",   component: Crew   },
    { path: "/learn",   name: "Learn",   component: Learn   },
    { path: "/archive", name: "Archive", component: Archive },
  ]
})

createApp(App)
.use(router)
.mount('#app')
