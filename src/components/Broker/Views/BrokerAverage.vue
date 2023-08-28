<template>
	<section class="broker-average">
		<BaseBlock class="block separated-desktop grid-column-2 break">
			<div class="block__item item">
				<div class="item__row flex-column mobile-flex-row">
					<label class="block__label label mobile-mr-2 mobile-mb-0" for="">
						Enabled
					</label>
					<BaseCheckbox />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Order Type</label>
					<BaseSelect class="block__input yellow-border">
						<option value="1">Limit</option>
					</BaseSelect>
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Order Size ($)</label>
					<input class="block__input underlined-input mt-1" type="text" />
				</div>
			</div>
			<div class="block__item item">
				<div class="item__row flex-column">
					<label class="block__label label" for="">Updater</label>
					<BaseSelect class="block__input yellow-border">
						<option value="1">Off</option>
					</BaseSelect>
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Amount Factor</label>
					<BaseSelect class="block__input">
						<option value="1">6</option>
					</BaseSelect>
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Density</label>
					<BaseSelect class="block__input">
						<option value="1">1</option>
					</BaseSelect>
				</div>
			</div>
		</BaseBlock>
		<BaseBlock class="block separated-desktop grid-column-2 break">
			<div class="block__item item">
				<div class="item__row flex-column">
					<label class="block__label label" for="">Orders Amount</label>
					<BaseSelect class="block__input">
						<option value="1">5</option>
					</BaseSelect>
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Order Cancel (in ms)</label>
					<BaseSelect class="block__input">
						<option value="1">-1</option>
					</BaseSelect>
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">First Price</label>
					<BaseSelect class="block__input">
						<option value="1">0</option>
					</BaseSelect>
				</div>
			</div>
			<div class="block__item item">
				<div class="item__row flex-column">
					<label class="block__label label" for="">Last Price</label>
					<BaseSelect class="block__input">
						<option value="1">0</option>
					</BaseSelect>
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Percent Distance</label>
					<BaseSelect class="block__input">
						<option value="1">1</option>
					</BaseSelect>
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Candle Price</label>
					<BaseSelect class="block__input yellow-border">
						<option value="1">Close</option>
					</BaseSelect>
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

<style lang="scss" >
.broker-average {}
</style>