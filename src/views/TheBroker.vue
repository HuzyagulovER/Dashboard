<template>
	<section class="broker">
		<BrokerExchanges class="broker__exchanges" />
		<BrokerAdd class="broker__add" @add-record="addRecord" :alerts="records" />
		<div class="broker__container" v-if="recordsLength">
			<BrokerButtons class="broker__buttons" @remove-record="removeRecord" />
			<BrokerSettings class="broker__modify" />
			<BrokerNavPanel class="broker__nav-panel" />
			<div class="broker__page-view">
				<RouterView />
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import BrokerAdd from "@/components/Broker/Elements/BrokerAdd.vue";
import BrokerButtons from "@/components/Broker/Elements/BrokerButtons.vue";
import BrokerNavPanel from "@/components/Broker/Elements/BrokerNavPanel.vue";
import BrokerSettings from "@/components/Broker/Elements/BrokerSettings.vue";
import BrokerExchanges from "@/components/Broker/Elements/BrokerExchanges.vue";
import { ComputedRef, Ref, computed, ref } from "vue";

declare type Record = { [key: string | number]: {} }

const records: Ref<Record> = ref({})
const recordsLength: ComputedRef<number> = computed(() => {
	return Object.keys(records.value).length
})

function addRecord() {
	records.value[+new Date()] = {}
}
function removeRecord() {
	let keys: (string | number)[] = Object.keys(records.value);
	delete records.value[keys[keys.length - 1]]
}
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/_mixins.scss";

.broker {
	display: flex;
	width: 100%;
	height: 100%;

	&__container {
		flex: 1;
		@include grid-area((change, nav, settings, view), (6.25rem));
	}

	&__page-view {
		grid-area: view;
		padding: 1.8rem 1.8rem 1.8rem 1rem;
		overflow: auto;

		&>* {
			display: grid;
			row-gap: 1.2rem;
		}

		$gap: 10rem;

		.block {
			padding: 1rem 3rem;
			column-gap: $gap;

			.item {
				padding: 1rem 0 1.5rem;

				&__row+.item__row {
					margin-top: 1.5rem !important;
				}
			}

			&.separated-desktop.base-block>*+*::after {
				left: -($gap/2);
			}

			.title {
				letter-spacing: .05rem;

				font: {
					family: Gilroy_R;
					size: 1.8rem;
				}
			}

			.base-select__select {
				padding: 1rem 2.8rem 1rem 0.8rem !important;
			}
		}
	}
}

@media screen and (max-width: $--mobile-breakpoint) {
	.broker {
		overflow: auto;
		flex-direction: column;
		align-items: stretch;

		&>* {
			width: unset;
		}

		&__container {
			display: flex;
			flex-direction: column;
		}

		&__page-view {
			padding: 2rem 4rem;

			$gap: 10rem;

			.block {
				padding: 3rem 6rem;
				column-gap: $gap;

				.item {
					padding: 1rem 0 1.5rem;

					&__row+.item__row {
						margin-top: 2.5rem !important;
					}
				}

				&.separated-desktop.base-block>*+*::after {
					left: -($gap/2);
				}

				.title {
					letter-spacing: .05rem;

					font: {
						family: Gilroy_R;
						size: 1.8rem;
					}
				}

				.base-select__select {
					padding: 1rem 2.8rem 1rem 0.8rem !important;
				}
			}
		}
	}
}
</style>