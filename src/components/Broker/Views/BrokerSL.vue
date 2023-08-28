<template>
	<section class="broker-sl">
		<BaseBlock class="block separated-desktop grid-column-2 break">
			<div class="block__item item">
				<div class="item__row flex-column mobile-flex-row">
					<label class="block__label label mobile-mr-2 mobile-mb-0" for="">
						Enabled
					</label>
					<BaseCheckbox />
				</div>
			</div>
			<div class="block__item item">
				<div class="item__row justify-start flex-column">
					<label class="block__label label pr-m" for="">Price Type</label>
					<BaseSelect class="block__input">
						<option value="1">Isolated</option>
					</BaseSelect>
				</div>
				<div class="item__row justify-start flex-column">
					<BaseSelect class="block__input underlined-input">
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

<style lang="scss">
@import "@/assets/scss/_variables.scss";

.broker-sl {
	.block {
		@media screen and (min-width: $--mobile-breakpoint) {
			grid-template: auto/2fr 3fr !important;

			.item+.item {
				padding-left: 3rem;
				padding-right: 4rem;
			}
		}
	}
}
</style>