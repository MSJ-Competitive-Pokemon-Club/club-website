import { createWebHistory, createRouter } from 'vue-router'
import Home from "@/views/Home.vue"
import About from "@/views/About.vue"
import Learn from "@/views/Learn.vue"
import Archive from "@/views/Archive.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    componenet: Home,
  },
  {
    path: "/",
    name: "About",
    componenet: About,
  },
  {
    path: "/",
    name: "Learn",
    componenet: Learn,
  },
  {
    path: "/",
    name: "Archive",
    componenet: Archive,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
