<template>
	<view class="home">
		<!-- 内容 -->
		<view class="content">
			<view class="content-left">
				<view class="titleView" style="margin-left: 60rpx;margin-top: 15rpx;"><text class="title" decode>钱包余额</text></view>
				<view class="titleView" style="display: flex;">
					<span class="num">{{ formatCurRecharge }}</span>
				</view>
			</view>
			<view class="content-right"><image src="../../static/images/1.png" style="width: 200rpx;height: 200rpx;"></image></view>
		</view>

		<p class="tips">
			<span>请选择金额 :</span>
			<input type="number" v-model="selectRecharge" ref="input" />
		</p>

		<!-- 充值框 -->
		<div class="recharge-grid">
			<div class="grid-item" v-for="(item, index) in rechargeList" :key="index" @click="handleRecharge(item)">
				<div v-if="item.money">
					<span>{{ item.money }}</span>
					<span>元</span>
				</div>
				<div v-else @click="handleRecharge(item)">{{ item.btn }}</div>
			</div>
		</div>

		<!-- 充值按钮 -->
		<button class="recharge-btn" @click="handleRechargeBtn">充值</button>

		<!-- 弹窗 -->
		<div class="dialog" v-if="dialogOptions.visible">
			<p>{{ dialogOptions.content }}</p>
			<button @click="handleDialogBack">返回</button>
		</div>
	</view>
</template>

<script>
export default {
	data() {
		return {
			rechargeList: [{ money: 10 }, { money: 20 }, { money: 50 }, { money: 100 }, { money: 200 }, { btn: '自定义' }],
			curRecharge: this.$store.state.balance,
			selectRecharge: 0,
			dialogOptions: {
				visible: false,
				content: '充值成功'
			}
		};
	},
	computed: {
		formatCurRecharge() {
			return Number(this.curRecharge).toFixed(2);
		}
	},
	methods: {
		handleRecharge(item) {
			if (item.money) {
				this.selectRecharge = item.money;
			} else {
				let input = this.$refs.input;
				input.focus();
				input.value = '';
				input.placeholder = '请输入自定义充值金额';
				this.selectRecharge = Number(input.value);
			}
		},
		async handleRechargeBtn() {
			if (this.selectRecharge !== 0) {
				// this.curRecharge += Number(this.selectRecharge);
				// 调用充值接口
				let res = await this.$request.post('/recharge', {
					userId: this.$store.state.userId,
					amount: this.selectRecharge
				});
				// 更新vuex状态
				this.$store.commit('recharge', res.data.data.balance);
				// 更新视图
				this.curRecharge = this.$store.state.balance;
				// 弹窗
				this.dialogOptions = {
					visible: true,
					content: '充值成功'
				};
			} else {
				this.dialogOptions = {
					visible: true,
					content: '请输入正确的充值金额'
				};
			}
		},
		handleDialogBack() {
			this.dialogOptions.visible = false;
		}
	}
};
</script>

<style lang="scss">
.home {
	width: 100%;
	height: 100vh;
	position: relative;

	.content {
		display: flex;
		justify-content: space-between;
		background-color: #fa4646;
		width: 100%;
		height: 230rpx;
		margin-bottom: 30rpx;
		border-radius: 50rpx;
		.title {
			line-height: 100rpx;
			font-size: 40rpx;
			color: white;
		}
		.num {
			color: white;
			font-size: 40rpx;
			line-height: 20rpx;
			padding-left: 80rpx;
			padding-top: 20rpx;
		}
	}

	.tips {
		padding: 0 20px;
		margin-top: 20px;
		box-sizing: border-box;

		input {
			outline: none;
			border: none;
			margin-left: 25px;
		}
	}

	.recharge-grid {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		padding: 0 20px;
		box-sizing: border-box;
		margin-top: 20px;

		.grid-item {
			width: 30%;
			height: 60px;
			display: flex;
			justify-content: center;
			align-items: center;
			border: 1px solid #ccc;
			margin-bottom: 20px;
		}
	}

	.recharge-btn {
		background: #fa4646;
		padding: 10px 40px;
		box-sizing: border-box;
		outline: none;
		border: none;
		color: #fff;
		position: absolute;
		bottom: 15%;
		left: 50%;
		transform: translateX(-50%);
	}

	.dialog {
		width: 80%;
		height: 150px;
		background: #fa4646;
		border-radius: 10px;
		position: absolute;
		bottom: 15%;
		left: 50%;
		transform: translateX(-50%);

		p {
			font-size: 24px;
			color: #fff;
			margin-bottom: 30px;
			display: flex;
			justify-content: center;
			margin-top: 40px;
		}

		button {
			background: #a8abb0;
			color: #ffffff;
			outline: none;
			border: none;
			padding: 5px 10px;
			display: flex;
			justify-content: center;
			margin: 0 auto;
			border-radius: 2px;
		}
	}
}
</style>
