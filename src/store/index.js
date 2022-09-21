/**
 * @Description: 
 * @Version: 0.1
 * @Author: Harria
 * @Date: 2022-09-21 18:49:16
 * @LastEditors: Harria
 * @LastEditTime: 2022-09-21 18:49:34
 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
  },
});
export default store;
