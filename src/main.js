import Vue from "vue";
import App from "./App.vue";
import router from './router';

Vue.config.productionTip = false;

// 创建和挂载根实例，注入路由。
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
