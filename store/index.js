/**
 * @Description:
 * @Version: 0.1
 * @Author: Harria
 * @Date: 2022-10-08 23:19:24
 * @LastEditors: Harria
 * @LastEditTime: 2022-10-08 23:33:32
 */
/**
 * @Description:
 * @Version: 0.1
 * @Author: Harria
 * @Date: 2022-09-21 18:49:16
 * @LastEditors: Harria
 * @LastEditTime: 2022-10-08 23:27:44
 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		userId: 1,
		balance: 2,
		password: "",
		balance: 0,
		save: 0,
		username: ""
	},
	mutations: {
		recharge(state, newBalance) {
			console.log(newBalance);
			// 变更状�

			Vue.set(state, "balance", newBalance);
			// state.balance = newBalance
		},
	},
});
export default store;
