import { createRouter, createWebHistory } from "vue-router";

import Main from "@/views/Main.vue";
import Mission from "@/views/Mission.vue";
import Team from "@/views/Team.vue";
import Involved from "@/views/Involved.vue";
import Gallery from "@/views/Gallery.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/our-mission", // routes should be lowercase
    name: "Mission",
    component: Mission,
  },
  {
    path: "/meet-the-team", // routes should be lowercase
    name: "Team",
    component: Team,
  },
  {
    path: "/get-involved", // routes should be lowercase
    name: "Involved",
    component: Involved,
  },
  {
    path: "/gallery", // routes should be lowercase
    name: "Gallery",
    component: Gallery,
  },
];

const router = createRouter({
  mode: "history",
  history: createWebHistory(process.env.BASE_URL),
  linkExactActiveClass: "fw-bold",
  routes,
});

export default router;
