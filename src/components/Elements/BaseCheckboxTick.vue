<template>
	<div class="checkbox-tick">
		<input type="checkbox" />
		<div class="checkbox-tick__layout"></div>
		<IconTick class="checkbox-tick__tick" />
	</div>
</template>

<script setup lang="ts">
import IconTick from "@/components/Icons/IconTick.vue";

</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/_mixins.scss";

.checkbox-tick {
	width: 1.5rem;
	height: 1.5rem;
	position: relative;

	input {
		width: 100%;
		height: 100%;
		opacity: 0;
	}

	&__layout,
	&__tick {
		pointer-events: none;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		height: 100%;
	}

	&__layout {
		@include border-radius(small);
		background-color: $--c_white;
	}

	&__tick {
		visibility: hidden;
		padding: 0.15rem;
	}

	input {
		cursor: pointer;
	}

	input:checked~.checkbox-tick__tick {
		visibility: visible;
	}

	input:checked~.checkbox-tick__layout {
		background-color: $--c_yellow;
	}

	@media screen and (max-width: $--mobile-breakpoint) {
		width: 2rem;
		height: 2rem;

		&__layout {
			@include border-radius(smedium);
		}
	}
}
</style>