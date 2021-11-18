<template>
	<form class="container-md">
		<div class="row g-3">
			<div class="col-4">
				<label for="formCompany" class="form-label fw-bold">고객사명(회사명)</label>
				<input type="text" :value="company_name" class="form-control" id="formCompany" minlength="2" placeholder="고객사를 입력해주세요." />
			</div>
			<div class="col-4">
				<label for="formName" class="form-label fw-bold">신청자명</label>
				<input type="text" :value="name" class="form-control" id="formName" minlength="2" placeholder="신청자명을 입력해주세요." />
			</div>
			<div class="col-4">
				<label for="formPhone" class="form-label fw-bold">휴대폰번호</label>
				<input type="tel" :value="phone" class="form-control" id="formPhone" minlength="2" placeholder="-을 제외하고 입력해주세요" @input="isNumber($event)" />
			</div>
		</div>
		<div class="row gy-2 mt-2">
			<div class="col-12">
				<label for="formAddress" class="form-label fw-bold">주소</label>
				<div class="d-flex">
					<input type="tel" :value="address" class="form-control" id="formAddress" minlength="1" placeholder="주소입력" />
					<button type="button" class="ms-2 btn btn-primary" style="flex: none" @click="getAddress">주소 검색</button>
				</div>
			</div>
			<div class="col-12">
				<input type="tel" :value="address_detail" class="form-control" id="formAddressDetail" minlength="1" placeholder="상세주소 입력" ref="addressDetail" />
			</div>
		</div>
		<div class="d-flex justify-content-center mt-4">
			<button type="button" class="btn btn-secondary">이전</button>
			<router-link tag="button" class="btn btn-primary ms-2" to="/product">이동</router-link>
		</div>
	</form>
</template>

<script>
import { mapState } from 'vuex'
export default {
	data() {
		return {
			newPhonNumber: '',
		}
	},
	computed: {
		...mapState('orderInfo', ['company_name', 'name', 'phone', 'address', 'address_detail']),
	},
	methods: {
		// 미 구현 상태, 추후 구현
		isNumber(num) {
			let regNum = /^[0-9]*$/
			if (!regNum.test(num.target.value)) {
				this.$store.commit('orderInfo/updateState', {
					phone: num.target.value.replace(/^[0-9]*$/, ''),
				})
			}
		},
		getAddress() {
			new window.daum.Postcode({
				oncomplete: data => {
					// 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.
					// 도로명 주소의 노출 규칙에 따라 주소를 조합한다.
					// 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
					let fullRoadAddr = data.roadAddress
					// 도로명 주소 변수
					let extraRoadAddr = ''
					// 도로명 조합형 주소 변수
					// 법정동명이 있을 경우 추가한다. (법정리는 제외)
					// 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
					if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
						extraRoadAddr += data.bname
					}
					// 건물명이 있고, 공동주택일 경우 추가한다.
					if (data.buildingName !== '' && data.apartment === 'Y') {
						extraRoadAddr += extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName
					}
					// 도로명, 지번 조합형 주소가 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
					if (extraRoadAddr !== '') {
						extraRoadAddr = ' (' + extraRoadAddr + ')'
					}
					// 도로명, 지번 주소의 유무에 따라 해당 조합형 주소를 추가한다.
					if (fullRoadAddr !== '') {
						fullRoadAddr += extraRoadAddr
					}

					//5자리 새우편번호 사용
					this.$store.commit('orderInfo/updateState', {
						address: fullRoadAddr,
					})
					this.$refs.addressDetail.focus()
				},
			}).open()
		},
	},
}
</script>
