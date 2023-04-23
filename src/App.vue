<template>
	<RouterView name="Navbar" />
	<RouterView />
</template>

<style lang="scss">
* {
	margin: 0;
	padding: 0;
	outline: 0;
	font-family: "Gilroy_R", Arial;
	font-size: calc(100vw / 120);
	box-sizing: border-box;
	color: $--c_greyish-white;

	&::-webkit-scrollbar {
		width: 0.5rem;
		background-color: transparent;

		&-thumb {
			background-color: $--c_yellow;
		}

		&-track {
			background: transparent;
		}
	}

	&::-webkit-scrollbar-button,
	&::-webkit-scrollbar-corner,
	&::-webkit-resizer {
		display: none;
	}
}

html,
body,
#app {
	width: 100%;
	height: 100%;
}

html {
	font-size: calc(100vw / 120);

	@media screen and (max-width: $--mobile-breakpoint) {
		font-size: calc(100vw / 60);
	}
}

body {
	background-color: $--c_main;
}

@media screen and (max-width: $--mobile-breakpoint) {
	html,
	body,
	#app {
		overflow: hidden;
	}
}
</style>
