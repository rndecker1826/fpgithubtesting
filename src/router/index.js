<<<<<<< HEAD
import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  { path: "/", name: "home", component: HomeView },

  {
    path: "/hourly/:location",
    name: "hourly",
    component: () => import("../views/HourlyView.vue"),
  },

  {
    path: "/forecast/:location",
    name: "forecast",
    component: () => import("../views/ForecastView.vue"),
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
=======
import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
  { path: "/", name: "home", component: HomeView },

  {
    path: "/hourly/:location",
    name: "hourly",
    component: () => import("../views/HourlyView.vue"),
  },

  {
    path: "/forecast/:location",
    name: "forecast",
    component: () => import("../views/ForecastView.vue"),
  },
],
});
export default router;
>>>>>>> 8587aca021366b3fe5997389957fc33f1c1d8a2c
