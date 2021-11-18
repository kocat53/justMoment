<template>
	<header id="header">
		<div class="container-md inner">
			<h4>스낵<span>24</span></h4>
		</div>
	</header>
</template>

<script>
export default {
	data() {},
}
</script>

<style lang="scss" scoped>
#header {
	border-bottom: 1px solid #e7e7e7;

	h4 {
		font-weight: 600;

		> span {
			font-size: 1.7rem;
			color: $primary;
		}
	}

	.inner {
		padding: 0.5rem 0 0.3rem;
	}
}
</style>
