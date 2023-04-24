<template>
	<main class="terminal">
		<div class="terminal__burger-container burger-container">
			<BaseBurger
				:init-value="isActiveBurger"
				@toggle="(is) => (isActiveBurger = is)"
			/>
		</div>
		<TerminalNavPanel />
		<TerminalChangePanel
			class="terminal__mobile-menu mobile-menu"
			:class="{ _active: isActiveBurger }"
		/>
		<TerminalSettingsPanel
			class="terminal__mobile-menu mobile-menu"
			:class="{ _active: isActiveBurger }"
		/>
		<div class="terminal__page-view page-view" style="grid-area: view">
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
.terminal {
	@include grid-area((change, nav, settings, view), (6.25rem));
	height: 100%;
	width: 100%;

	&__page-view {
		padding: 3.8rem 6.6rem;
	}

	.block {
		padding: 1rem 3rem;

		.item {
			padding: 2rem 3rem 2rem 1rem;

			& + .item {
				padding: 2rem 2rem 2rem 3rem;
			}

			.title {
				font-size: $--fz_l;
			}
		}
	}

	.page-view {
		& > * {
			display: grid;
			row-gap: 3rem;
		}
	}
}

@media screen and (max-width: $--mobile-breakpoint) {
	.terminal {
		grid-template:
			"nav" auto
			"view" 1fr / 1fr;

		&__page-view {
			padding: 3.8rem 6.6rem;
		}

		.block {
			padding: 1rem 3rem;

			.item {
				padding: 2rem 3rem 2rem 1rem;

				& + .item {
					padding: 2rem 2rem 2rem 3rem;
				}

				.title {
					font-size: $--fz_l;
				}
			}
		}

		.page-view {
			& > * {
				display: grid;
				row-gap: 3rem;
			}
		}

		$top-mobile-menu-height: 5rem;
		$top-mobile-menu-padding: 6rem;
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
			left: $top-mobile-menu-padding * 1.32 / 3;
		}

		.terminal-nav {
			height: $top-mobile-menu-height;
			padding: 0 $top-mobile-menu-padding 0 $top-mobile-menu-padding * 1.32;
			border: 0;
		}
	}
}
</style>