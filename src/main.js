/* eslint-disable vue/multi-word-component-names */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";

import Button from "primevue/button";
import Card from "primevue/card";
import Chart from "primevue/chart";
import Dropdown from "primevue/dropdown";

import "./assets/styles.scss";

import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/lara-light-blue/theme.css";
import "primeicons/primeicons.css";

// Date adapter for Chart.js library
import "chartjs-adapter-date-fns";

const app = createApp(App);

app.use(router);
app.use(PrimeVue, { ripple: true });

app.component("Button", Button);
app.component("Card", Card);
app.component("Chart", Chart);
app.component("Dropdown", Dropdown);

app.mount("#app");

import "./assets/primevue-overrides.scss";
