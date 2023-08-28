<template>
	<div class="settings-log popup">
		<div class="settings-log__top-line top-line">
			<p class="top-line__title">Alert Log</p>
		</div>
		<div class="settings-log__container">
			<div class="settings-log__table table">
				<div class="table__head">
					<p class="table__time-col">Time</p>
					<p class="table__message-col">Message</p>
				</div>
				<div class="table__body">
					<div class="row" v-for="i in 20" :key="i">
						<p class="cell">Time</p>
						<p class="cell">Message</p>
					</div>
				</div>
			</div>
		</div>
		<div class="settings-log__button-container">
			<BaseButton class="settings-log__button" @click="closeAlert">Close</BaseButton>
		</div>
	</div>
</template>

<script lang="ts" setup>
import BaseButton from "@/components/Elements/BaseButton.vue";

const emit = defineEmits<{ close: [] }>();

function closeAlert() {
	emit("close");
}
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/_mixins.scss";

.settings-log {
	display: flex;
	flex-direction: column;
	min-width: 30rem;
	height: auto;
	align-self: flex-start;
	position: absolute;
	background-color: $--c_main;
	@include border-radius(merge);
	@include padding-sides(2.5rem, (bottom));

	.top-line {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 2rem;
		@include padding-sides(3rem, (right, left));

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
		flex: 1;
	}

	&__button-container {
		align-self: flex-start;
		margin-top: 2rem;
		@include padding-sides(3rem, (right, left));
	}

	&__button {
		font-size: $--fz_s;
		padding: 0.5rem 3.3rem;
	}

	.table {
		width: 100%;
		$--first-col-width: 8.6rem;
		$--gap: .3rem;

		&__head {
			display: grid;
			grid-template-rows: 1fr;
			grid-template-columns: $--first-col-width 75fr;
			gap: $--gap;
			margin-bottom: $--gap;

			p {
				text-align: center;
				background-color: $--c_grey;
				font-size: $--fz_s;
				@include padding-sides(0.5rem, (top, bottom));
			}
		}

		&__body {
			overflow-y: auto;
			max-height: 22rem;

			.row {
				display: grid;
				grid-template-rows: 1fr;
				grid-template-columns: $--first-col-width 75fr;
				gap: $--gap;
				margin-bottom: $--gap/2;

				.cell {
					font-size: $--fz_s;
					@include padding-sides(0.5rem, (top, bottom, left, right));
				}
			}
		}
	}
}

@media screen and (max-width: $--mobile-breakpoint) {
	.settings-log {
		min-width: 40rem;
		height: auto;

		.top-line {
			&__title {

				font: {
					size: $--fz_xm;
				}
			}
		}

		&__button-container {
			margin-top: 2rem;
			@include padding-sides(3rem, (right, left));
		}

		&__button {
			font-size: $--fz_m;
			padding: 0.5rem 3.3rem;
		}

		.table {
			$--first-col-width: 9.5rem;
			$--gap: .3rem;

			&__head {
				grid-template-columns: $--first-col-width 75fr;
				gap: $--gap;

				p {
					font-size: $--fz_xm;
				}
			}

			&__body {
				max-height: 26rem;

				.row {
					grid-template-columns: $--first-col-width 75fr;

					.cell {
						font-size: $--fz_xm;
					}
				}
			}
		}
	}
}
</style>