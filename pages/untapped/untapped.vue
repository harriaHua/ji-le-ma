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
		<view class="box1">
			<view class="text">
				<p>3元优惠券</p>
				<p>2022年10月4日 到期</p>
			</view>
			<view class="button1">
				<button size="mini" type="warn">去使用</button>
			</view>
		</view>
		<view class="box2">
			<view class="text">
				<p>4元优惠券</p>
				<p>2022年10月5日 到期</p>
			</view>
			<view class="button2">
				<button size="mini" type="warn">去使用</button>
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

	.box2 {
		border-width: 2px 0 2px 0;
		border-style: solid;
		border-color: darkgray;
		margin-top: 15px;
		display: flex;
		justify-content: space-around;
	}

	.button2 {
		margin-top: 5px;
	}
</style>
