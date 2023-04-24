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
		width: 1.6rem;
		height: 100%;
		pointer-events: none;
		display: flex;
		align-items: center;
		background-color: inherit;
		padding-left: 0.6rem;
	}

	& &__select {
		font-size: inherit;
		padding: 0.8rem 2.8rem 0.8rem 0.8rem;
		color: inherit;

		option {
			font-size: inherit;
		}
	}
}

@media screen and (max-width: $--mobile-breakpoint) {
	.base-select {
		& &__select {
			padding-right: 4rem;
		}

		&__corner {
			width: 2.6rem;
			height: 100%;
			right: 1.2rem;
		}
	}
}
</style>