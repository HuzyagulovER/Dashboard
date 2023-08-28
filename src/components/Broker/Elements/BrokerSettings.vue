<template>
	<div class="broker-settings">
		<div class="broker-settings__container">
			<div class="broker-settings__item item">
				<div class="item__name">Enable</div>
				<BaseCheckboxTick class="item__value" />
			</div>
			<div class="broker-settings__item item">
				<div class="item__name">Name</div>
				<input class="item__value underlined-input" type="text" />
			</div>
			<div class="broker-settings__item item">
				<div class="item__name">Ticker</div>
				<input class="item__value underlined-input" type="text" />
			</div>
		</div>
		<div class="broker-settings__container">
			<div class="broker-settings__item item flex-column align-start">
				<div class="item__name">URL Webhook</div>
				<div class="item__value"></div>
			</div>
		</div>
		<div class="broker-settings__container not-underlined">
			<div class="broker-settings__item item flex-column align-start">
				<div class="item__name">Webhook content</div>
				<div class="item__value"></div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import BaseCheckboxTick from "@/components/Elements/BaseCheckboxTick.vue";
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/_mixins.scss";

.broker-settings {
	@include border-sides(0.1rem, solid, $--c_grey-light, (right));

	&__container {
		display: flex;
		flex-direction: column;
		padding: 1.5rem 1.2rem 2rem 1.2rem;
	}

	&__container+&__container {
		@include border-sides(0.1rem, solid, $--c_black, (top));

		&.not-underlined {
			border-width: 0;
		}
	}

	.item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1rem;

		&__name {
			font-size: $--fz_m;
			margin-right: 1rem;
		}

		&__value {}
	}
}

@media screen and (max-width: $--mobile-breakpoint) {
	.broker-settings {
		border-right: 0;
		@include border-sides(0.1rem, solid, $--c_black, (bottom));

		&__container {
			padding: 2rem $--padding_modile_broker;
		}

		&__container+&__container {
			@include border-sides(0.1rem, solid, $--c_black, (top));

			&.not-underlined {
				border-width: 0;
			}
		}

		.item {
			align-items: flex-end;
			margin-bottom: 1rem;

			&__name {
				font-size: $--fz_xl;
				margin-right: 3.5rem;
			}

			&__value {
				font-size: $--fz_l;

				&.checkbox-tick {
					width: 3rem;
					height: 3rem;
				}
			}
		}
	}
}
</style>