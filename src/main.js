import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Antd from "ant-design-vue";
import axios from "axios";
import VueAxios from "vue-axios";

import "@/assets/style/antd.less";
import "@/assets/style/main.scss";
import "@/assets/style/utilities.css";
import "@/assets/style/global.css";
import "@/assets/style/responsive.scss";

Vue.config.productionTip = false;
Vue.use(Antd);
Vue.use(VueAxios, axios)
Vue.use(require('vue-moment'));

// Vue.prototype.$axios = axios



new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
