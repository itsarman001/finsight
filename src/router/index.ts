import { createWebHistory, createRouter } from "vue-router";

import HomeView from "../view/HomeView.vue";
import AboutView from "../view/AboutView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
