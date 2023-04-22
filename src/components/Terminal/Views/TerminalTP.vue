<template>
	<section class="terminal-open">
		<BaseBlock class="block separated grid-column-2">
			<div class="block__item item">
				<div class="item__row flex-column">
					<label class="block__label label" for="">Включен</label>
					<BaseCheckbox />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Тип ордера</label>
					<BaseSelect class="block__input yellow-border">
						<option value="1">Stop Market</option>
					</BaseSelect>
				</div>
			</div>
			<div class="block__item item">
				<div class="item__row justify-start flex-column">
					<label class="block__label label pr-m" for="">
						Количество ордеров
					</label>
					<input type="text" class="underlined-input mt-m" />
				</div>
			</div>
		</BaseBlock>
		<BaseBlock class="block grid-column-2">
			<div class="block__item item">
				<div class="item__row justify-start flex-column">
					<BaseSelect class="block__input">
						<option value="1">Отступ цены %</option>
					</BaseSelect>
				</div>
				<div class="item__row justify-start">
					<input type="text" class="underlined-input" />
				</div>
			</div>
			<div class="block__item item">
				<div class="item__row justify-start flex-column">
					<BaseSelect class="block__input">
						<option value="1">Количество %</option>
					</BaseSelect>
				</div>
				<div class="item__row justify-start">
					<input type="text" class="underlined-input" />
				</div>
			</div>
		</BaseBlock>
		<BaseBlock class="block separated grid-column-2">
			<div class="block__item item">
				<div class="item__row justify-start flex-column">
					<label class="block__label label pr-m" for="">
						Перестановка уровня
					</label>
					<BaseCheckbox />
				</div>
			</div>
			<div class="block__item item">
				<div class="item__row justify-start flex-column">
					<label class="block__label label pr-m" for="">
						Обновление настроек по сигналу
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
import BaseSelect from "@/components/Elements/BaseSelect.vue";
</script>