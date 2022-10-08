<template>
	<view>
		<u-button :shape="shape" @click="$emit('jump')" :color="buttoncolor" :customStyle="customStyle">
			<u-icon :name="iconname" :color="iconcolor" size="62rpx"></u-icon>
		</u-button>
		<u-text :text="text" size="24rpx" align="center"></u-text>
	</view>
</template>

<script>
	export default {
		props: ['iconname', 'buttoncolor', 'iconcolor', 'text', 'shape', 'customStyle'],
	}
</script>

<style>
</style>
