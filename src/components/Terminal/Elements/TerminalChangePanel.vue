<template>
	<section class="terminal-change">
		<div class="terminal-change__wrapper">
			<BaseButton class="terminal-change__save">Сохранить</BaseButton>
		</div>
		<div class="terminal-change__wrapper">
			<BaseIconButton class="terminal-change__icon-container">
				<IconCopy class="terminal-change__icon" />
			</BaseIconButton>
			<BaseIconButton class="terminal-change__icon-container">
				<IconDownload class="terminal-change__icon" />
			</BaseIconButton>
			<BaseIconButton class="terminal-change__icon-container">
				<IconTrash class="terminal-change__icon icon-red" />
			</BaseIconButton>
		</div>
	</section>
</template>

<script lang="ts" setup>
import BaseIconButton from "@/components/Elements/BaseIconButton.vue";
import BaseButton from "@/components/Elements/BaseButton.vue";
import IconCopy from "@/components/Icons/IconCopy.vue";
import IconDownload from "@/components/Icons/IconDownload.vue";
import IconTrash from "@/components/Icons/IconTrash.vue";
</script>

<style lang="scss">
@import "@/assets/scss/_mixins.scss";
@import "@/assets/scss/_variables.scss";

.terminal-change {
	display: flex;
	justify-content: space-around;
	grid-area: change;
	@include border-sides(0.1rem, solid, $--c_grey-light, (right, bottom));

	&__icon {
		fill: $--c_white;
	}

	&__icon-container {
		&+& {
			margin-left: 1rem;
		}
	}

	.icon-red {
		fill: $--c_red;
	}

	&__save {
		background-color: $--c_grey-dark;
		color: $--c_yellow;
		@include border-radius(merge);
		padding: 0.81rem 1.75rem;

		font: {
			family: "Gilroy_R";
		}
	}

	&__wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
	}
}

@media screen and (max-width: $--mobile-breakpoint) {
	.terminal-change {
		&__icon-container {
			width: 3.4rem;
			height: 3.4rem;
			padding: 0.7rem;

			&+& {
				margin-left: 1rem;
			}
		}

		&__save {
			@include border-radius(merge);
			padding: 1rem 2.5rem;
			font-size: $--fz_l;
		}
	}
}
</style>