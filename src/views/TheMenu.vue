<template>
	<main class="menu">
		<div class="menu__burger-container burger-container">
			<BaseBurger :init-value="isActiveBurger" @toggle="(is) => (isActiveBurger = is)" />
		</div>

		<MenuNav class="menu__menu-nav mobile-menu" :class="{ _active: isActiveBurger }" />
		<RouterView class="menu__menu-main" />
	</main>
</template>

<script lang="ts" setup>
import MenuNav from "@/components/Menu/Elements/MenuNav.vue";
import BaseBurger from "@/components/Elements/BaseBurger.vue";
import { ref, Ref } from "vue";

let isActiveBurger: Ref<boolean> = ref(false);
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";

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

@media screen and (max-width: $--mobile-breakpoint) {
	.menu {
		position: relative;
		display: flex;
		flex-direction: column;

		&__menu-main {
			padding: 1rem 3rem 5rem;
			overflow-x: hidden;
		}

		.block {
			.item {
				.title {
					font-size: $--fz_l;
				}
			}
		}
	}
}
</style>