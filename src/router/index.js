import { createWebHistory, createRouter } from 'vue-router'
import Home from "@/views/Home.vue"
import About from "@/views/About.vue"
import Learn from "@/views/Learn.vue"
import Archive from "@/views/Archive.vue"

const routes = [
  {
    path: "/club-website",
    name: "Home",
    componenet: Home,
  },
  {
    path: "/club-website/about",
    name: "About",
    componenet: About,
  },
  {
    path: "/club-website/learn",
    name: "Learn",
    componenet: Learn,
  },
  {
    path: "/club-website/archive",
    name: "Archive",
    componenet: Archive,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
