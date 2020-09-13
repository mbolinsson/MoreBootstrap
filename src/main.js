import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "../src/assets/styles/custom.scss";
import Popper from "popper.js";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import AOS from "aos";
import "aos/dist/aos.css";

Popper.Defaults.modifiers.computeStyle.gpuAcceleration = false;
// Install BootstrapVue
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init({
      duration: 1000,
      delay: 200,
    });
  },
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
