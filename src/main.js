// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import demoBlock from "./components/demo-block.vue";

import "./theme-default/lib/index.css";
import "./wui-theme/src/index.scss";

import WUI from "../packages/index";
Vue.use(WUI);

Vue.component("demo-block", demoBlock);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>",
});
