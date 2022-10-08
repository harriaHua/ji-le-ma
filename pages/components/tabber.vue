<!--
 * @Description: 
 * @Version: 0.1
 * @Author: Harria
 * @Date: 2022-09-22 14:23:35
 * @LastEditors: Harria
 * @LastEditTime: 2022-09-22 21:29:28
-->
<template>
	<view>
		<u-tabbar :value="tabber" @change="changeTabber" :placeholder="true" :fixed="true" :activeColor="'#fa4646'">
			<u-tabbar-item v-for="item in tabberList" :key="item.icon" :text="item.text" :icon="item.icon"
				:name="item.name">
			</u-tabbar-item>
		</u-tabbar>
	</view>
</template>

<script>
	import store from "@/store/index.js"
	export default {
		data() {
			name: "tabber";
			return {
				tabber: "",
				tabberList: [{
						text: "快递",
						name: "index",
						icon: "home",
					},
					{
						text: "我的",
						name: store.state.token ? "mine" : "login",
						icon: "account",
					},
				],
			};
		},
		methods: {
			changeTabber(name) {
				// this.tabber = name
				uni.redirectTo({
					url: `../${name}/${name}` || `../${name}/index`,
				});
			},
		},
	};
</script>

<style lang="scss" scoped></style>
