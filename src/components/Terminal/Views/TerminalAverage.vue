<template>
	<section class="terminal-average">
		<BaseBlock class="block separated-desktop grid-column-2 break">
			<div class="block__item item">
				<div class="item__row flex-column mobile-flex-row">
					<label class="block__label label mobile-mr-2 mobile-mb-0" for="">
						Включен
					</label>
					<BaseCheckbox />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Ордер/сетка</label>
					<input
						class="block__input input base-input yellow-border"
						type="text"
					/>
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Свойства ордера</label>
					<input class="block__input input base-input" type="text" />
				</div>
			</div>
			<div class="block__item item">
				<div class="item__row flex-column">
					<label class="block__label label" for="">Количество</label>
					<input
						class="block__input input base-input yellow-border"
						type="text"
					/>
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Тип ордера</label>
					<input class="block__input input base-input" type="text" />
				</div>
			</div>
		</BaseBlock>
		<BaseBlock class="block separated-desktop grid-column-2 break">
			<div class="block__item item">
				<div class="item__row">
					<p class="title">Ограничения</p>
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">
						Максимальный размер позиции
					</label>
					<input
						class="block__input input base-input yellow-border"
						type="text"
					/>
				</div>
				<div class="item__row flex-column">
					<BaseSelect class="block__input">
						<option value="1">Автоотмена выключена</option>
					</BaseSelect>
				</div>
			</div>
			<div class="block__item item">
				<div class="item__row mobile-display-none">
					<p class="title">&nbsp;</p>
				</div>
				<div class="item__row flex-column mobile-mt-0">
					<label class="block__label label" for="">
						Усреднение с открытыми СА ордерами
					</label>
					<input
						class="block__input input base-input yellow-border"
						type="text"
					/>
				</div>
				<div class="item__row">
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