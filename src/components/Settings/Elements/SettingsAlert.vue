<template>
	<div class="settings-alert" v-if="isActive === undefined ? false : isActive">
		<div class="settings-alert__top-line top-line">
			<p class="top-line__title">Alert Settings</p>
			<div class="top-line__back" @click="closeAlert">
				<IconCorner class="top-line__corner" />
			</div>
		</div>
		<div class="settings-alert__container">
			<div class="settings-alert__item item">
				<p class="item__name">Webhook Enable</p>
				<BaseCheckbox />
			</div>
			<div class="settings-alert__item item">
				<p class="item__name">EMail Enable</p>
				<BaseCheckbox />
			</div>
			<div class="settings-alert__item item flex-column">
				<p class="item__name">Webhook URL</p>
				<input type="text" class="base-input" />
			</div>
			<div class="settings-alert__item item">
				<p class="item__name">Notify Enable</p>
				<BaseCheckbox />
			</div>
			<div class="settings-alert__item item flex-column">
				<p class="item__name">Data</p>
				<textarea type="text" class="base-input"></textarea>
			</div>
			<div class="settings-alert__item item button-container">
				<BaseButton class="item__button">Submit</BaseButton>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
/* eslint-disable */
import IconCorner from "@/components/Icons/IconCorner.vue";
import BaseCheckbox from "@/components/Elements/BaseCheckbox.vue";
import BaseButton from "@/components/Elements/BaseButton.vue";

let { isActive } = defineProps<{
	isActive: boolean;
}>();
const emit = defineEmits(["close"]);

function closeAlert() {
	emit("close");
}
</script>

<style lang="scss">
.settings-alert {
	display: inline-flex;
	flex-direction: column;
	width: auto;
	height: auto;
	@include padding-sides(3rem, (right, bottom, left));
	align-self: flex-start;
	position: absolute;
	background-color: $--c_main;
	@include border0-radius(merge);

	.top-line {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 2rem;

		&__title {
			background-color: $--c_grey;
			padding: 1.2rem 2.2rem;
			@include border0-radii(0, 0, medium, medium);
			margin-right: 2rem;
			font: {
				weight: bold;
				size: $--fz_m;
			}
		}

		&__back {
			width: 1.8rem;
			height: 1.8rem;
			padding: 0.3rem;
			@include border-with-radius(0.1rem, solid, $--c_yellow, small);
			display: flex;
			justify-content: center;
			align-items: center;
			transform: rotate(90deg);
			cursor: pointer;
		}

		&__corner {
			fill: $--c_yellow;
		}
	}

	&__container {
		display: grid;
		grid-template: auto / repeat(2, auto);
		gap: 1.5rem 2rem;
	}

	.item {
		display: flex;
		align-self: flex-start;

		&:not(.flex-column) {
			align-items: center;
		}

		&.flex-column {
			.item__name {
				margin-bottom: 0.5rem;
			}
		}

		&__name {
			margin-right: 1rem;
		}

		&__wrapper {
			display: grid;
			grid-template: auto / repeat(2, auto);
		}

		&__button {
			font-size: $--fz_s;
			align-self: center;
			width: auto;
			padding: 0.5rem 2.3rem;
			margin-bottom: -1.7rem;
		}

		textarea {
			resize: none;
			padding: 0.4rem 0.8rem;
		}

		input {
			padding: 0.2rem 0.5rem;
		}

		&.button-container {
			align-self: stretch;
			justify-content: center;
		}
	}
}

@media screen and (max-width: $--mobile-breakpoint) {
	.settings-alert {
		.top-line {
			&__title {
				padding: 1.2rem 2.2rem;
				margin-right: 2rem;
				font-size: $--fz_xm;
			}

			&__back {
				width: 2.2rem;
				height: 2.2rem;
				padding: 0.3rem;
			}
		}

		.item {
			&__name {
				margin-right: 1rem;
				font-size: $--fz_m;
				white-space: nowrap;
			}

			&__button {
				font-size: $--fz_m;
			}

			textarea {
				font-size: $--fz_m;
				padding: 0.4rem 0.8rem;
			}

			input {
				font-size: $--fz_m;
			}
		}
	}
}
</style>