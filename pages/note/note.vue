<!--
 * @Description: 
 * @Version: 0.1
 * @Author: Harria
 * @Date: 2022-09-22 14:15:11
 * @LastEditors: Harria
 * @LastEditTime: 2022-09-22 17:54:05
-->
<template>
	<view class="content">
		<view class="search"><u-search placeholder="输入运单号查询" v-model="keyword" @search="search" @blur="search"></u-search></view>

		<view class="tab"><u-tabs :lineColor="'#fa4646'" :list="tab" :scrollable="false" @change="changeTab"></u-tabs></view>
		<uni-card v-for="item of list" :key="item.noteId" class="card" :title="'运单号:' + item.noteId" :extra="item.status">
			<view class="main-card">
				<view class="text">
					<text class="main-text">{{ item.fromAddress[0].location }}</text>
					<text class="deputy-text">{{ item.fromAddress[0].toName }}</text>
				</view>
				<u-icon name="arrow-right-double" size="40rpx" color="#f34646"></u-icon>
				<view class="text">
					<text class="main-text">{{ item.toAddress[0].location }}</text>
					<text class="deputy-text">{{ item.toAddress[0].toName }}</text>
				</view>
			</view>
			<!-- 			<view slot="actions" class="card-actions">
				<view class="card-actions-item" @click="actionsClick('分享')">
					<uni-icons type="pengyouquan" size="18" color="#999"></uni-icons>
					<text class="card-actions-item-text">分享</text>
				</view>
				<view class="card-actions-item" @click="actionsClick('点赞')">
					<uni-icons type="heart" size="18" color="#999"></uni-icons>
					<text class="card-actions-item-text">点赞</text>
				</view>
				<view class="card-actions-item" @click="actionsClick('评论')">
					<uni-icons type="chatbubble" size="18" color="#999"></uni-icons>
					<text class="card-actions-item-text">评论</text>
				</view>
			</view>
	 -->
		</uni-card>
	</view>
</template>

<script>
export default {
	data() {
		return {
			keyword: '',
			status: '未揽件',
			list: [],
			tab: [
				{
					name: '未揽件'
				},
				{
					name: '已揽件'
				},
				{
					name: '已签收'
				},
				{
					name: '已取消'
				}
			]
		};
	},
	// mounted() {
	//   this.start();
	// },
	onLoad() {
		this.start();
	},
	methods: {
		async start() {
			this.getNote(this.status);
		},
		async getNote(status) {
			let res = await this.$request.post('/getNote', {
				userId: this.$store.state.userId,
				status: status
			});
			this.list = res.data.data || res.data || [];
			// this.list = await Promise.all(
			//   this.list.map((item) => {
			//     return this.$request.post("/getNote", {
			//       userId: this.$store.state.userId,
			//       status: "未揽件",
			//     });
			//   })
			// );
			console.log('🚀 ~ file: Note.vue ~ line 39 ~ getNote ~ this.list', this.list);
		},
		changeTab(item) {
			// console.log("🚀 ~ file: Note.vue ~ line 112 ~ changeTab ~ item", item);
			this.status = item.name;
			if (this.keyword) {
				this.search();
			} else {
				this.getNote(item.name);
			}
		},
		async search() {
			let res = await this.$request.post('/getNote', {
				userId: this.$store.state.userId,
				status: this.status,
				keyword: this.keyword
			});
			this.list = res.data.data || res.data || [];
		}
	}
};
</script>

<style lang="scss" scoped>
.content {
	width: 100%;
	display: flex;
	width: 100%;
	display: flex;
	justify-content: center;
	direction: vertical;
	flex-direction: column;
	align-items: center;
	.search {
		margin: 20rpx 0 0 0;
		width: 90%;
	}
	.tab {
		width: 90%;
	}
	.card {
		width: 100%;
		.main-card {
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			.text {
				display: flex;
				flex-direction: column;
				align-items: center;
				.main-text {
					margin: 15rpx 0;
					font-size: 40rpx;
					font-weight: bold;
				}
			}
		}
		.card-actions {
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			.card-actions-item {
				font-size: 30rpx;
				padding: 10rpx 0;
			}
		}
	}
}
</style>
