<template>
	<div class="broker-open">
		<BaseBlock class="block separated-desktop grid-column-2 break">
			<div class="block__item item">
				<div class="item__row flex-column">
					<label class="block__label label pr-m" for="">Quantity</label>
					<BaseSelect class="block__input yellow-border">
						<option value="1">Dunamic</option>
					</BaseSelect>
				</div>
				<div class="item__row flex-column mt-3">
					<BaseSelect class="item__select underlined-input">
						<option value="1">1</option>
					</BaseSelect>
				</div>
			</div>
			<div class="block__item item">
				<div class="item__row justify-start flex-column">
					<label class="block__label label pr-m" for="">Margin</label>
					<BaseSelect class="block__input">
						<option value="1">Isolated</option>
					</BaseSelect>
				</div>
				<div class="item__row justify-start flex-column">
					<label class="block__label label pr-m" for="">Leverage</label>
					<BaseSelect class="block__input">
						<option value="1">20</option>
					</BaseSelect>
				</div>
			</div>
		</BaseBlock>
	</div>
</template>

<script setup lang="ts">
import BaseBlock from "@/components/Elements/BaseBlock.vue";
import BaseSelect from "@/components/Elements/BaseSelect.vue";
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/_mixins.scss";
</style>