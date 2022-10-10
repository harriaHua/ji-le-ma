<template>
	<view class="body">
		<!-- 手机验证码注册 -->
		<view class="input-form">
			<view class="item">
				<u-icon name="phone" size="24px"></u-icon>
				<view class="">
					<u-input :customStyle="inputStyle" type="number" clearable placeholder="请输入手机号码" v-model="userId">
					</u-input>
				</view>
				<view class="">
					<u-button :customStyle="btnGetCode" text="获取验证码" color="#f34646"></u-button>
				</view>
			</view>
			<view class="item">
				<u-icon name="lock" size="24px"></u-icon>
				<view class="">
					<u-input :customStyle="inputStyle" type="number" clearable placeholder="请输入验证码" v-model="code">
					</u-input>
				</view>
			</view>
			<view class="item">
				<u-icon name="lock" size="24px"></u-icon>
				<view class="">
					<u-input :customStyle="inputStyle" type="password" clearable placeholder="请设置密码" v-model="password">
					</u-input>
				</view>
			</view>
		</view>
		<u-button text="注册" color="#f34646" :customStyle="btnLogin" @click="Register"></u-button>
		<view class="protocol">
			<u-radio-group>
				<u-radio label="同意《用户协议》《隐私条款》" labelSize="10px" iconSize="10px" activeColor="#f34646"
					:customStyle="{marginTop: '8px',justifyContent:'center',marginLeft:'70px'}"></u-radio>
			</u-radio-group>
			<!-- <a href="https://www.uviewui.com" class="a-style">《用户协议》</a>
			<a href="https://www.uviewui.com" class="a-style">《隐私条款》</a> -->
		</view>
	</view>
</template>

<script>
	import request from "@/api/request.js"
	export default {
		data() {
			return {
				// 注册信息
				userId: "",
				code: "",
				password: "",
				// 样式
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
			Register() {
				request.post(
					'/addUser', {
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
							url: '/pages/Login/index'
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
			}
		}
	}
</script>

<style lang="scss">
	.body {
		border: 1px solid rgb(255, 255, 255);

		.input-form {
			// margin-top: 40px;

			.item {
				display: flex;
				align-items: center;
				margin-left: 10px;
				margin-top: 35px;
			}
		}

		.protocol {
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 10px;
			text-align: center;
			margin-top: 15px;
			font-weight: 500;
		}
	}
</style>
