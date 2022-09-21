/**
 * @Description:
 * @Version: 0.1
 * @Author: Harria
 * @Date: 2022-09-20 22:58:09
 * @LastEditors: Harria
 * @LastEditTime: 2022-09-21 08:54:50
 */
import Vue from "vue";
import App from "./App";
import uView from "uview-ui";
Vue.use(uView);
Vue.config.productionTip = false;

App.mpType = "app";

const app = new Vue({
  ...App,
});
app.$mount();
