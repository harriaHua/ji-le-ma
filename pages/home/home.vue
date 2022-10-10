<!--
 * @Description: 
 * @Version: 0.1
 * @Author: Harria
 * @Date: 2022-09-20 22:58:09
 * @LastEditors: Harria
 * @LastEditTime: 2022-09-22 17:45:36
-->
<template>
	<view class="content">
		<view class="notice-bar"><u-notice-bar :text="notice"></u-notice-bar></view>

		<view class="statistics">
			<u-grid :border="false" @click="click" :col="4">
				<u-grid-item v-for="(baseListItem, baseListIndex) in baseList" :key="baseListIndex">
					<text class="amount-text">{{ baseListItem.name }}</text>
					<text class="grid-text">{{ baseListItem.title }}</text>
				</u-grid-item>
			</u-grid>
			<u-toast ref="uToast" />
		</view>
		<view class="swiper-content"><u-swiper class="swiper" :list="swiper" :indicator="true"></u-swiper></view>

		<view class="red-packet" @click="navigate('/pages/untapped/untapped')">
			<u-icon name="red-packet-fill" size="150rpx" color="#f34646"></u-icon>
			<view class="red-packet-text">
				<u--text size="40rpx" color="#fa4646" text="我国宪法是国家的根本法"></u--text>
				<u--text size="30rpx" color="#556484" text="是治国安邦的总章程"></u--text>
			</view>
		</view>

		<view class="menu">
			<u-grid :border="true" :col="2">
				<u-grid-item v-for="(menuListItem, menuListIndex) in menuList" :key="menuListIndex" @click="clickMenu">
					<view class="menu-item">
						<u-icon :name="menuListItem.name" :size="50" color="#f34646"></u-icon>
						<view class="menu-text">
							<u--text :text="menuListItem.mainTitle" size="35rpx" color="#fa4646" :bold="true"></u--text>
							<u--text size="30rpx" color="#556484" :text="menuListItem.deputyTitle"></u--text>
						</view>
					</view>
				</u-grid-item>
			</u-grid>
		</view>
		<Tabber></Tabber>
	</view>
</template>

<script>
import Tabber from '../components/tabber.vue';
export default {
	components: {
		Tabber
	},
	data() {
		return {
			notice: '法律执行是法律实现的重要环节,原则是合法性、合理性、信赖保护和效率',
			baseList: [
				{
					name: this.$store.state.balance,
					title: '余额'
				},
				{
					name: '33',
					title: '本月运单数'
				},
				{
					name: '22',
					title: '运单总数'
				},
				{
					name: '2',
					title: '累计节省'
				}
			],
			menuList: [
				{
					name: 'car',
					mainTitle: '寄快递',
					deputyTitle: '低至5折',
					url: '/pages/send/index'
				},
				{
					name: 'order',
					mainTitle: '快递单',
					deputyTitle: '运单列表',
					url: '/pages/note/note'
				},
				{
					name: 'map',
					mainTitle: '地址',
					deputyTitle: '地址管理',
					url: '/pages/address/address'
				},
				{
					name: 'rmb',
					mainTitle: '费用',
					deputyTitle: '快递费用',
					url: '/pages/bill/bill'
				}
			],
			swiper: ['https://cdn.uviewui.com/uview/swiper/swiper1.png', 'https://cdn.uviewui.com/uview/swiper/swiper2.png', 'https://cdn.uviewui.com/uview/swiper/swiper3.png']
		};
	},
	onLoad() {},
	mounted() {
		// this.getServerData();
		this.start();
	},
	methods: {
		async start() {
			// let res = await this.$request.post('/login', {
			// 	userId: 1,
			// 	password: 2
			// });
			// res = res.data.data;
			// for (let s in res) {
			// 	this.$store.state[s] = res[s];
			// }
			// this.baseList[0].name = this.$store.state.balance;
			// console.log(this.$store.state);
			// this.$store.state.balance=;
		},
		clickMenu(index) {
			console.log(this.menuList[index].url);
			uni.navigateTo({
				url: this.menuList[index].url
			});
		},
		navigate(u) {
			uni.navigateTo({
				url: u
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	.notice-bar {
		width: 100%;
		padding-bottom: 15rpx;
	}

	.statistics {
		width: 100%;

		.amount-text {
			font-size: 40rpx;
			color: #556484;
		}

		.grid-text {
			font-size: 25rpx;
			color: #a7abb3;
			padding: 10rpx 0 30rpx 0rpx;
			/* #ifndef APP-PLUS */
			box-sizing: border-box;
			/* #endif */
		}
	}

	.red-packet {
		width: 85%;
		background-color: #ffe2e2;
		margin: 0 10rpx;
		padding: 10rpx 5rpx;
		margin-bottom: 30rpx;
		border-radius: 20rpx;
		display: flex;

		.red-packet-text {
			display: flex;
			flex-direction: column;
		}
	}

	.menu {
		width: 85%;
		border-radius: 20rpx;
		box-shadow: 5rpx 5rpx 10rpx #dde3e9;
		margin-bottom: 30rpx;

		.menu-item {
			display: flex;
			flex-direction: row;
			height: 250rpx;
			align-items: center;

			.menu-text {
				display: flex;
				height: 50px;
				padding-left: 20rpx;
				flex-direction: column;
			}
		}
	}

	.swiper-content {
		width: 87%;
		margin-bottom: 30rpx;

		.swiper {
			width: 100%;
		}
	}
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
