<template>
		<usertable :olduser=olduser @submit="submit"></usertable>
</template>

<script>
	import data from "@/src/data.js"
    import usertable from "../components/usertable.vue"
	export default {
		components:{
			usertable
		},
		data() {
			return {
				data,
				olduser: {
					name: '',
					number: '',
					area: '',
					address: '',
					code: ''
					}
			}
		},
		methods: {
			submit(userinfo) {
				this.data.push(userinfo);//将新建的数据，放到总数据之后
				// console.log(data);
				uni.navigateTo({
					url: '/pages/address/address'
				})
			}
		}
	}
</script>

<style>
	
</style>
