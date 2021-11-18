<template>
	<form class="container-md">
		<div class="row">
			<div class="col-6">
				<strong class="d-block mb-3">이용기간</strong>
				<div class="form-check form-check-inline" v-for="(item, index) in period" :key="item">
					<input class="form-check-input" :checked="index == 0" type="radio" name="periodOption" :id="`period${item}`" value="option1" />
					<label class="form-check-label" :for="`period${item}`">{{ item }}개월</label>
				</div>
			</div>
			<div class="col-6">
				<strong class="d-block mb-2">1회 예산</strong>
				<select class="form-select form-select-sm">
					<option>선택</option>
					<option v-for="(money, index) in budget" :key="index">{{ money }} 개월</option>
				</select>
			</div>
		</div>
		<div class="row mt-4">
			<div class="col-6">
				<strong class="d-block mb-3">배송주기</strong>
				<div class="form-check form-check-inline" v-for="(item, index) in delivery_cycle" :key="item">
					<input class="form-check-input" :checked="index == 0" type="radio" name="deliveryCycle" :id="`deliveryCycle${item}`" value="option1" />
					<label class="form-check-label" :for="`deliveryCycle${item}`">{{ item }}주</label>
				</div>
			</div>
			<div class="col-6">
				<strong class="d-block mb-3">구성선택</strong>
				<div class="form-check form-check-inline" v-for="item in type" :key="item">
					<input class="form-check-input" type="checkbox" name="type" :id="`type${item}`" value="option1" />
					<label class="form-check-label" :for="`type${item}`">{{ item }}</label>
				</div>
			</div>
		</div>
		<div class="row mt-4">
			<div class="col-6">
				<strong class="d-block mb-3">선호상품 선택</strong>
				<Product v-for="item in product_list" :key="item" :product="item" />
			</div>
		</div>
	</form>
</template>

<script>
import Product from './product'
import { mapState } from 'vuex'

export default {
	components: { Product },
	data() {
		return {}
	},
	computed: {
		...mapState('orderProduct', ['period', 'budget', 'delivery_cycle', 'type', 'product_list']),
	},
}
</script>

<style lang="scss" scoped></style>
