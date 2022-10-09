<template>
	<view class="content">
		<view class="discri">
			<view class="left">
				<span class="iconfont">&#xe736;</span>
				<text>账单明细</text>
			</view>
			<view class="right">
				<datetimepicker />
			</view>
		</view>
		<view class="bill">
			<view class="data">
				<view class="left">
					<p>运费</p>
					<span>2022年10月8日11:22:09</span>
				</view>
				<view class="right">
					<span>¥ -18</span>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	import Datetimepicker from '@/pages/components/datetimepicker.vue';
	export default {
		data() {
			return {
				show: true
			}
		},
		methods: {

		},
		components: {
			Datetimepicker
		}
	}
</script>

<style lang="scss">
	.content {
		width: 100%;
		height: 800px;
		background-color: #ff5b5b;
		display: flex;
		flex-wrap: wrap;

		.discri {
			width: 100%;
			height: 50px;
			border-top: 1px solid #f8f8f8;
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			align-items: baseline;
			background-color: #ff5b5b;
			border-top: 1px solid #f8f8f8;
			margin-top: 40px;
			margin-bottom: 15px;

			.left {
				width: 50%;
				height: 50px;
				color: #fff;
				font-size: 20px;

				.iconfont {
					font-size: 40px;
					margin-right: 10px;
				}
			}

			.right {
				width: 30%;
				height: 50px;
				color: #fff;
				font-size: 20px;
			}
		}

		.bill {
			width: 90%;
			height: 720px;
			background-color: #fff;
			margin: 0 auto;
			border-radius: 20px;

			.data {
				width: 90%;
				height: 60px;
				border-bottom: 1px solid #d9d9d9;
				margin: 0 auto;
				padding: 10px;
				display: flex;
				justify-content: space-between;
				
				.left{
					p{
						font-size: 22px;
					}
					span{
						font-size: 12px;
						color: #d9d9d9;
					}
				}
				
				.right{
					span{
						font-size: 24px;
						color: #ff5b5b;
					}
				}
			}


		}
	}


	@font-face {
		font-family: 'iconfont';
		src: url('@/static/fonts/iconfont.ttf?t=1665225507388') format('truetype');
	}

	.iconfont {
		font-family: "iconfont" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
</style>
