<template>
	<view class="content">
		<view class="box">
			<view class="button" hover-class="click">未使用</view>
			<navigator url="../used/used" hover-class="click">
				<view class="button">已使用</view>
			</navigator>
			<navigator url="../overdue/overdue" hover-class="click">
				<view class="button">已过期</view>
			</navigator>
		</view>
		<view class="box1" v-if="list.length>0">
			<view class="coupon" v-for="(item,index) in list">
				<text>{{item.name}}
					{{item.date.substr(0,10)}}&nbsp;&nbsp;到期
				</text>
			</view>
			<view class="button1">
				<navigator url="../send/index" hover-class="click">
					<button size="mini" type="warn">去使用</button>
				</navigator>
			</view>
		</view>
		<view class="box1" v-else>
			<u-empty>
			</u-empty>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				status: '未使用'
			};
		},
		onBackPress(event) {
			uni.redirectTo({
				url: "/pages/home/home"
			});
			return true;
		},
		async onShow() {
			let res = await this.$request.post("/getCoupons", {
				userId: this.$store.state.userId,
				status: this.status,
			});
			this.list = res.data.data;
			console.log(res.data.data);
		},
	}
</script>

<style>
	.box {
		display: flex;
		justify-content: space-between;
	}

	.button {
		height: 20px;
		text-align: center;
	}

	.click {
		opacity: 0.8;
		/* 透明度 */
		transform: scale(0.8, 0.8);
		/* 缩放效果 */
	}

	.box1 {
		border-width: 2px 0 2px 0;
		/* 上右下左 */
		border-style: solid;
		/* 边框实线 */
		border-color: darkgray;
		margin-top: 15px;
		display: flex;
		justify-content: space-around;
	}

	.button1 {
		margin-top: 5px;
	}

</style>