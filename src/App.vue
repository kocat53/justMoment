<template>
	<div id="wrap">
		<Header />
		<div class="pt-3 pb-3">
			<Router-view />
		</div>
	</div>
</template>
<script>
import Header from '@/components/Header'
export default {
	components: {
		Header,
	},
}
</script>
<style lang="scss">
.blind {
	position: absolute;
	width: 1px;
	height: 1px;
	margin: -1px;
	overflow: hidden;
}
</style>
