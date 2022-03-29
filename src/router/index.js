import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/overview",
    name: "overview",
    component: () => import("../views/ProjectOverview.vue"),
  },
  {
    path: "/rsrp-chart",
    name: "rsrp-chart",
    component: () => import("../views/LineChartView.vue"),
  },
  {
    path: "/bts-chart",
    name: "bts-chart",
    component: () => import("../views/PieChartView.vue"),
  },
  {
    path: "/records-chart",
    name: "records-chart",
    component: () => import("../views/BarChartView.vue"),
  },
  {
    path: "/map",
    name: "map",
    component: () => import("../views/MapView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
