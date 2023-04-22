<template>
	<main class="terminal">
		<TerminalNavPanel />
		<TerminalChangePanel />
		<TerminalSettingsPanel />
		<div class="terminal__page-view page-view" style="grid-area: view">
			<RouterView />
		</div>
	</main>
</template>

<script lang="ts" setup>
import TerminalChangePanel from "@/components/Terminal/Elements/TerminalChangePanel.vue";
import TerminalSettingsPanel from "@/components/Terminal/Elements/TerminalSettingsPanel.vue";
import TerminalNavPanel from "@/components/Terminal/Elements/TerminalNavPanel.vue";
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
</style>