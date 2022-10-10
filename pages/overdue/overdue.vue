<template>
	<view class="content">
		<view class="box">
			<navigator url="../untapped/untapped" hover-class="click">
				<view class="button">未使用</view>
			</navigator>
			<navigator url="../used/used" hover-class="click">
				<view class="button">已使用</view>
			</navigator>
			<view class="button" hover-class="click">已过期</view>
		</view>
		<view class="box1" v-if="list.length>0">
			<view class="coupon" v-for="(item,index) in list">
				<text>{{item.name}}
					{{item.date.substr(0,10)}}&nbsp;&nbsp;到期
				</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				status: '已过期'
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
		border-style: solid;
		border-color: darkgray;
		background-color: gainsboro;
		margin-top: 15px;
		padding-left: 7%;
		display: flex;
		justify-content: start;
	}
</style>
