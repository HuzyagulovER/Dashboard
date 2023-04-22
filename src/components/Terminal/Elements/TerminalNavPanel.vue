<template>
	<nav class="terminal-nav">
		<div class="terminal-nav__container">
			<RouterLink class="terminal-nav__link" to="/terminal/open">
				<p class="terminal-nav__link_text">Откр</p>
			</RouterLink>
			<RouterLink class="terminal-nav__link" to="/terminal/average">
				<p class="terminal-nav__link_text">Усред</p>
			</RouterLink>
			<RouterLink class="terminal-nav__link" to="/terminal/close">
				<p class="terminal-nav__link_text">Закр</p>
			</RouterLink>
			<RouterLink class="terminal-nav__link" to="/terminal/sl">
				<p class="terminal-nav__link_text">SL</p>
			</RouterLink>
			<RouterLink class="terminal-nav__link" to="/terminal/slx">
				<p class="terminal-nav__link_text">SLX</p>
			</RouterLink>
			<RouterLink class="terminal-nav__link" to="/terminal/tp">
				<p class="terminal-nav__link_text">TP</p>
			</RouterLink>
		</div>
	</nav>
</template>

<style lang="scss">
.terminal-nav {
	grid-area: nav;
	@include border-sides(0.1rem, solid, $--c_grey-light, (bottom));
	@include padding-sides(0.75rem, (left, right, bottom));

	&__container {
		display: flex;
		// justify-content: space-around;
		width: 100%;
		height: 100%;
	}

	&__link {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;

		&.router-link-active {
			color: $--c_greyish-white;
			@include border0-radii(0, 0, merge, merge);
		}

		&_text {
			color: $--c_grey-light;
			font-size: $--fz_l;
		}

		&.router-link-active {
			.terminal-nav__link_text {
				color: $--c_greyish-white;
				@include border0-radii(0, 0, merge, merge);
			}
			background-color: $--c_grey;
		}
	}
}
</style>