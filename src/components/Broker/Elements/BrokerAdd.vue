<template>
	<div class="add">
		<BaseButton class="add__button" @click="emit('addRecord')">Add</BaseButton>
		<div class="add__container">
			<div class="add__item item" v-for="(alert, i) in alerts" :key="i">
				<p class="item__name">New Alert</p>
				<BaseCheckboxTick class="item__value" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import BaseCheckboxTick from "@/components/Elements/BaseCheckboxTick.vue";
import BaseButton from "@/components/Elements/BaseButton.vue";
import { toRefs } from "vue";

declare type Record = { [key: string | number]: {} }

const emit = defineEmits<{
	addRecord: []
}>();
const props = defineProps<{
	alerts: Record;
}>();
const { alerts } = toRefs(props)

</script>

<style lang="scss" >
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/_mixins.scss";

.add {
	background-color: $--c_main-light;
	padding: 1.5rem 0.4rem;
	width: 12.5rem;
	overflow: auto;

	& &__button {
		padding: .8rem;

		font: {
			family: Gilroy_R;
			weight: bold;
			size: $--fz_m;
		}

		margin-bottom: 4rem;
	}

	&__container {
		display: flex;
		flex-direction: column;
		padding: 0 1rem 0 1.5rem;
	}

	.item {
		display: flex;
		justify-content: space-between;
		align-items: center;

		&__name {
			font-size: calc($--fz_xm - .2rem);
		}

		&+.item {
			margin-top: 1.5rem;
		}
	}
}

@media screen and (max-width: $--mobile-breakpoint) {
	.add {
		padding: 3rem $--padding_modile_broker;
		overflow: unset;

		& &__button {
			font-size: calc($--fz_xl + .5rem);
			margin-bottom: 3rem;
			padding: 1.7rem;
			@include border-radius(merge);
		}

		.item {
			&__name {
				font-size: $--fz_xl;
			}

			&__value {
				width: 3rem;
				height: 3rem;
			}

			&+.item {
				margin-top: 1.5rem;
			}
		}
	}
}
</style>