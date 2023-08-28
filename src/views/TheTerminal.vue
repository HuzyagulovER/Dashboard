<template>
	<main class="terminal">
		<div class="terminal__burger-container burger-container">
			<BaseBurger :init-value="isActiveBurger" @toggle="(is) => (isActiveBurger = is)" />
		</div>
		<TerminalNavPanel />
		<TerminalChangePanel class="terminal__mobile-menu mobile-menu" :class="{ _active: isActiveBurger }" />
		<TerminalSettingsPanel class="terminal__mobile-menu mobile-menu" :class="{ _active: isActiveBurger }" />
		<div class="terminal__page-view page-view">
			<RouterView />
		</div>
	</main>
</template>

<script lang="ts" setup>
import TerminalChangePanel from "@/components/Terminal/Elements/TerminalChangePanel.vue";
import TerminalSettingsPanel from "@/components/Terminal/Elements/TerminalSettingsPanel.vue";
import TerminalNavPanel from "@/components/Terminal/Elements/TerminalNavPanel.vue";
import BaseBurger from "@/components/Elements/BaseBurger.vue";
import { ref, Ref } from "vue";

let isActiveBurger: Ref<boolean> = ref(false);
</script>

<style lang="scss">
@import "@/assets/scss/_mixins.scss";
@import "@/assets/scss/_variables.scss";

.terminal {
	@include grid-area((change, nav, settings, view), (6.25rem));
	height: 100%;
	width: 100%;

	&__page-view {
		padding: 2rem 6.6rem;
		grid-area: view;
	}

	.block {
		padding: 1rem 3rem;

		.item {
			padding: 2rem 3rem 2rem 1rem;

			&+.item {
				padding: 2rem 2rem 2rem 3rem;
			}

			.title {
				font-size: $--fz_l;
			}
		}
	}

	.page-view {
		&>* {
			display: grid;
			row-gap: 2rem;
		}
	}
}

@media screen and (max-width: $--mobile-breakpoint) {
	.terminal {
		grid-template:
			"nav" auto
			"view" 1fr / 1fr;

		&__page-view {
			padding: 3.8rem 4.3rem;
		}

		.block {
			padding: 1rem 3rem;
			gap: 0;

			.item {
				padding: 2rem 2rem 0;

				&+.item {
					padding: 2rem 2rem 2rem;
				}

				.title {
					font-size: $--fz_l;
				}
			}

			.base-input {
				padding: 1rem !important;
			}

			.underlined-input {
				@include padding-sides(1rem, (right, left));
				@include padding-sides(0.6rem, bottom);
				@include padding-sides(0rem, top);
			}
		}

		.page-view {
			&>* {
				display: grid;
				row-gap: 3rem;
			}
		}

		$top-mobile-menu-height: 6rem;
		$top-mobile-menu-padding: 2rem;

		&__mobile-menu {
			&.terminal-change {
				top: 0 !important;
				height: $top-mobile-menu-height;
				padding: 0.7rem $top-mobile-menu-padding;
			}

			&.terminal-settings {
				top: $top-mobile-menu-height;
				overflow-y: scroll;
			}
		}

		&__burger-container {
			position: absolute;
			width: auto !important;
			padding: 0 !important;
			top: 0.3rem !important;
			height: $top-mobile-menu-height !important;
			left: $top-mobile-menu-padding * 1.32;
		}

		.terminal-nav {
			height: $top-mobile-menu-height;
			padding: 0 $top-mobile-menu-padding 0 $top-mobile-menu-padding * 4;
			border: 0;
		}
	}
}
</style>