<template>
	<u-picker :show="show" ref="uPicker" :columns="columns" @change="changeHandler" @cancel="cancel" @confirm="confirm">
	</u-picker>
</template>

<script>
	export default {
		name: "chooser",
		props: ['show'],
		watch: {
			async show(newVal, oldVal) {
				this.show = newVal;
				console.log(this.show)
			}
		},
		data() {
			return {
				// loading: false,
				columns: [
					['四川省', '河北省', '湖北省', '上海市'],
					['成都市', '自贡市'],
					['双流区', '锦江区', '彭州市', '青羊区']
				],
				columnData: [
						['成都市', '自贡市'],
						['石家庄', '保定'],
						['荆州市', '武汉市'],
						['上海市']
					]

					,
				columnData2: [
					[
						['双流区', '锦江区', '彭州市', '青羊区'],
						['贡井区', '大安区'],
					],
					[
						['长安区', '桥西区'],
						['竞秀区', '池莲区'],
					],
					[
						['沙市区', '石首市'],
						['汉江区', '汉阳区']
					],
					[
						['黄浦区', '浦东新区', '静安区']
					]
				]
				// ,
				// columnData3:[

				// ]

			}
		},
		methods: {
			changeHandler(e) {
				const {
					columnIndex,
					index,
					indexs,
					// 微信小程序无法将picker实例传出来，只能通过ref操作
					picker = this.$refs.uPicker
				} = e
				// console.log(columnIndex, index, indexs)
				if (columnIndex === 0) {
					picker.setColumnValues(1, this.columnData[indexs[0]])
					picker.setColumnValues(2, this.columnData2[index][indexs[1]])

				}
				if (columnIndex === 1)
					picker.setColumnValues(2, this.columnData2[indexs[0]][indexs[1]])
			},
			cancel() {
				this.$emit("cancel")
			},
			confirm(e) {
				// console.log("confirm", e)
				this.$emit("confirm", e)
			}
		}
	}
</script>

<style>
</style>
