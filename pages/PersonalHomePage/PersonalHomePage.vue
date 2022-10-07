<template>
	<view>
		<view class="content">
			<view class="user-information">
				<image src="" mode="" class="profile-img"></image>
				<view class="user-info-change">
					<text class="user-name">testusername</text>
					<u-button @click="changeInfo" class="change-button">
						修改信息
					</u-button>
				</view>
				<view class="send-package">
					<u-button class="send-package-button" shape="circle" @click="SendPackage">
						<u-icon name="car" color="white" size="37"></u-icon>
					</u-button>
					<text class="send-package-text">去寄快递</text>
				</view>
			</view>
			<view class="nav-bar">
				<view class="nav-buttons">
					<u-button class="nav-button-style" color="red" @click="toHomePage">
						<u-icon name="home" size="31" color="white"></u-icon>
					</u-button>
					<text style="font-size: 12px;">首页</text>
				</view>
				<view class="nav-buttons" v-for="item in buttontype">
					<u-button class="nav-button-style">
						<u-icon :name="item.iconname" size="31" color="black"></u-icon>
					</u-button>
					<text style="font-size: 12px;">{{item.text}}</text>
				</view>
			</view>
			<view class="tools-bar">
				<text style="font: 22px bold;margin: 7px 18px;">基础功能</text>
				<view class=" function-hover-one">
					<view class="function-buttons">
						<u-button class="function-button-style" color="red" @click="toNote">
							<u-icon name="file-text" size="31" color="white"></u-icon>
						</u-button>
						<text style="font-size: 12px;">我的订单</text>
					</view>
					<view class="function-buttons" v-for="item in functionbuttonLineOne">
						<u-button class="function-button-style" @click="item.action">
							<u-icon :name="item.iconname" size="31"></u-icon>
						</u-button>
						<text style="font-size: 12px;">{{item.text}}</text>
					</view>
				</view>
				<view class="function-hover-two">
					<view class="function-buttons" v-for="item in functionbuttonLineTwo">
						<u-button class="function-button-style">
							<u-icon :name="item.iconname" size="31"></u-icon>
						</u-button>
						<text style="font-size: 12px;">{{item.text}}</text>
					</view>
				</view>
			</view>
			<view class="more-func">

			</view>
		</view>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				buttontype: [{
						iconname: "rmb-circle",
						text: "余额",
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
				functionbuttonLineOne: [{
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
				],
				functionbuttonLineTwo: [{
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
					},
					{
						iconname: "account",
						text: "切换账号",
					},
				]
			}
		},
		methods: {
			changeInfo() {
				uni.navigateTo({
					url: '/pages/ChangeInfo/ChangeInfo'
				})
			},
			toHomePage() {
				uni.redirectTo({
					url: '/pages/home/home'
				})
			},
			toNote() {
				uni.navigateTo({
					url: '/pages/note/note'
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
			height: 100px;
			background-color: #fff;
			display: flex;
			justify-content: left;
			margin: 8px 19px;
			border-radius: 20px;

			.profile-img {
				height: 70px;
				width: 70px;
				border: 1px solid #000;
				margin: 11px 11px;
				border-radius: 50%;
			}

			.user-info-change {
				height: 70px;
				width: 70px;
				margin: 10px 21px;
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				.user-name {
					display: block;
					width: 90px;
					height: 30px;
					font: 18px bold;
					overflow: hidden;
					text-overflow: ellipsis;
				}

				.change-button {
					width: 70px;
					height: 26px;
					font-size: 14px;
					padding: 5px 5px;
					border-radius: 20px;
				}
			}

			.send-package {
				display: flex;
				flex-direction: column;
				flex-grow: 1;

				.send-package-button {
					width: 53px;
					height: 53px;
					margin: 9px 21px;
					align-self: flex-end;
					background-color: red;
				}

				.send-package-text {
					align-self: flex-end;
					width: 49px;
					height: 18px;
					margin-right: 23px;
					font-size: 12px;
				}
			}
		}

		.nav-bar {
			height: 100px;
			background-color: #fff;
			display: flex;
			justify-content: space-around;
			margin: 8px 19px;
			border-radius: 20px;
			align-items: center;

			.nav-buttons {
				display: flex;
				flex-direction: column;
				align-items: center;

				.nav-button-style {
					width: 53px;
					height: 53px;
					border-radius: 20px;
				}
			}

		}

		.tools-bar {
			height: 213px;
			background-color: #fff;
			display: flex;
			flex-direction: column;
			flex-wrap: wrap;
			margin: 8px 19px;
			border-radius: 20px;

			.function-hover-one {
				margin-top: 8px;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-around;

				.function-buttons {
					display: flex;
					flex-direction: column;
					align-items: center;

					.function-button-style {
						width: 53px;
						height: 53px;
						border-radius: 20px;
					}
				}
			}

			.function-hover-two {
				margin-top: 8px;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-around;

				.function-buttons {
					display: flex;
					flex-direction: column;
					align-items: center;

					.function-button-style {
						width: 53px;
						height: 53px;
						border-radius: 20px;
					}
				}
			}

		}

		.more-func {
			height: 382px;
			background-color: #fff;
			display: flex;
			flex-direction: column;
			flex-wrap: wrap;
			margin: 8px 19px;
			border-radius: 20px;
		}
	}
</style>
