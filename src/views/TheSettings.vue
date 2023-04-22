<template>
	<main class="settings">
		<SettingsTitle />
		<SettingsTopline />
		<SettingsNav />
		<div class="page-view" style="grid-area: view">
			<RouterView />
		</div>
	</main>
</template>

<script lang="ts" setup>
import SettingsTitle from "@/components/Settings/Elements/SettingsTitle.vue";
import SettingsNav from "@/components/Settings/Elements/SettingsNav.vue";
import SettingsTopline from "@/components/Settings/Elements/SettingsTopline.vue";
</script>

<style lang="scss">
.settings {
	@include grid-area((settings-title, topline, settings, view), (6.25rem));
	height: 100%;
	width: 100%;
}
</style>