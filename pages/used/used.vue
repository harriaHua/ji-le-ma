<template>
	<view class="content">
		<view class="box">
			<navigator url="../untapped/untapped" hover-class="click">
				<view class="button">未使用</view>
			</navigator>
			<view class="button" hover-class="click">已使用</view>
			<navigator url="../overdue/overdue" hover-class="click">
				<view class="button">已过期</view>
			</navigator>
		</view>
		<view class="box1">
			<view class="text">
				<p>5元优惠券</p>
				<p>2022年9月10日 到期</p>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {};
		},
		onBackPress(event) {
			uni.redirectTo({
				url: "/pages/index/index"
			});
			return true;
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
