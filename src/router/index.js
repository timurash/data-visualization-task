import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/rsrp-chart",
    name: "rsrp-chart",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LineChartView.vue"),
  },
  {
    path: "/bts-chart",
    name: "bts-chart",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PieChartView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
