import { createRouter, createWebHistory } from "vue-router";

import Main from "@/views/Main.vue";
import Team from "@/views/Team.vue";
import Involved from "@/views/Involved.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
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
];

const router = createRouter({
  mode: "history",
  history: createWebHistory(process.env.BASE_URL),
  linkExactActiveClass: "fw-bold",
  routes,
});

export default router;
