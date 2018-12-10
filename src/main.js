import Vue from "vue";
import App from "./App.vue";

import {
  MdToolbar,
  MdTabs,
  MdButton,
  MdSteppers,
  MdField,
  MdRadio
} from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "./theme.scss";
[MdToolbar, MdTabs, MdButton, MdSteppers, MdField, MdRadio].map(d =>
  Vue.use(d)
);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
