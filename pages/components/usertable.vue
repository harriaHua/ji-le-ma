<template>
	<view class="content">
		<view class="user">
			<text>姓名:</text>
			<input type="text" v-model="userinfo.name" placeholder="收货人姓名">
		</view>
		<view class="user">
			<text>电话:</text>
			<input type="number" v-model="userinfo.number" placeholder="收货人手机号">
		</view>
		<view class="user">
			<text>地区:</text>
			<input type="text" v-model="userinfo.area" @click="showPicker" placeholder="省/市/区">
			<!-- 选择器 -->
			<chooser :show="show" @cancel="cancel" @confirm="confirm"></chooser>
		</view>
		<view class="user">
			<text>详细地址:</text>
			<input type="text" v-model="userinfo.address" placeholder="街道门牌,楼层房间号">
		</view>
		<view class="user">
			<text>邮政编码:</text>
			<input type="number" v-model="userinfo.code" placeholder="邮政编码">
		</view>
		<view class="bottom">
			<button @click="submit(userinfo)">保存</button>
		</view>
		<!-- 弹窗警告 -->
		<u-popup mode="center" :message="message" :show="alertshow" @close="close">
			<view>
				<text>{{message}}</text>
			</view>
		</u-popup>
	</view>

</template>

<script>
	import chooser from "../components/choosearea.vue"
	export default {
		components: {
			chooser
		},
		props: ['olduser'],
		name: "usertable",
		data() {
			return {
				userinfo: this.olduser,
				show: false,
				alertshow: false,
				message: ''
			}
		},
		watch: {
			olduser(newVal, oldVal) {
				this.userinfo = newVal;
			}
		},
		methods: {
			submit(userinfo) {
				for (let i = 0; i < (Object.values(userinfo)).length; i++) {
					if ((Object.values(userinfo))[i] == '') {
						this.alertshow = true
						this.message = "信息不能为空"
						return

					}
					if ((userinfo.number.length) != 11) {
						this.alertshow = true
						this.message = "11位手机号"
						return
					}
				}
				// console.log(typeof((Object.values(userinfo))[i]))

				this.$emit("submit", userinfo)//将存下的数据发给父组件
				
				// console.log(Object.values(userinfo))

			},
			showPicker() {
				this.show = true
			},
			confirm(e) {
				this.userinfo.area = e.value[0] + e.value[1] + e.value[2]
				this.show = false
			},
			cancel() {
				this.show = false
			},

			close() {
				this.alertshow = false
			}
		}
	}
</script>

<style scoped>
	.content .user {
		margin-top: 20px;
		display: flex;
		width: 100%;
		height: 40px;
	}

	.content .user text {
		width: 100px;
		margin-left: 10px;
	}

	.bottom {
		position: fixed;
		bottom: 0;
		left: 30px;
		margin-bottom: 20px;
		width: 80%;
		height: 34px;
	}

	.bottom button {
		background-color: #c85d53;
		color: white;
	}
</style>
