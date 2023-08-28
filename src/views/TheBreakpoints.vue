<template>
	<section class="breakpoints">
		<p class="breakpoints__title">Main breakpoints links:</p>
		<ul class="breakpoints__list">
			<li class="breakpoints__item">
				<RouterLink class="breakpoints__link" to="/menu">Menu</RouterLink>
			</li>
			<li class="breakpoints__item">
				<RouterLink class="breakpoints__link" to="/terminal">
					Terminal
				</RouterLink>
			</li>
			<li class="breakpoints__item">
				<RouterLink class="breakpoints__link" to="/settings">
					Settings
				</RouterLink>
			</li>
			<li class="breakpoints__item">
				<RouterLink class="breakpoints__link" to="/authorization">
					Authorization
				</RouterLink>
			</li>
			<li class="breakpoints__item">
				<RouterLink class="breakpoints__link" to="/broker">
					Broker
				</RouterLink>
			</li>
		</ul>
	</section>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

.breakpoints {
	padding: 3rem;

	& * {
		font-size: $--fz_xl;
	}

	&__title {
		margin-bottom: 2rem;
	}

	&__list {
		display: flex;
		flex-direction: column;
		list-style-position: inside;
	}

	&__item {
		margin-bottom: 2rem;
	}

	&__link {
		padding: 1rem;
		text-decoration: underline;
	}
}
</style>