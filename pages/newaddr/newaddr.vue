<template>
		<usertable @submit="submit"></usertable>
</template>

<script>
	// import data from "@/src/data.js"
    import usertable from "../components/usertable.vue"
	export default {
		components:{
			usertable
		},
		data() {
			return {
			}
		},
		methods: {
			async submit(e) {
				let res = await this.$request.post('/addAddress', {...e,userId:this.$store.state.userId});
				uni.navigateBack({
					url: '/pages/address/address'
				})
			}
		}
	}
</script>

<style>
	
</style>
