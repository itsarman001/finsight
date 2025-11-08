import { createWebHistory, createRouter } from "vue-router";

import HomeView from "../view/HomeView.vue";
import AboutView from "../view/AboutView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
  { path: "/from-to", component: () => import("../components/GsapFromTo.vue") },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
