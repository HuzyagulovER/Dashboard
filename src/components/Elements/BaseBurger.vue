<template>
	<div class="burger" @click="toggleMenu">
		<div class="burger__line line-1"></div>
		<div class="burger__line line-2"></div>
		<div class="burger__line line-3"></div>
	</div>
</template>

<script lang="ts" setup>
/* eslint-disable */
import { inject, ref, Ref, watch } from "vue";
import { useRoute } from "vue-router";

const props = defineProps<{
	initValue: boolean;
}>();
const route = useRoute();
const emit = defineEmits(["toggle"]);

let isActiveBurger: Ref<boolean> = ref(false);
isActiveBurger.value = props.initValue;

watch(
	() => route.path,
	() => {
		isActiveBurger.value = false;
		emit("toggle", isActiveBurger.value);
	}
);

function toggleMenu(): void {
	isActiveBurger.value = !isActiveBurger.value;
	emit("toggle", isActiveBurger.value);
}
</script>


<style lang="scss" >
$burger-width: 3rem;
.burger {
	display: none;
	width: $burger-width;
	height: $burger-width;
	flex-direction: column;
	justify-content: space-around;
	z-index: 6;
	cursor: pointer;

	&__line {
		width: $burger-width;
		height: $burger-width * 0.15;
		@include border0-radius($burger-width * 0.15);
		background-color: $--c_yellow;
	}
}
@media screen and (max-width: $--mobile-breakpoint) {
	.burger {
		display: flex;
	}
}
</style>