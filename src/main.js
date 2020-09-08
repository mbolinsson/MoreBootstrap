import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "../src/assets/styles/custom.scss";
import Popper from "popper.js";

Popper.Defaults.modifiers.computeStyle.gpuAcceleration = false;
// Install BootstrapVue
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
