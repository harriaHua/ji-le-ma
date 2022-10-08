<template>
	<usertable :olduser="olduser" @submit="submit"></usertable>
</template>

<script>
	import data from "@/src/data.js"
	import usertable from "../components/usertable.vue"
	export default {
		components: {
			usertable
		},
		onLoad: function(option) {
			this.olduser = data[option.id]
			// console.log(olduser);
			this.num = option.id //返回数据的id，即第几个数据
			// console.log(num)
		},
		data() {
			return {
				data, //总数据
				olduser: {
					name: '',
					number: '',
					area: '',
					address: '',
					code: ''
				},
				num:''
			}
		},

		methods: {
			async submit(e) {
				// console.log(e)
				this.data.splice(this.num, 1, e); //将从子组件里修改过后的数据，替换原本的数据
				uni.navigateBack({
					url: '/pages/address/address'
				})
				// console.log(data);
			}
		}
	}
</script>

<style>
</style>
