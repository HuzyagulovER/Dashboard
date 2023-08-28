<template>
	<div class="broker-buttons">
		<BaseButton class="broker-buttons__button">Save</BaseButton>
		<BaseButton class="broker-buttons__button" @click="emit('removeRecord')">Delete</BaseButton>
	</div>
</template>

<script setup lang="ts">
import BaseButton from "@/components/Elements/BaseButton.vue";

const emit = defineEmits<{
	removeRecord: []
}>();
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/_mixins.scss";

.broker-buttons {
	display: flex;
	align-items: center;
	@include border-sides(0.1rem, solid, $--c_grey-light, (bottom, right));
	padding: 1.2rem;

	&__button {
		background-color: $--c_white;
		padding: 0.9rem;

		font: {
			family: Gilroy_R;
			weight: bold;
			size: calc($--fz_m - .2rem);
		}
	}

	&__button+&__button {
		margin-left: 1rem;
	}
}

@media screen and (max-width: $--mobile-breakpoint) {
	.broker-buttons {
		background-color: $--c_main-light;
		padding: 2rem $--padding_modile_broker;
		border: 0;

		&__button {
			background-color: $--c_white;
			@include border-radius(merge);
			padding: 1.9rem;

			font: {
				size: calc($--fz_l + .2rem);
			}
		}


		&__button+&__button {
			margin-left: 1.5rem;
		}

	}
}
</style>