import Vue from "vue";
import App from "./App.vue";

// Time plugins
import moment from "moment";
Object.defineProperty(Vue.prototype, "$moment", { value: moment });

import duration from "./plugins/duration.js";
Vue.use(duration);

// Synchronize JS interval timers
import * as workerTimers from "worker-timers";
Object.defineProperty(Vue.prototype, "$workerTimers", { value: workerTimers });

import store from "./store";

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
