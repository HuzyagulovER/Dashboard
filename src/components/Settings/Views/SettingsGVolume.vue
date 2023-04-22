<template>
	<div class="g-volume">
		<SettingsGraph />
		<SettingsGraph />
		<SettingsGraph />
		<SettingsGraph />
	</div>
</template>

<script lang="ts" setup>
import SettingsGraph from "@/components/Settings/Elements/SettingsGraph.vue";
</script>

<style lang="scss" >
.g-volume {
	width: 100%;
	display: grid;
	grid-template: repeat(2, 1fr) / repeat(2, 1fr);
	gap: 3rem 0;
	padding: 2.5rem 1.5rem;

	& > * {
		align-self: center;
		margin: 0 auto;
		width: 34.38rem;
		height: 22.75rem;
	}
}
</style>