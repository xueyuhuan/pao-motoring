import Vue from "vue";
import ElementUI from 'element-ui';
import BaiduMap from 'vue-baidu-map'
import App from "./App.vue";
import router from "./router";
import store from "./store";

import 'element-ui/lib/theme-chalk/index.css';
import './assets/scss/reset.scss';
import './assets/scss/common.scss';

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(BaiduMap, {
  ak: 'qqjxybFAAl1Z7W5acdHWgMLvwzCobeyO'
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
