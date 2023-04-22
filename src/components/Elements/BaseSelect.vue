<template>
	<div class="base-select">
		<select name="" id="" class="base-input base-select__select">
			<slot />
		</select>

		<div class="base-select__corner">
			<IconCorner />
		</div>
	</div>
</template>

<script lang="ts" setup>
import IconCorner from "@/components/Icons/IconCorner.vue";
</script>


<style lang="scss">
.base-select {
	position: relative;
	color: $--c_whitish-grey;

	&.yellow-border {
		border: 0 !important;

		.base-select__select {
			@include border(0.1rem, solid, $--c_yellow);
		}
	}

	&__corner {
		position: absolute;
		right: 0.8rem;
		top: 50%;
		transform: translateY(-50%);
		fill: $--c_grey-light;
		width: 1rem;
		height: 1rem;
		pointer-events: none;
	}

	& &__select {
		font-size: inherit;
		padding: 0.8rem 2.8rem 0.8rem 0.8rem;
		color: inherit;
	}
}
</style>