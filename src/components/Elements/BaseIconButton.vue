<template>
	<div class="icon-container">
		<slot />
	</div>
</template>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/_mixins.scss";

.icon-container {
	width: 2.25rem;
	height: 2.25rem;
	padding: 0.45rem;
	@include border-with-radius(0.1rem, solid, $--c_grey-light, smedium);
	cursor: pointer;

	&>* {
		width: 100%;
		height: 100%;
	}
}
</style>