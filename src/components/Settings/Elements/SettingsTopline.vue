<template>
	<div class="settings-topline">
		<div class="settings-topline__inputs inputs">
			<div class="inputs__wrapper">
				<p class="inputs__text">24h Объём (M$):</p>
				<input type="text" class="inputs__input base-input" />
			</div>
			<div class="inputs__wrapper">
				<p class="inputs__text">1h Объём (M$):</p>
				<input type="text" class="inputs__input base-input" />
			</div>
		</div>
		<div class="settings-topline__freeze freeze">
			<p class="freeze__text">Заморозить</p>
			<BaseCheckboxTick />
		</div>
		<div class="settings-topline__container">
			<p class="settings-topline__button" @click="togglePopup('openAlert', true)">
				Alert Menu
			</p>
			<p class="settings-topline__button" @click="togglePopup('openLog', true)">
				Alert Log
			</p>
			<RouterLink :to="{ path: '/broker' }" class="settings-topline__button">
				АПИ Брокер
			</RouterLink>
		</div>

		<SettingsAlert v-if="popups.openAlert" @close="togglePopup('openAlert', false)" class="settings-topline__popup" />
		<SettingsLog v-if="popups.openLog" @close="togglePopup('openLog', false)" class="settings-topline__popup" />
	</div>
</template>

<script lang="ts" setup>
import BaseCheckboxTick from "@/components/Elements/BaseCheckboxTick.vue";
import SettingsAlert from "@/components/Settings/Elements/SettingsAlert.vue";
import SettingsLog from "@/components/Settings/Elements/SettingsLog.vue";
import { ref, Ref } from "vue";

declare type PopUps = {
	openAlert: boolean,
	openBroken: boolean,
	openLog: boolean,
}

const popups: Ref<PopUps> = ref({
	openAlert: false,
	openBroken: false,
	openLog: false,
})

function togglePopup(_var: string, state: boolean): void {
	for (const key in popups.value) {
		popups.value[key as keyof PopUps] = false
	}
	popups.value[_var as keyof PopUps] = state;
}
</script>

<style lang="scss" >
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/_mixins.scss";

.settings-topline {
	grid-area: topline;
	@include border-sides(0.1rem, solid, $--c_grey-light, [bottom]);
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 1.2rem;

	.inputs {
		display: flex;

		&__wrapper {
			display: flex;

			&+.inputs__wrapper {
				margin-left: 1.2rem;
			}
		}

		&__text {
			display: flex;
			align-items: center;
			margin-right: 0.8rem;

			font: {
				size: calc($--fz_xm - 0.2rem);
				weight: bold;
			}
		}

		&__input {
			height: 2rem;
			color: $--c_black;
			width: auto;
			background-color: $--c_white;
			padding-top: 0;
			padding-bottom: 0;
		}
	}

	.freeze {
		display: flex;
		align-items: center;

		&__text {
			margin-right: 0.5rem;

			font: {
				size: $--fz_xm;
				family: "Gilroy_S";
				// weight: bold;
			}

			color: $--c_yellow;
		}
	}

	&__container {
		display: flex;
		align-self: flex-start;

		&>*+* {
			margin-left: 1rem;
		}
	}

	&__button {
		cursor: pointer;
		background-color: $--c_grey;
		padding: 2.1rem 2rem 1.5rem;
		@include border0-radii(0, 0, merge, merge);
		color: $--c_greyish-white;

		font: {
			size: $--fz_m;
			weight: bold;
		}
	}
}

@media screen and (max-width: $--mobile-breakpoint) {
	.settings-topline {
		display: grid;
		grid-template: auto / auto auto;
		row-gap: 3rem;
		padding: 0 6rem 3rem;
		margin-top: 2.5rem;

		.inputs {
			order: 2;
			grid-column: 1/3;

			&__wrapper {
				flex-direction: column;
				flex: 1;

				&+.inputs__wrapper {
					margin-left: 4rem;
				}
			}

			&__text {
				margin-right: 0;
				margin-bottom: 0.8rem;
				font-size: calc($--fz_l + 0.2rem);
			}

			&__input {
				font-size: $--fz_l !important;
				padding: 0.3rem 1rem;
				height: auto;
				width: 100%;
			}
		}

		.freeze {
			order: 1;
			grid-column: 2/3;

			&__text {
				margin-bottom: .3rem;
				margin-right: 1.2rem;
				font-size: calc($--fz_l + .3rem);
			}
		}

		&__container {
			width: 100%;
			order: 3;
			grid-column: 1/3;
			justify-content: flex-end;
		}

		&__button {
			padding: 2rem 0;
			flex: 1;
			text-align: center;
			@include border0-radii(merge, merge, merge, merge);


			font: {
				size: $--fz_l;
			}
		}
	}
}
</style>