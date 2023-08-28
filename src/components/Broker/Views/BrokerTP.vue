<template>
	<section class="broker-tp">
		<BaseBlock class="block grid-column-2 break desktop-w-80">
			<div class="block__item item">
				<div class="item__row flex-column mobile-flex-row">
					<label class="block__label label mobile-mr-2 mobile-mb-0" for="">
						Enabled
					</label>
					<BaseCheckbox />
				</div>
			</div>
			<div class="block__item item justify-center">
				<div class="item__row ">
					<BaseButton class="item__button button-create" @click="addProfit">Create take profit</BaseButton>
				</div>
			</div>
		</BaseBlock>
		<BaseBlock class="block separated-desktop grid-column-2 break" v-for="(profit, j, i) in profits" :key="j">
			<div class="block__item item">
				<div class="item__row">
					<p class="title">TakeProfit {{ i + 1 }}</p>
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">
						Quantity
					</label>
					<BaseSelect class="block__input">
						<option value="1">100</option>
					</BaseSelect>
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">
						Value
					</label>
					<BaseSelect class="block__input">
						<option value="1">1</option>
					</BaseSelect>
				</div>
			</div>
			<div class="block__item item">
				<div class="item__row flex-column mobile-flex-row">
					<label class="block__label label mobile-mr-2 mobile-mb-0" for="">
						Breakeven Enable
					</label>
					<BaseCheckbox />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">
						Breakeven Type
					</label>
					<BaseSelect class="block__input">
						<option value="1">Entry price</option>
					</BaseSelect>
				</div>
				<div class="item__row justify-start mt-a">
					<BaseButton class="item__button white-button button-delete" @click="removeProfit(j)">Delete</BaseButton>
				</div>
			</div>
		</BaseBlock>
	</section>
</template>

<script lang="ts" setup>
import BaseBlock from "@/components/Elements/BaseBlock.vue";
import BaseCheckbox from "@/components/Elements/BaseCheckbox.vue";
import BaseSelect from "@/components/Elements/BaseSelect.vue";
import BaseButton from "@/components/Elements/BaseButton.vue";
import { Ref, ref } from "vue";

const profits: Ref<{ [key: string | number]: {} }> = ref({})

function addProfit(): void {
	profits.value[+new Date()] = {}
}
function removeProfit(index: string | number): void {
	delete profits.value[index]
}
</script>

<style lang="scss" >
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/_mixins.scss";

.broker-tp {
	.block {
		.item {

			.button-create,
			.button-delete {
				width: auto;
				@include border-radius(medium);
				@include padding-sides(3rem, (right, left));

				@media screen and (min-width: $--mobile-breakpoint) {
					font-size: $--fz_m;
				}
			}

			.button-create {
				@include padding-sides(1.4rem, (top, bottom));

			}

			.button-delete {
				@media screen and (max-width: $--mobile-breakpoint) {
					@include padding-sides(4rem, (right, left));
					@include padding-sides(1.5rem, (top, bottom));
				}
			}
		}
	}
}
</style>