<template>
	<view class="body">
		<u-grid align="center" @click="changeWay">
			<u-grid-item v-for="(item,index) in way" :key="index"><text class="grid-text"
					:class="{'active':item.isActive}">{{item.name}}</text>
			</u-grid-item>
		</u-grid>
		<!-- 手机验证码登录 -->
		<view v-if="loginWay=='phone'">
			<view class="item">
				<u-icon name="phone" size="24px"></u-icon>
				<view class="">
					<u-input :customStyle="inputStyle" type="number" clearable placeholder="请输入手机号码"></u-input>
				</view>
				<view class="">
					<u-button :customStyle="btnGetCode" text="获取验证码" color="#f34646"></u-button>
				</view>
			</view>
			<view class="item">
				<u-icon name="lock" size="24px"></u-icon>
				<view class="">
					<u-input :customStyle="inputStyle" type="number" clearable placeholder="请输入验证码">
					</u-input>
				</view>
			</view>
		</view>
		<!-- 账号密码登录 -->
		<view v-if="loginWay=='pass'">
			<view class="item">
				<u-icon name="phone" size="24px"></u-icon>
				<view class="">
					<u-input :customStyle="inputStyle" type="number" clearable placeholder="请输入账号" v-model="userId">
					</u-input>
				</view>
			</view>
			<view class="item">
				<u-icon name="lock" size="24px"></u-icon>
				<view class="">
					<u-input :customStyle="inputStyle" type="password" clearable placeholder="请输入密码" v-model="password">
					</u-input>
				</view>
			</view>
		</view>

		<u-button text="登录" color="#f34646" :customStyle="btnLogin" @click="Login"></u-button>
		<view class="bottom">
			<view class="bottom-pro">
				<view>
					<u--text text="注册新用户" color="#f34646" align="center" margin="10px 0 0" size="0.6em"
						style="z-index:99" @click="goRegister">注册新用户
					</u--text>
				</view>
				<view class="protocol">
					注册登录代表您已同意
					<a href="https://www.uviewui.com" class="a-style">《用户协议》</a>
					<a href="https://www.uviewui.com" class="a-style">《隐私条款》</a>
				</view>
			</view>
			<view class="bottom-other">
				<u-text text="--------------使用合作账号登录--------------" size="0.6em" margin="20px 0 0" align="center">
				</u-text>
				<view class="other-icon">
					<u-icon name="qq-fill" color="rgb(0,168,243)" size="20px"></u-icon>
					<u-icon name="weixin-fill" color="rgb(25,213,108)" size="20px"></u-icon>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import request from "@/api/request.js"
	export default {
		data() {
			return {
				// 账号密码
				userId: "",
				password: "",
				// 登录方式
				way: [{
					name: "手机快速登录",
					isActive: true
				}, {
					name: "账号密码登录",
					isActive: false
				}],
				loginWay: "phone",
				// button自定义样式
				btnGetCode: {
					borderRadius: '4px',
					height: '5vh',
					width: '23vw',
					padding: '0 2vh',
					fontSize: '0.1em',
					float: 'left'
				},
				inputStyle: {
					fontSize: '0.7em',
					width: '55vw',
					height: '4vh',
					border: 'none'
				},
				btnLogin: {
					marginTop: '80px',
					width: '60vw',
					fontWeight: 'bold'
				}
			}
		},
		methods: {
			// 修改登录方式
			changeWay(e) {
				const other = e == 1 ? 0 : 1
				this.way[e].isActive = true;
				this.way[other].isActive = false;
				this.loginWay = e == 1 ? "pass" : "phone";
			},
			Login() {
				request.post(
					'/login', {
						userId: this.userId,
						password: this.password
					},
				).then(result => {
					if (result.data.code == 200) {
						for (let item in result.data.messages) {
							// console.log(item);
							this.$store.state[item] = result.data.message[item]
						}
						// console.log(this.$store.state);
						let timer = setTimeout(() => {
							uni.showToast({
								title: result.data.message,
								duration: 1000
							});
						}, 0)
						uni.navigateTo({
							url: '/pages/home/home'
						});
					}
					if (result.data.code == 401) {
						let timer = setTimeout(() => {
							uni.showToast({
								title: result.data.message,
								duration: 1000
							});
						}, 0)
					}
				})
			},
			goRegister() {
				uni.navigateTo({
					url: '/pages/Register/index'
				});
			}
		},
		// onReady() {
		// 	//如果需要兼容微信小程序，并且校验规则中含有方法等，只能通过setRules方法设置规则。
		// 	this.$refs.form.setRules(this.rules)
		// },
		options: {
			styleIsolation: 'shared'
		}
	}
</script>

<style lang="scss">
	.body {
		border: 1px solid rgb(255, 255, 255);

		.item {
			display: flex;
			align-items: center;
			margin-left: 10px;
			margin-top: 15px;
		}

		.bottom {

			.bottom-pro {
				.protocol {
					// display: flex;
					// justify-content: center;
					// align-items: center;
					font-size: 10px;
					text-align: center;
					margin-top: 15px;
					font-weight: 500;

					.a-style {
						font-size: 10px;
						display: inline-block;
						color: #c93939;
					}
				}
			}

			.bottom-other {
				.other-icon {
					display: flex;
					justify-content: center;
					margin-top: 10px;
				}
			}
		}
	}


	.u-grid.data-v-121efd29 {
		margin-top: 3%;
	}

	.grid-text {
		font-size: 15px;
		font-weight: bold;
		color: #909399;
		padding: 10rpx 0 20rpx 0rpx;
		/* #ifndef APP-PLUS */
		box-sizing: content-box;
		/* #endif */
	}

	.active {
		color: #1e1e1e;
		border-bottom: 1px solid #dbe0e8;
	}
</style>
