<!--
 * @Description: 
 * @Version: 0.1
 * @Author: Harria
 * @Date: 2022-09-20 22:58:09
 * @LastEditors: Harria
 * @LastEditTime: 2022-09-22 16:51:16
-->
<template>
	<Login />
</template>

<script>
	import Login from "@/pages/Login/index.vue"
	export default {
		data() {
			return {
				title: 'Hello'
			};
		},
		onLoad() {},
		methods: {
			go() {
				uni.navigateTo({
					url: '/pages/home/home'
				});
			}
		},
		components: {
			Login,
		},
	};
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
