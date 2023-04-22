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
				<RouterLink
					class="line__link highlight-link"
					to="/settings/choose-time"
				>
					<p>Выбрать время</p>
				</RouterLink>
			</div>
			<p class="settings-nav__subtitle">Количество</p>
			<div class="settings-nav__line line">
				<RouterLink
					class="line__link highlight-link"
					to="/settings/choose-amount"
				>
					<p>Выбрать количество</p>
				</RouterLink>
			</div>
			<p class="settings-nav__subtitle">Стретегии</p>
			<div class="settings-nav__line line">
				<RouterLink
					class="line__link highlight-link"
					to="/settings/all-strategies"
				>
					<p>Все</p>
				</RouterLink>
			</div>
			<div class="settings-nav__line line">
				<RouterLink
					class="line__link highlight-link"
					to="/settings/rollback-strategy"
				>
					<p>Откат</p>
				</RouterLink>
			</div>
			<div class="settings-nav__line line">
				<RouterLink
					class="line__link highlight-link"
					to="/settings/flat-strategy"
				>
					<p>Флэт</p>
				</RouterLink>
			</div>
			<div class="settings-nav__line line">
				<RouterLink
					class="line__link highlight-link"
					to="/settings/katana-strategy"
				>
					<p>Катана</p>
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

		& ~ .settings-nav__subtitle {
			margin-top: 1.5rem;
		}
	}

	.line {
		display: flex;
		align-items: center;
		height: auto;
		width: 100%;

		&__link {
			color: $--c_greyish-white;
			font-size: $--fz_xm;
			white-space: nowrap;
			width: 100%;
			padding: 0.8rem 0;
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
				font-size: $--fz_xm;
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
	}
}
</style>