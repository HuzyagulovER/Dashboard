<template>
	<div class="burger" @click="toggleMenu">
		<div class="burger__line line-1"></div>
		<div class="burger__line line-2"></div>
		<div class="burger__line line-3"></div>
	</div>
</template>

<script lang="ts" setup>
import { ref, Ref, watch, toRefs } from "vue";
import { useRoute } from "vue-router";

const props = defineProps<{
	initValue: boolean;
}>();
const { initValue } = toRefs(props)
const route = useRoute();
const emit = defineEmits<{
	toggle: [isActive: boolean]
}>();

let isActiveBurger: Ref<boolean> = ref(false);
isActiveBurger.value = initValue.value;

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
@import "@/assets/scss/_variables.scss";
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
		border-radius: $burger-width * 0.15;
		background-color: $--c_yellow;
	}
}

@media screen and (max-width: $--mobile-breakpoint) {
	.burger {
		display: flex;
	}
}
</style>