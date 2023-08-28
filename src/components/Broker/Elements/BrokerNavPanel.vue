<template>
	<nav class="broker-nav">
		<div class="broker-nav__container">
			<RouterLink class="broker-nav__link" to="/broker/open">
				<p class="broker-nav__link_text">Open</p>
			</RouterLink>
			<RouterLink class="broker-nav__link" to="/broker/average">
				<p class="broker-nav__link_text">Average</p>
			</RouterLink>
			<RouterLink class="broker-nav__link" to="/broker/sl">
				<p class="broker-nav__link_text">SL</p>
			</RouterLink>
			<RouterLink class="broker-nav__link" to="/broker/slx">
				<p class="broker-nav__link_text">SLX</p>
			</RouterLink>
			<RouterLink class="broker-nav__link" to="/broker/tp">
				<p class="broker-nav__link_text">TP</p>
			</RouterLink>
		</div>
	</nav>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/_mixins.scss";

.broker-nav {
	grid-area: nav;
	@include border-sides(0.1rem, solid, $--c_grey-light, (bottom));
	@include padding-sides(0.75rem, (left, right, bottom));

	&__container {
		display: flex;
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
			.broker-nav__link_text {
				color: $--c_greyish-white;
				@include border0-radii(0, 0, merge, merge);
			}

			background-color: $--c_grey;
		}
	}
}

@media screen and (max-width: $--mobile-breakpoint) {
	.broker-nav {
		padding: 0 $--padding_modile_broker - 1rem;
		height: 6rem;
		border: 0;

		&__link {
			&_text {
				// font-size: $--fz_xm;
			}
		}
	}
}
</style>