<template>
	<div class="graph">
		<div class="graph__top-line top-line">
			<p class="top-line__name">BTC/GBP</p>
			<p class="top-line__value"><span>10,093.18</span> GBP</p>
		</div>
		<div class="graph__main main">
			<IconGrade />
		</div>
		<div class="graph__bottom-line bottom-line">
			<p class="bottom-line__volume">Volume: <span>356</span> BTC</p>
			<p class="bottom-line__percent">1.17%</p>
		</div>
	</div>
</template>

<script lang="ts" setup>
import IconGrade from "@/components/Icons/IconGrade.vue";
</script>

<style lang="scss" >
@import "@/assets/scss/_variables.scss";

.graph {
	max-width: 34.38rem;
	max-height: 22.75rem;
	background-color: $--c_grey-dark;
	padding: 2rem 2rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	font-size: $--fz_m;
	color: $--c_grey-light;

	& * {
		font: {
			size: inherit;
			weight: bold;
		}

		color: inherit;
	}

	.top-line,
	.bottom-line {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	.top-line {
		&__name {
			letter-spacing: 0.05rem;
		}

		&__value {
			color: $--c_greyish-white;

			font: {
				size: $--fz_l;
				weight: normal;
			}

			letter-spacing: 0.15rem;

			span {
				font-weight: bold;
			}
		}
	}

	.main {
		margin: 1rem 0;
	}

	.bottom-line {
		align-items: center;

		&__volume {
			letter-spacing: 0.05rem;
			font-size: $--fz_xm;

			span {
				color: $--c_greyish-white;
			}
		}

		&__percent {
			letter-spacing: 0.15rem;
			color: $--c_green;
		}
	}
}

@media screen and (max-width: $--mobile-breakpoint) {
	.graph {
		padding: 2rem 2rem;
		font-size: $--fz_s;

		.top-line {
			&__name {
				letter-spacing: 0.05rem;
			}

			&__value {
				font: {
					size: $--fz_xm;
				}

				letter-spacing: 0.15rem;
			}
		}

		.main {
			margin: 1rem 0;
		}

		.bottom-line {
			&__volume {
				font-size: $--fz_m;
			}

			&__percent {}
		}
	}
}
</style>