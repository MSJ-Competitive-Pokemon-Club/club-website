import { createWebHistory, createRouter } from 'vue-router'
import Home from "@/views/Home.vue"
import Crew from "@/views/Crew.vue"
import Learn from "@/views/Learn.vue"
import Archive from "@/views/Archive.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    componenet: Home,
  },
  {
    path: "/crew",
    name: "Crew",
    componenet: Crew,
  },
  {
    path: "/learn",
    name: "Learn",
    componenet: Learn,
  },
  {
    path: "/archive",
    name: "Archive",
    componenet: Archive,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
