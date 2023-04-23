<template>
	<p class="base-button" @click.prevent="false">
		<slot />
	</p>
</template>

<style lang="scss">
.base-button {
	text-align: center;
	padding: 1.2rem;
	background-color: $--c_yellow;
	width: 100%;
	color: $--c_black;
	@include border-radius(smedium);
	cursor: pointer;
	white-space: nowrap;
	font: {
		size: $--fz_xm;
		family: "Gilroy_B";
	}

	&.rounded {
		background-color: transparent;
		@include border(0.1rem, solid, $--c_yellow);
		color: $--c_white;
	}
}

@media screen and (max-width: $--mobile-breakpoint) {
	.base-button {
		font: {
			size: $--fz_xm;
		}
	}
}
</style>