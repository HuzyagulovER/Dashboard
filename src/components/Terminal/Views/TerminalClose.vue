<template>
	<section class="terminal-close">
		<BaseBlock class="block separated grid-column-2 break">
			<div class="block__item item">
				<div class="item__row flex-column mobile-flex-row">
					<label class="block__label label mobile-mr-2 mobile-mb-0" for="">
						Включен
					</label>
					<BaseCheckbox />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Тип ордера</label>
					<input class="block__input input base-input yellow-border" type="text" />
				</div>
			</div>
			<div class="block__item item">
				<div class="item__row flex-column">
					<label class="block__label label" for="">Объем открытия+объем позиции</label>
					<input class="block__input input base-input yellow-border" type="text" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Переворот/Закрытие позиции</label>
					<input class="block__input input base-input" type="text" />
				</div>
			</div>
		</BaseBlock>
		<p class="terminal-close__notice">
			Внимание! Следующая опция работает со ВСЕМИ открытыми позициями в
			аккаунте. Если этот параметр включен и полечен сигнал, то все открытые
			позиции будут закрыты (согласно нацстройки “Тип позиции”)
		</p>
		<BaseBlock class="block separated grid-column-2 break">
			<div class="block__item item">
				<div class="item__row mobile-display-none">
					<p class="title">&nbsp;</p>
				</div>
				<div class="item__row justify-start mobile-mt-0 mobile-flex-row">
					<label class="block__label label pr-m" for="">
						Закрыть все позиции
					</label>
					<BaseCheckbox />
				</div>
			</div>
			<div class="block__item item">
				<div class="item__row">
					<p class="title">Ограничения</p>
				</div>
				<div class="item__row justify-start mobile-flex-row">
					<label class="block__label label pr-m" for="">
						Проверять прибыль
					</label>
					<BaseCheckbox />
				</div>
			</div>
		</BaseBlock>
	</section>
</template>

<script lang="ts" setup>
import BaseBlock from "@/components/Elements/BaseBlock.vue";
import BaseCheckbox from "@/components/Elements/BaseCheckbox.vue";
</script>

<style lang="scss" >
@import "@/assets/scss/_variables.scss";

.terminal-close {
	&__notice {
		font-size: $--fz_s;
		color: $--c_yellow;
		padding: 0 6.75rem;
	}

	.block {
		.pr-m {
			padding-right: 1.5rem;
		}
	}
}

@media screen and (max-width: $--mobile-breakpoint) {
	.terminal-close {
		&__notice {
			font-size: $--fz_m;
			padding: 0 2.5rem;
		}
	}
}
</style>