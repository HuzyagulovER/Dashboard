<template>
	<div class="settings-nav">
		<div class="settings-nav__container">
			<p class="settings-nav__subtitle">Основное</p>
			<div class="settings-nav__line line">
				<RouterLink class="line__link highlight-link" to="/settings/volume">
					<p>Объем</p>
				</RouterLink>
			</div>
			<div class="settings-nav__line line">
				<RouterLink class="line__link highlight-link" to="/settings/deal">
					<p>Сделки</p>
				</RouterLink>
			</div>
			<div class="settings-nav__line line">
				<RouterLink class="line__link highlight-link" to="/settings/gTrades">
					<p>gTrades</p>
				</RouterLink>
			</div>
			<div class="settings-nav__line line">
				<RouterLink class="line__link highlight-link" to="/settings/gVolume">
					<p>gVolume</p>
				</RouterLink>
			</div>
			<p class="settings-nav__subtitle">Временные рамки</p>
			<div class="settings-nav__line line">
				<RouterLink class="line__link highlight-link" to="/settings/choose-time">
					<p>Выбрать время</p>
				</RouterLink>
			</div>
			<p class="settings-nav__subtitle">Количество</p>
			<div class="settings-nav__line line">
				<RouterLink class="line__link highlight-link" to="/settings/choose-amount">
					<p>Выбрать количество</p>
				</RouterLink>
			</div>
			<p class="settings-nav__subtitle">Стретегии</p>
			<div class="settings-nav__line line">
				<RouterLink class="line__link line_strategy highlight-link" to="/settings/all-strategies">
					<p>Все</p>
				</RouterLink>
			</div>
			<div class="settings-nav__line line">
				<RouterLink class="line__link line_strategy highlight-link" to="/settings/rollback-strategy">
					<p>Откат</p>
				</RouterLink>
			</div>
			<div class="settings-nav__line line">
				<RouterLink class="line__link line_strategy highlight-link" to="/settings/flat-strategy">
					<p>Флэт</p>
				</RouterLink>
			</div>
			<div class="settings-nav__line line">
				<RouterLink class="line__link line_strategy highlight-link" to="/settings/katana-strategy">
					<p>Катана</p>
				</RouterLink>
			</div>
			<div class="settings-nav__line line">
				<RouterLink class="line__link line_strategy highlight-link" to="/settings/geisha-strategy">
					<p>Geisha</p>
				</RouterLink>
			</div>
			<div class="settings-nav__line line">
				<RouterLink class="line__link line_strategy highlight-link" to="/settings/musashi-strategy">
					<p>Musashi</p>
				</RouterLink>
			</div>
			<div class="settings-nav__line line">
				<RouterLink class="line__link line_strategy highlight-link" to="/settings/supertrend-strategy">
					<p>Supertrend</p>
				</RouterLink>
			</div>
			<div class="settings-nav__line line">
				<RouterLink class="line__link line_strategy highlight-link" to="/settings/alphatrend-strategy">
					<p>Alphatrend</p>
				</RouterLink>
			</div>
			<div class="settings-nav__line line flex-column line_filter">
				<p>Фильтр:</p>
				<input type="text" class="base-input" />
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
</script>


<style lang="scss">
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/_mixins.scss";

.settings-nav {
	grid-area: settings;
	@include border-sides(0.1rem, solid, $--c_grey-light, [right]);
	padding: 1rem 1rem;
	overflow-y: scroll;

	&__subtitle {
		color: $--c_grey-light;
		margin: 0 0 0.6rem -0.5rem;
		font-size: $--fz_xs;
		text-transform: uppercase;
		margin-left: 2.5rem;

		&~.settings-nav__subtitle {
			margin-top: 1rem;
		}
	}

	.line {
		display: flex;
		align-items: center;
		height: auto;
		width: 100%;

		&__link {
			color: $--c_greyish-white;
			font-size: $--fz_m;
			white-space: nowrap;
			width: 100%;
			padding: 0.55rem 0;
			display: flex;

			p {
				color: inherit;
				font: inherit;
				margin-left: 3.5rem;
			}
		}

		&_filter {
			margin-top: 1.5rem;
			padding: 0 2.5rem;
			align-items: flex-start;

			p {
				font-size: $--fz_m;
				font-weight: bold;
				margin-bottom: 0.5rem;
			}

			input {
				background-color: $--c_white;
				color: $--c_black;
				font-weight: bold;
				height: 2.5rem;
			}
		}

		&_strategy {
			padding: 0.4rem 0;
		}
	}
}

@media screen and (max-width: $--mobile-breakpoint) {
	.settings-nav {
		padding: 5rem;
		padding-top: 10rem !important;

		&__subtitle {
			font-size: $--fz_xm;

			&~.settings-nav__subtitle {
				margin-top: 1.5rem;
			}
		}

		.line {
			&__link {
				font-size: $--fz_xl + 0.2rem;
				padding: 1.5rem 0;

				p {
					margin-left: 5rem;
				}
			}

			&_strategy {
				padding: 1.3rem 0;
			}

			&_filter {
				margin-top: 3rem;

				p {
					font-size: calc($--fz_xl + .1rem);
					margin-bottom: 1.5rem;
				}

				input {
					height: auto;
					font-size: calc($--fz_l + .2rem);
					padding: 0.8rem 1rem;
					width: 80%;
					@include border-radius(medium);
				}
			}
		}
	}
}
</style>