<template>
	<div class="row g-2">
		<div class="col" v-for="item in product" :key="item.no">
			{{ item }}
			<label class="check_item" :for="`product${item.no}`">
				<input type="checkbox" :id="`product${item.no}`" class="blind" />
				<img :src="item.image_url" alt="" />
			</label>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		product: {
			type: Object,
			default: () => ({}),
		},
	},
	data() {
		return {
			ObjectProduct: {},
		}
	},
	created() {
		this.ObjectProduct = Object.assign({}, this.product)
		console.log(this.ObjectProduct)
	},
}
</script>

<style lang="scss" scoped></style>
