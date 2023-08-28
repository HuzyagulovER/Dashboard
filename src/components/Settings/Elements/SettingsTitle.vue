<template>
	<div class="settings-title">
		<RouterLink to="/add-account">
			<BaseIconButton class="settings-title__icon-container">
				<IconSettings class="settings-title__icon" />
			</BaseIconButton>
		</RouterLink>
		<p class="settings-title__title">Настройки</p>
		<BaseIconButton class="settings-title__icon-container">
			<IconSearch class="settings-title__icon" />
		</BaseIconButton>
	</div>
</template>

<script lang="ts" setup>
import BaseIconButton from "@/components/Elements/BaseIconButton.vue";
import IconSettings from "@/components/Icons/IconSettings.vue";
import IconSearch from "@/components/Icons/IconSearch.vue";
</script>

<style lang="scss" >
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/_mixins.scss";

.settings-title {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1.5rem;
	grid-area: settings-title;
	@include border-sides(0.1rem, solid, $--c_grey-light, (right, bottom));

	&__title {
		color: $--c_yellow;

		font: {
			family: "Gilroy_S";
			size: $--fz_l;
		}
	}

	&__icon {
		fill: $--c_yellow;
	}
}

@media screen and (max-width: $--mobile-breakpoint) {
	.settings-title {
		&__title {
			margin: 0 1.5rem;

			font: {
				size: $--fz_xl;
			}
		}

		&__icon-container {
			width: 3rem;
			height: 3rem;
			padding: 0.5rem;
		}
	}
}
</style>