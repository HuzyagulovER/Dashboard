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
			<div class="freeze__checkbox">
				<input type="checkbox" />
				<div class="freeze__layout"></div>
				<IconTick class="freeze__tick" />
			</div>
		</div>
		<div class="settings-topline__container">
			<p
				class="settings-topline__alert-menu"
				@click="changeOpenAlertState(true)"
			>
				Alert Menu
			</p>
		</div>
		<SettingsAlert
			:isActive="openAlert"
			@close="changeOpenAlertState(false)"
			style="
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				border: 0.1rem solid #fff;
			"
		/>
	</div>
</template>

<script lang="ts" setup>
import IconTick from "@/components/Icons/IconTick.vue";
import SettingsAlert from "@/components/Settings/Elements/SettingsAlert.vue";
import { ref, Ref } from "vue";

let openAlert: Ref<boolean> = ref(false);

function changeOpenAlertState(state: boolean): void {
	openAlert.value = state;
}
</script>

<style lang="scss" >
.settings-topline {
	grid-area: topline;
	@include border-sides(0.1rem, solid, $--c_grey-light, [bottom]);
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 2rem;

	.inputs {
		display: flex;

		&__wrapper {
			display: flex;
			& + .inputs__wrapper {
				margin-left: 2.5rem;
			}
		}

		&__text {
			margin-right: 0.8rem;
			font: {
				size: $--fz_xm;
				weight: bold;
			}
		}

		&__input {
			height: 2rem;
			color: $--c_black;
			width: auto;
			background-color: $--c_white;
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

		&__checkbox {
			width: 1.5rem;
			height: 1.5rem;
			position: relative;

			input {
				width: 100%;
				height: 100%;
				opacity: 0;
			}
		}

		&__layout,
		&__tick {
			pointer-events: none;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 100%;
			height: 100%;
		}

		&__layout {
			@include border-radius(small);
			background-color: $--c_white;
		}

		&__tick {
			visibility: hidden;
			padding: 0.15rem;
		}

		input {
			cursor: pointer;
		}

		input:checked ~ .freeze__tick {
			visibility: visible;
		}

		input:checked ~ .freeze__layout {
			background-color: $--c_yellow;
		}
	}

	&__container {
		align-self: flex-start;
	}

	&__alert-menu {
		cursor: pointer;
		background-color: $--c_grey;
		padding: 2.1rem 2rem 1.5rem;
		@include border0-radii(0, 0, merge, merge);
		font: {
			size: $--fz_xm;
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

		.inputs {
			order: 2;

			&__wrapper {
				flex-direction: column;
				& + .inputs__wrapper {
					margin-left: 2.5rem;
				}
			}

			&__text {
				margin-right: 0;
				margin-bottom: 0.5rem;
				font-size: $--fz_l;
			}

			&__input {
				font-size: $--fz_xm !important;
				padding: 0.3rem 1rem;
				width: 16rem;
				height: auto;
			}
		}

		.freeze {
			flex-direction: column;
			align-items: flex-start;
			order: 3;

			&__text {
				margin-bottom: 0.5rem;
				margin-right: 0;
				font-size: $--fz_l;
			}

			&__checkbox {
				width: 2rem;
				height: 2rem;
			}
		}

		&__container {
			width: 100%;
			order: 1;
			grid-column: 1/3;
			display: flex;
			justify-content: flex-end;
		}

		&__alert-menu {
			padding: 2rem 2.2rem 1.2rem;
			font: {
				size: $--fz_l;
			}
		}
	}
}
</style>