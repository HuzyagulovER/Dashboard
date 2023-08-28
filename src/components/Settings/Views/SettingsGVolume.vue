<template>
	<div class="g-volume">
		<SettingsGraph v-for="i in 9" :key="i" />
	</div>
</template>

<script lang="ts" setup>
import SettingsGraph from "@/components/Settings/Elements/SettingsGraph.vue";
</script>

<style lang="scss" >
@import "@/assets/scss/_variables.scss";

.g-volume {
	width: 100%;
	display: grid;
	grid-template: 1fr / repeat(3, 1fr);
	gap: 3rem 2rem;
	padding: 2.5rem 1.5rem;

	&>* {
		align-self: center;
		margin: 0 auto;
		// width: 34.38rem;
		// height: 22.75rem;
		width: 100%;
		height: 100%;
	}
}

@media screen and (max-width: $--mobile-breakpoint) {
	.g-volume {
		grid-template: auto / repeat(2, 1fr);
		gap: 3rem 2rem;
		padding: 4rem 3rem;

		&>* {
			width: 100%;
			height: auto;
		}
	}
}
</style>