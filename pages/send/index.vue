<template>
	<view class="home">
		
	
	<!-- 大背景 -->
	<view class="bgc">
		<!-- 寄/收信息 -->
		<view class="address">
			<!-- 寄件人 -->
			<view class="send" @click="addr_s()">
				<view class="s">
					寄
				</view>
				<view class="_name">
					{{s_username}}
					
				</view>
				<view class="_phone">
					{{user_1.number}}
				</view>
				<!-- <text>新建寄件人{{user.name}}</text> -->
				<view class="iconfont icon-he_48wodedizhibu">
					
				</view>
				
				<view class="_addr">
					{{user_1.area}} {{user_1.address}}
				</view>
			</view>
			<!-- 收件人 -->
			<view class="receive" @click="addr_r()">
				<view class="r">
					收
				</view>
				<view class="_name">
					{{r_username}}
				</view>
				<view class="_phone">
					{{user_2.number}}
				</view>
				<view class="iconfont icon-he_48wodedizhibu">
					
				</view>
				
				<view class="_addr">
					{{user_2.area}} {{user_2.address}}
				</view>
			</view>
		</view>
		<!-- 寄/收信息end -->
		
		<!-- 上门取件 -->
		<view class="take">
			<text>上门取件</text>
			
			
			<view class="time">
				<view class="uni-list-cell-left">
					期望上门时间
				</view>
				<!-- 选择器 -->
				<view class="uni-list-cell-db">
					<picker @change="bindPickerChange" :value="index0" :range="array">
						<view class="uni-input">{{array[index0]}}</view>
					</picker>
				</view>
			</view>
			
			<view class="weight">
				<view class="uni-list-cell-left">
					预计重量
				</view>
				<!-- 选择器 -->
				<view class="uni-list-cell-db">
					<picker @change="bindPickerChange_w" :value="index_w" :range="array_w">
						<view class="uni-input">{{array_w[index_w]}}</view>
					</picker>
				</view>
			</view>
			
			<view class="num">
				<view class="uni-list-cell-left">
					物品件数
				</view>
				<!-- 选择器 -->
				<view class="uni-list-cell-db">
					<picker @change="bindPickerChange_n" :value="index_n" :range="array_n">
						<view class="uni-input">{{array_n[index_n]}}</view>
					</picker>
				</view>
			</view>
			
			<view class="name">
				<view class="uni-list-cell-left">
					物品名称
				</view>
				<input class="uni-input" focus placeholder="请输入物品名称" />
			</view>
		</view>
		<!-- 上门取件end -->
		
		
		
		<!-- 保价 -->
		<view class="insurance">
			<view class="title">
				保价
			</view>
			<!-- 单项选择器 -->
			<view class="uni-list">
				<radio-group @change="radioChange">
					<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.value">
						<view>
							<radio :value= "item.value" :checked="index === current" color="#ff3e3e"/>
						</view>
						<view>{{item.name}}</view>
						<view>¥{{item.value}}</view>
					</label>
				</radio-group>
			</view>
		</view>
		<!-- 保价end -->
		
		<!-- 优惠劵 -->
		<view class="offprice" @click="tooff()">
			<view class="title">
				优惠劵
			</view>
		</view>
		
		<view class="encrypt">
			<view class="title">
				信息加密
			</view>
			<view class="en_btn">
				<switch checked color="#ff3e3e" style="transform:scale(0.7)"/>
			</view>
			<!-- switch开关 -->
		</view>
		
		
		
		
	</view>
	<!-- 底部 -->
	<view class="bottom">
		<view class="title">
			预估总价
		</view>
		<view class="price">
			¥{{sum}}
		</view>
		<view class="b">
			<button class="btn" size="mini">下单</button>
		</view>
		
	</view>
	<!-- 底部end -->
	</view>
	
</template>

<script>
	import data from "@/src/data.js"
	export default {
		data() {
			return {
				price:12,
				
				array: ['9:00--12:00', '14:00--17:00'],
				array_w:[1,2,3],
				array_n:['1','2','3'],
				index0:0,
				index_w:0,
				index_n:0,
				current:0,
				v:1,
				s_username:'新建寄件人',
				r_username:'新建收件人',
				num:'',
				data,
				
				
				
				
				user_1: {
					name: '',
					number: '',
					area: '',
					address: '',
					code: ''
				},
				
				user_2: {
					name: '',
					number: '',
					area: '',
					address: '',
					code: ''
				},
				
				
				items: [{
					value:1,
					name:'货物价值0-500元'
				},
				{
					value:2,
					name:'货物价值500-1000元'
				}]
			}
		},
		onShow:function(object){
			if(object.i == 1)
			{
				
				this.s_username = data[object.id].name
				this.user_1 = data[object.id]
			}else{
				this.r_username = data[object.id].name
				this.user_2 = data[object.id]
			}
		},
		/* onLoad:function(options) {
			
			
			
			if(options.i == 1)
			{
				
				this.s_username = data[options.id].name
				this.user_1 = data[options.id]
			}else{
				this.r_username = data[options.id].name
				this.user_2 = data[options.id]
			}
			
			
		}, */
		computed:{
			sum(){
				
				return this.price + this.array_w[this.index_w]*4 + parseInt(this.v);
			}
		},
		
		
		methods: {
			bindPickerChange: function(e) {
            console.log('picker发送选择改变，携带值为', e.detail.value)
            this.index0 = e.detail.value
			},
			
			
			
			bindPickerChange_w: function(e){
				this.index_w = e.detail.value
			},
			
			bindPickerChange_n: function(e){
				this.index_n = e.detail.value
			},
			
			radioChange: function(evt) {
				this.v = evt.detail.value
			    for (let i = 0; i < this.items.length; i++) {
			        if (this.items[i].value === evt.detail.value) {
			            this.current = i;
			            break;
			        }
			    }
			},
			
			addr_s() { //切换至 地址薄 页面
				
				
				uni.navigateTo({
					url: '/pages/address/address?id=' + 1
				});
				
			},
			
			addr_r() {//切换至 地址薄 页面
				// uni.$emit('recv',{number:2})
				uni.navigateTo({
					url: '/pages/address/address?id=' + 2
				});
				
			},
			
			tooff() { //切换至优惠劵页面
				uni.navigateTo({
					url:'/pages/untapped/untapped'
				});
			}
		
		}
	}
</script>
	
<style lang="scss">
	
	.bgc{
		background: #EFEFEF;
		height: 650px;
	}
	.bottom{
		width: 100%;
		height: 45px;
		border-top: 1px solid black;
		background-color: white;
		position: fixed;
		display: flex;
		bottom: 0;
		text{
			font-size: 30rpx;
			font-weight: bold;
			margin-left: 5px;
			
		}
	}
	.bottom .price{
		margin-top: 2px;
		font-size: 25rpx;
		font-weight: bold;
		color: #ff3e3e;
	}
	.bottom .btn{
		background-color: #ff3e3e;
		color: white;
		margin-top: 5px;
		margin-left: 160px;
		border-radius: 15px;
	}
	
	.address{
		width: 670rpx;
		background-color: white;
		border-style: solid;
		border-width: 1px;
		border-color:#b4b4b4;
		margin: 0 auto;
		border-radius: 15px;
		display: flex;
		flex-direction: column;
	}
	.address .send{
		position: relative;
		height: 50px;
		border-bottom: 1px solid #C9C5C5;
	}
	.address .send .s{
		position: absolute;
		border-radius: 50%;
		background-color: white;
		color: #ff3e3e;
		width: 30px;
		height: 30px;
		border-style: solid;
		border-width: 1px;
		border-color:black;
		text-align: center;
		font-weight: bold;
		margin-top: 10px;
		margin-left: 20px;
		margin-bottom: 15px;
	}
	
	._name{
		position: absolute;
		font-size: 12px;
		font-weight: bold;
		margin-top: 10px;
		margin-left: 56px;
		
	}
	
	._phone{
		position: absolute;
		font-size: 10px;
		color: gray;
		margin-top: 12px;
		margin-left: 120px;
		width: 100px;
		height: 10px;
		
		
	}
	
	.iconfont{
		position: absolute;
		margin-left: 240px;
		margin-top: 10px;
		
	}
	
	._addr{
		position: absolute;
		margin-left: 56px;
		font-size: 10px;
		margin-top: 30px;
		color: gray;
		}
	
	.address .receive{
		position: relative;
		height: 50px;
		
	}
	.address .receive .r{
		position: absolute;
		border-radius: 50%;
		background-color: #ff3e3e;
		color: white;
		width: 30px;
		height: 30px;
		border-style: solid;
		border-width: 1px;
		border-color:white;
		justify-content: center;
		text-align: center;
		font-weight: bold;
		margin-top: 10px;
		margin-left: 20px;
		margin-bottom: 15px;
	}
	
	
	
	.take{
		width: 670rpx;
		background-color: white;
		border-style: solid;
		border-width: 1px;
		border-color:#b4b4b4;
		margin: 0 auto;
		border-radius: 15px;
		margin-top: 30px;
		text-align: center;
		text{
			font-weight: bold;
			font-size: 12px;
			
		}
	}
	
	.take .time{
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #C9C5C5;
	}
	
	.take .weight{
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #C9C5C5;
	}
	
	.take .num{
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #C9C5C5;
	}
	
	.take .name{
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	
	.take .name .uni-input{
		margin-left: 100px;
	}
	.uni-list-cell-left {
	    white-space: nowrap;
		font-size:12px;
		font-weight: bold;
		padding: 0 30rpx;
		
	}
	.uni-list-cell-db{
		flex: 1;
		margin-left: 100px;
	}
	.uni-input {
		height: 50rpx;
		padding: 15rpx 25rpx;
		line-height:50rpx;
		font-size:28rpx;
		background:#FFF;
		flex: 1;
		border-radius: 15px;
	}
	
	
	
	.insurance{
		width: 670rpx;
		background-color: white;
		border-style: solid;
		border-width: 1px;
		border-color:#b4b4b4;	
		margin: 0 auto;
		border-radius: 15px;
		margin-top: 30px;
	}
	
	.title{
		white-space: nowrap;
		font-size:12px;
		font-weight: bold;
		padding: 0 30rpx;
	}
	
	.uni-list {
		background-color: #FFFFFF;
		position: relative;
		width: 100%;
		display: flex;
		flex-direction: column;
		border-radius: 15px;
		margin-top: 10px;
	}
	
	.uni-list-cell{
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		font-size: 12px;
		
	}
	.uni-list-cell-pd{
		padding: 15rpx 25rpx;
		border-bottom: 1px solid #C9C5C5;
		border-radius: 15px;
	}
	
	
	
	.offprice{
		width: 670rpx;
		height: 30px;
		background-color: white;
		border-style: solid;
		border-width: 1px;
		border-color:#b4b4b4;	
		margin: 0 auto;
		border-radius: 15px;
		margin-top: 30px;	
	}
	
	.offprice .title{
		white-space: nowrap;
		font-size:12px;
		font-weight: bold;
		padding: 0 14px;
		margin-top: 7px;
	}
	.encrypt{
		display: flex;
		width: 670rpx;
		height: 30px;
		background-color: white;
		border-style: solid;
		border-width: 1px;
		border-color:#b4b4b4;	
		margin: 0 auto;
		border-radius: 15px;
		margin-top: 30px;
	}
	
	.encrypt .title{
		white-space: nowrap;
		font-size:12px;
		font-weight: bold;
		padding: 0 14px;
		margin-top: 7px;
	}
	
	.encrypt .en_btn{
		margin-left: 150px;
	}
	
	
</style>
