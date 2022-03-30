import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "overview",
    component: () => import("../views/ProjectOverview.vue"),
  },
  {
    path: "/rsrp-chart",
    name: "rsrp-chart",
    component: () => import("../views/RsrpChartView.vue"),
  },
  {
    path: "/bts-chart",
    name: "bts-chart",
    component: () => import("../views/BtsChartView.vue"),
  },
  {
    path: "/records-chart",
    name: "records-chart",
    component: () => import("../views/RecordsByDayChartView.vue"),
  },
  {
    path: "/bts-map",
    name: "bts-map",
    component: () => import("../views/BtsMapView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
