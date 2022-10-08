<template>
	<view>
		<view class="content">
			<view class="user-information">
				<image src="" mode="" class="profile-img"></image>
				<view class="user-info-change">
					<u-text :text="$store.state.userId"></u-text>
					<u-button
						customStyle="	width: 140rpx;height: 52rpx;font-size: 28rpx;padding: 10rpx 10rpx;border-radius: 40rpx;">
						修改信息
					</u-button>
				</view>
				<view class="send-package">
					<view class="send-package-button">
						<homepagebutton iconname="car" iconcolor="white" buttoncolor="red" size="74rpx" text="去寄快递"
							:customStyle="styleone">
						</homepagebutton>
					</view>
				</view>
			</view>
			<view class="nav-bar">
				<view v-for="item in navbuttontype">
					<homepagebutton :buttoncolor="item.buttoncolor" :iconname="item.iconname"
						:iconcolor="item.iconcolor" @jump="jump(item.url)" :text="item.text" :customStyle="styletwo">
					</homepagebutton>
				</view>
			</view>
			<view class="tools-bar">
				<text style="font: 44rpx bold;margin: 14rpx 36rpx;" class="tools-bar-text">基础功能</text>
				<view class="function-buttons" v-for="item in functionbutton">
					<homepagebutton :buttoncolor="item.buttoncolor" :iconname="item.iconname"
						:iconcolor="item.iconcolor" @jump="jump(item.url)" :text="item.text" :customStyle="styletwo">
					</homepagebutton>

				</view>
			</view>
			<view class="more-func">

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
				styletwo: "width: 106rpx;height:106rpx;border-radius:20px",
				styleone: "width: 106rpx;height:106rpx;border-radius:100%",
				navbuttontype: [{
						iconname: "home",
						text: "首页",
						buttoncolor: "red",
						iconcolor: "white",
						url: "/pages/home/home",
					},
					{
						iconname: "rmb-circle",
						text: "余额",
						buttoncolor: "",
						iconcolor: "",
						url: "/pages/recharge/recharge"
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
						iconname: "order",
						text: "我的订单",
						buttoncolor: "red",
						iconcolor: "white",
						url: "",
					},
					{
						iconname: "map",
						text: "地址管理",
						action: ""
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
			jump(url) {
				console.log("yes")
				uni.navigateTo({
					url: url
				})
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
		background-color: #ff0000;

		.user-information {
			height: 200rpx;
			background-color: #fff;
			display: flex;
			justify-content: left;
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

		}

		.tools-bar {
			height: 426rpx;
			background-color: #fff;
			display: grid;
			grid-template-rows: 88rpx repeat(2, 1fr);
			grid-template-columns: repeat(4, 1fr);
			margin: 16rpx 38rpx;
			border-radius: 40rpx;

			.tools-bar-text {
				grid-area: 1/1/2/5;
				margin: 9rpx 18rpx;
			}
		}

	}

	.more-func {
		height: 764rpx;
		background-color: #fff;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		margin: 16rpx 38rpx;
		border-radius: 40rpx;
	}
</style>
