<template>
	<main class="settings">
		<div class="settings__burger-container burger-container">
			<BaseBurger :init-value="isActiveBurger" @toggle="(is) => (isActiveBurger = is)" />
		</div>
		<SettingsTitle class="settings__settings-title" />
		<SettingsTopline />
		<SettingsNav class="settings__mobile-menu mobile-menu" :class="{ _active: isActiveBurger }" />
		<div class="page-view" style="grid-area: view">
			<RouterView />
		</div>
	</main>
</template>

<script lang="ts" setup>
import SettingsTitle from "@/components/Settings/Elements/SettingsTitle.vue";
import SettingsNav from "@/components/Settings/Elements/SettingsNav.vue";
import SettingsTopline from "@/components/Settings/Elements/SettingsTopline.vue";
import BaseBurger from "@/components/Elements/BaseBurger.vue";
import { ref, Ref } from "vue";

let isActiveBurger: Ref<boolean> = ref(false);
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/_mixins.scss";

.settings {
	@include grid-area((settings-title, topline, settings, view), (6.25rem, n, 17fr));
	height: 100%;
	width: 100%;
}

@media screen and (max-width: $--mobile-breakpoint) {
	.settings {
		display: flex;
		flex-direction: column;
		position: relative;

		&__burger-container,
		&__settings-title {
			position: absolute;
			width: auto;
		}

		&__burger-container {
			background-color: transparent !important;
			width: auto !important;
			height: 7.5rem !important;
			padding: 0 !important;
			left: 6rem;
			top: 0;
		}

		&__settings-title {
			border: 0;
			left: 12rem;
			top: 3.7rem;
			transform: translateY(-50%);
		}

		&__settings-topline {}

		&__mobile-menu {
			top: 0 !important;
		}
	}
}
</style>