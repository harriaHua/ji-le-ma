<template>
	<view class="page container">
		<view class="example-body">
			<uni-datetime-picker type="date" :clear-icon="false" v-model="single" @change="change" />
		</view>
	</view>
</template>


<script>
	export default {
		data() {
			return {
				single: '',
				datetimesingle: '',
				range: ['2021-02-1', '2021-3-28'],
				datetimerange: [],
				start: Date.now() - 1000000000,
				end: Date.now() + 1000000000
			}
		},

		mounted() {
			setTimeout(() => {
				this.datetimesingle = Date.now() - 2*24*3600*1000
				this.single = '2022-09-09'
				this.datetimerange = ["2021-07-08 0:01:10", "2021-08-08 23:59:59"]
			},3000)
		},

		methods:{
			change(e) {
				this.$emit("sendtime",e);
			}
			
		}
	}
</script>


<style lang="scss">
	.example-body {
		background-color: #ff5b5b;
	}
</style>
