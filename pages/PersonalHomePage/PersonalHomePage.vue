<template>
	<view>
		<view class="content">
			<view class="user-information">
				<image src="" mode="" class="profile-img"></image>
				<view class="user-info-change">
					<u-text :text="$store.state.userId"></u-text>
					<u-button
						customStyle="width: 140rpx;height: 52rpx;font-size: 28rpx;padding: 10rpx 10rpx;border-radius: 40rpx;">
						修改信息
					</u-button>
				</view>
				<view class="send-package">
					<view class="send-package-button">
						<homepagebutton iconname="car" iconcolor="white" buttoncolor="red" size="74rpx" text="去寄快递"
							:customStyle="customstyle.styleone">
						</homepagebutton>
					</view>
				</view>
			</view>
			<view class="nav-bar">
				<homepagebutton :buttoncolor="homebutton.buttoncolor" :iconname="homebutton.iconname"
					:iconcolor="homebutton.iconcolor" @jump="jump(homebutton.url,homebutton.way)"
					:text="homebutton.text" :customStyle="customstyle.styletwo">
				</homepagebutton>
				<view v-for="item in navbuttontype">
					<homepagebutton :buttoncolor="item.buttoncolor" :iconname="item.iconname"
						:iconcolor="item.iconcolor" @jump="jump(item.url,item.way)" :text="item.text"
						:customStyle="customstyle.styletwo">
					</homepagebutton>
				</view>
			</view>
			<view class="tools-bar">
				<view class="tools-bar-text">
					<u--text size="44rpx" bold text="基础功能">
					</u--text>
				</view>
				<view class="function-buttons" v-for="item in functionbutton">
					<homepagebutton :buttoncolor="item.buttoncolor" :iconname="item.iconname"
						:iconcolor="item.iconcolor" @jump="jump(item.url,item.way)" :text="item.text"
						:customStyle="customstyle.styletwo">
					</homepagebutton>

				</view>
			</view>
			<view class="more-func">
				<view class="more-func-text">
					<u--text size="44rpx" bold text="其他功能"></u--text>
				</view>
				<view class="swiper">
					<u-swiper :list="swiperList" autoplay="true" indicator circular="true" radius="40rpx"></u-swiper>
				</view>
				<view class="more-func-button">
					<view v-for="item in customstyle.stylethree">
						<u-button :customStyle="item.style" :text="item.text"></u-button>
					</view>
				</view>
			</view>
		</view>
	</view>
	</view>
</template>

<script>
	import homepagebutton from "../components/homepagebutton.vue"
	export default {
		data() {
			return {
				swiperList: [
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
				],
				customstyle: {
					"styletwo": "width: 106rpx;height:106rpx;border-radius:20px",
					"styleone": "width: 106rpx;height:106rpx;border-radius:100%",
					"stylethree": [{
							style: "color:white;width:100%;height:100%;border-radius:20px;background:url('../../static/buttonbg/food.jpg');-moz-background-size: 100% 100%;background-size: 100% 100%;",
							text: "餐饮美食"
						},
						{
							style: "color:white;width:100%;height:100%;border-radius:20px;background:url('../../static/buttonbg/hotel.jpg');-moz-background-size: 100% 100%;background-size: 100% 100%;",
							text: "积分兑换"
						},
						{
							style: "color:white;width:100%;height:100%;border-radius:20px;background:url('../../static/buttonbg/enterta.jpg');-moz-background-size: 100% 100%;background-size: 100% 100%;",
							text: "影音娱乐"
						},
						{
							style: "color:white;width:100%;height:100%;border-radius:20px;background:url('../../static/buttonbg/makeup.jpg');-moz-background-size: 100% 100%;background-size: 100% 100%;",
							text: "美妆优选"
						},
					]
				},

				homebutton: {
					iconname: "home",
					text: "首页",
					buttoncolor: "red",
					iconcolor: "white",
					url: "/pages/home/home",
					way: "relaunch"
				},
				navbuttontype: [{
						iconname: "rmb-circle",
						text: "余额",
						buttoncolor: "",
						iconcolor: "",
						url: "/pages/recharge/recharge",
						way: ""
					},
					{
						iconname: "star",
						text: "收藏",
					},
					{
						iconname: "email",
						text: "消息",
					}
				],
				functionbutton: [{
						iconname: "file-text",
						text: "我的订单",
						buttoncolor: "red",
						iconcolor: "white",
						url: "/pages/note/note",
						way: ""
					},
					{
						iconname: "map",
						text: "地址管理",
						url: "/pages/address/address",
					},
					{
						iconname: "scan",
						text: "扫码取件",
					},
					{
						iconname: "shopping-cart",
						text: "我的购物车",
					},
					{
						iconname: "order",
						text: "账单查询",
					},
					{
						iconname: "bookmark",
						text: "限时优惠",
					},
					{
						iconname: "coupon",
						text: "我的优惠券",
						url: "/pages/untapped/untapped"
					},
					{
						iconname: "account",
						text: "切换账号",
					},
				]
			}
		},
		components: {
			homepagebutton
		},
		methods: {
			jump(url, way) {
				if (way === "relaunch") {
					console.log("yes")
					uni.reLaunch({
						url: url
					})
				} else {
					console.log("no")
					uni.navigateTo({
						url: url
					})
				}
			}
		},
	}
</script>

<style lang="scss" scoped>
	* {
		box-sizing: border-box;
	}

	.content {
		display: flex;
		flex-direction: column;
		background-image: url("../../static/homepagebgimage/rect286.png");

		.user-information {
			height: 200rpx;
			background-color: #fff;
			display: flex;
			justify-content: left;
			box-shadow: -1rpx 0rpx 8rpx 2rpx #d8d8d8;
			margin: 16rpx 38rpx;
			border-radius: 40rpx;

			.profile-img {
				height: 140rpx;
				width: 140rpx;
				border: 2rpx solid #000;
				margin: 22rpx 22rpx;
				border-radius: 50%;
			}

			.user-info-change {
				height: 140rpx;
				width: 140rpx;
				margin: 20rpx 42rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				.user-name {
					display: block;
					width: 180rpx;
					height: 60rpx;
					font: 36rpx bold;
					overflow: hidden;
					text-overflow: ellipsis;
				}
			}

			.send-package {
				display: flex;
				flex-direction: column;
				flex-grow: 1;

				.send-package-button {
					margin: 18rpx 42rpx;
					align-self: flex-end;
				}
			}
		}

		.nav-bar {
			height: 200rpx;
			background-color: #fff;
			display: flex;
			justify-content: space-around;
			margin: 16rpx 38rpx;
			border-radius: 40rpx;
			align-items: center;
			box-shadow: -1rpx 0rpx 8rpx 2rpx #d8d8d8;
		}

		.tools-bar {
			height: 426rpx;
			background-color: #fff;
			display: grid;
			grid-template-rows: 88rpx repeat(2, 1fr);
			grid-template-columns: repeat(4, 1fr);
			margin: 16rpx 38rpx;
			border-radius: 40rpx;
			box-shadow: -1rpx 0rpx 8rpx 2rpx #d8d8d8;

			.tools-bar-text {
				grid-area: 1/1/2/5;
				margin: 14rpx 36rpx;
			}
		}

	}

	.more-func {
		height: 800rpx;
		background-color: #fff;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 77rpx repeat(3, 1fr);
		margin: 16rpx 38rpx;
		border-radius: 40rpx;
		box-shadow: -1rpx 0rpx 8rpx 2rpx #d8d8d8;

		.more-func-text {
			margin: 14rpx 36rpx;
			grid-area: 1/1/2/4;
		}

		.swiper {
			margin: 14rpx 36rpx;
			grid-area: 2/1/3/4;
		}

		.more-func-button {
			height: 420rpx;
			margin: 14rpx 36rpx;
			display: grid;
			grid-template-areas: "a b"
				"c d";
			grid-gap: 18rpx;
		}
	}
</style>
