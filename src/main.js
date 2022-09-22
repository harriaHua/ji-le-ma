/**
 * @Description:
 * @Version: 0.1
 * @Author: Harria
 * @Date: 2022-09-20 22:58:09
 * @LastEditors: Harria
 * @LastEditTime: 2022-09-22 14:35:00
 */
import Vue from "vue";
import App from "./App";
import store from "./store";
import uView from "uview-ui";
import request from "@/api/request.js";
Vue.prototype.$request = request;
Vue.use(uView);
Vue.config.productionTip = false;

App.mpType = "app";

const app = new Vue({
  ...App,
  store,
});
app.$mount();
