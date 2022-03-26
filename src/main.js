/* eslint-disable vue/multi-word-component-names */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";

import Button from "primevue/button";
import Card from "primevue/card";
import Chart from "primevue/chart";

import "./assets/styles.scss";

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

const app = createApp(App);

app.use(router);
app.use(PrimeVue, { ripple: true });

app.component("Button", Button);
app.component("Card", Card);
app.component("Chart", Chart);

app.mount("#app");
