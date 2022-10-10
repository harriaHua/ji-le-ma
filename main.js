/**
 * @Description:
 * @Version: 0.1
 * @Author: Harria
 * @Date: 2022-10-08 23:19:24
 * @LastEditors: Harria
 * @LastEditTime: 2022-10-08 23:34:34
 */
import App from "./App";
import "./static/iconfont.css";
// import axios from "@/node_modules/axios"

// #ifndef VUE3
import Vue from "vue";
import uView from "@/uni_modules/uview-ui";
import request from "@/api/request.js";
import store from "./store";

Vue.prototype.$request = request;
Vue.prototype.$store = store;
// $axios发请求
// import axios from '@/utils/https.js';
// Vue.prototype.$axios = axios
// console.log(this.$axios)
Vue.use(uView);
Vue.config.productionTip = false;
App.mpType = "app";
const app = new Vue({
	...App,
	store,
});
app.$mount();
// #endif

// #ifdef VUE3
import { createSSRApp } from "vue";
export function createApp() {
	const app = createSSRApp(App);
	return {
		app,
	};
}
// #endif
