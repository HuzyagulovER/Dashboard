<template>
	<section class="broker-slx">
		<BaseBlock class="block separated-desktop grid-column-2 break">
			<div class="block__item item">
				<div class="item__row flex-column mobile-flex-row">
					<label class="block__label label mobile-mr-2 mobile-mb-0" for="">
						Enabled
					</label>
					<BaseCheckbox />
				</div>
				<div class="item__row justify-start flex-column">
					<label class="block__label label pr-m" for="">Trailing Activate Percent</label>
					<BaseSelect class="block__input">
						<option value="1">1</option>
					</BaseSelect>
				</div>
			</div>
			<div class="block__item item">
				<div class="item__row justify-start flex-column">
					<label class="block__label label pr-m" for="">Trailing Stoploss Percent</label>
					<BaseSelect class="block__input">
						<option value="1">1</option>
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

<style lang="scss" scoped></style>