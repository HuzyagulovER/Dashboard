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
				<IconCorner class="freeze__tick" />
			</div>
		</div>
		<div class="settings-topline__container">
			<p class="settings-topline__alert-menu">Alert Menu</p>
		</div>
	</div>
</template>

<script lang="ts" setup>
import IconCorner from "@/components/Icons/IconCorner.vue";
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
			cursor: pointer;
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
		padding: 1.2rem 2.2rem;
		@include border0-radii(0, 0, medium, medium);
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
		row-gap: 2rem;
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
				font: {
					size: $--fz_xm;
				}
			}

			&__input {
				font-size: $--fz_m;
				width: 15rem;
			}
		}

		.freeze {
			flex-direction: column;
			align-items: flex-start;
			order: 3;

			&__text {
				margin-bottom: 0.5rem;
				margin-right: 0;
			}

			&__checkbox {
				width: 1.8rem;
				height: 1.8rem;
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