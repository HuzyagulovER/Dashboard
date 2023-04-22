<template>
	<section class="terminal-open">
		<BaseBlock class="block separated grid-column-2">
			<div class="block__item item">
				<div class="item__row flex-column">
					<label class="block__label label" for="">Включен</label>
					<BaseCheckbox />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Режим трейлинга</label>
					<BaseSelect class="block__input yellow-border">
						<option value="1">Тейк профит</option>
					</BaseSelect>
				</div>
			</div>
			<div class="block__item item">
				<div class="item__row justify-start flex-column">
					<label class="block__label label pr-m" for="">Активация в БУ</label>
					<BaseSelect class="block__input">
						<option value="1">С 1 ТП</option>
					</BaseSelect>
				</div>
				<div class="item__row justify-start flex-column">
					<label class="block__label label pr-m" for="">Каждый ТП</label>
					<BaseCheckbox />
				</div>
			</div>
		</BaseBlock>
		<BaseBlock class="block separated grid-column-2">
			<div class="block__item item">
				<div class="item__row justify-start flex-column">
					<label class="block__label label pr-m" for="">Тип ордера</label>
					<BaseSelect class="block__input yellow-border">
						<option value="1">Stop Market</option>
					</BaseSelect>
				</div>
				<div class="item__row justify-start flex-column">
					<label class="block__label label pr-m" for="">Действие над СА</label>
					<BaseSelect class="block__input">
						<option value="1">Выключено</option>
					</BaseSelect>
				</div>
			</div>
			<div class="block__item item">
				<div class="item__row">
					<p class="title">Ограничения</p>
				</div>
				<div class="item__row justify-start flex-column">
					<label class="block__label label pr-m" for="">
						Проверять прибыль?
					</label>
					<BaseCheckbox />
				</div>
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