<template>
	<main class="menu">
		<MenuNav class="menu__menu-nav" />
		<RouterView class="menu__menu-main" />
	</main>
</template>

<script lang="ts" setup>
import MenuNav from "@/components/Menu/Elements/MenuNav.vue";
</script>

<style lang="scss">
.menu {
	display: flex;
	width: 100%;
	height: 100%;

	&__menu-nav {
		height: 100%;
		overflow: scroll;
	}

	&__menu-main {
		padding: 3rem;
		flex: 1;
		overflow: scroll;
	}

	.block {
		.item {
			.title {
				font-size: $--fz_xm;
				color: $--c_white;
			}
		}
	}
}
</style>