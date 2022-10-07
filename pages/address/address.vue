<template>
	<view class="main">
		<!-- 搜索栏部分 -->
		<view class="search">
			<u-search placeholder="搜索姓名,电话" :showAction="false" shape="round" height="30px" v-model="keyword"
				@search="match">
			</u-search>
		</view>

		<!-- 中间信息显示部分 -->
		<!-- 如果有数据 则遍历显示 -->
		<view class="show" v-if="data.length>0">
			<view class="show-item" v-for="(item,index) in data">
				<view class="show-item-message" @click="sendaddr(index)">
					<!-- 圆点 -->
					<view class="firstn">{{item.name[0]}}</view>

					<text>{{item.name}}&nbsp;&nbsp;{{item.number.substr(0,3)}}&nbsp;{{item.number.substr(4,4)}}&nbsp;{{item.number.substr(-4)}}

						{{item.area}}{{item.address}}</text>
					<!-- 数据显示 -->
					<view class="iconfont" @click.stop="sendinfo(index)">&#xe66e;</view>
					<!-- 编辑按钮 -->
				</view>
				<button size="mini" @click="showmodal(index)">删除</button>

				<!-- 删除确认弹窗 -->
				<u-modal content="是否删除此地址" :show="show" showCancelButton closeOnClickOverlay @confirm="confirm"
					@cancel="cancel" @close="close"></u-modal>

			</view>
		</view>
		<!-- 没有数据 显示空 -->
		<view class="show" v-else>
			<u-empty mode="address">
			</u-empty>
		</view>

		<!-- 底部 -->
		<view class="bottom">
			<u-button color="#c85d53" @click="gonew()">新建地址</u-button>
		</view>
	</view>
</template>

<script>
	import data from "@/src/data.js";
	export default {
		data() {
			return {
				data,
				keyword: '',
				show: false, //判断弹窗是否要出现
				id: '',
				list:[]
			}
		},
		created() {
			this.list=this.data
		},
		onBackPress(event){
		            uni.redirectTo({
		                url:'../home/home'
		            });
		           return true;
		},
		methods: {

			showmodal(index) {
				this.id = index
				this.show = true;
			},
			confirm() {
				this.data.splice(this.id, 1); //确认删除
				this.show = false
				console.log('confirm');
			},
			cancel() {
				this.show = false
				console.log('cancel');
			},
			close() {
				this.show = false
				console.log('close');
			},


			gonew() { //切换至 新建信息 页面
				uni.navigateTo({
					url: '/pages/newaddr/newaddr'
				})
			},
			sendinfo(index) {
				uni.navigateTo({
					url: '/pages/editaddr/editaddr?id=' + index //跳转并传参
				})
			},
			sendaddr(index) {
				uni.navigateTo({
					url: '/pages/send/index?id=' + index //跳转并传参给寄快递页面
				})
			},

			match() {
				// console.log(this.keyword)
				this.data=this.list.filter(item=>{
					return item.name.includes(this.keyword)
					||item.number.includes(this.keyword)
					||item.area.includes(this.keyword)
					||item.address.includes(this.keyword)
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import url("@/static/font/iconfont.css");

	.main {
		margin: 0;
		padding: 0;
		min-width: 320px;
		max-width: 1200px;
	}

	.search {
		width: 100%;
		height: 40px;
		padding-top: 7px;
		background-color: #c85d53;
	}

	/* 中间地址 */
	.show {
		display: flex;
		flex-direction: column;
		height: 1200px;
		width: 100%;
	}

	.show-item {
		width: 100%;
		margin-bottom: 5px;
		display: flex;
		flex-direction: column;
	}

	.show-item-message {
		position: relative;
		width: 100%;
		height: 100px;
		border: 1px solid #BBBBBB;
	}

	.show-item-message .firstn {
		position: absolute;
		margin-top: 10px;
		margin-left: 10px;
		width: 25px;
		height: 25px;
		border-radius: 50%;
		text-align: center;
		background-color: #c85d53;
		color: white;
	}

	.show-item-message text {
		position: absolute;
		margin-top: 10px;
		margin-left: 60px;
	}

	.show-item-message .iconfont {
		position: absolute;
		margin-top: 50px;
		right: 10px;
		font-size: 25px;
	}

	.show-item button {
		margin-right: 0;
		background-color: #c85d53;
		color: white;
	}

	/* 底部按钮 */
	.bottom {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 34px;
		background-color: #fff;
	}
</style>
