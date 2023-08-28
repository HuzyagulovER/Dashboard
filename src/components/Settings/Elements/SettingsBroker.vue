<template>
	<div class="settings-broker popup">
		<div class="settings-broker__top-line top-line">
			<p class="top-line__title">Setting</p>
			<div class="top-line__back" @click="closeAlert">
				<IconCorner class="top-line__corner" />
			</div>
		</div>
		<div class="settings-broker__container">
			<p class="settings-broker__top-text">Создать оповещение для ZWCUSDT.P,1M</p>
		</div>
		<div class="settings-broker__container">
			<div class="settings-broker__pages pages">
				<div class="pages__container">
					<p>Настройки</p>
					<p>Уведомления
						<span class="notifications-number" v-if="notifications" :style="{ width: notificatinHeight + 'px' }"
							ref="notificationsEl">
							{{ notifications }}
						</span>
					</p>
				</div>

				<div class="pages__line"></div>
			</div>
			<div class="settings-broker__item item flex-column">
				<p class="item__name">Условие</p>
				<BaseSelect class="item__select">
					<option></option>
					<option value="1">Тейк профит</option>
				</BaseSelect>
				<input type="text" class="base-input" />
			</div>
			<div class="settings-broker__item item flex-column">
				<p class="item__name">Истечение срока</p>
				<BaseSelect class="item__select underlined">
					<option value="1">Бессрочное оповещение</option>
				</BaseSelect>
			</div>
			<div class="settings-broker__item item flex-column">
				<p class="item__name">Сообщение</p>
				<textarea type="text" class="base-input"></textarea>
				<p class="item__info">Вы можете использовать специальные плейсхолдеры, например, ((close)), ((time)),
					((plot_0)).</p>
			</div>
		</div>
		<div class="settings-broker__button-container">
			<BaseButton class="settings-broker__button">Создать</BaseButton>
			<BaseButton class="settings-broker__button not-fill" @click="closeAlert">Отмена</BaseButton>
		</div>
	</div>
</template>

<script lang="ts" setup>
import IconCorner from "@/components/Icons/IconCorner.vue";
import BaseButton from "@/components/Elements/BaseButton.vue";
import BaseSelect from "@/components/Elements/BaseSelect.vue";
import { ComputedRef, Ref, ref } from "vue";
import { computed } from "@vue/reactivity";

const emit = defineEmits<{
	close: []
}>();

const notifications: Ref<number> = ref(1);
const notificationsEl: Ref<null> = ref(null);
const notificatinHeight: ComputedRef<number> = computed(
	() => {
		return notifications.value && notificationsEl.value
			? parseFloat(window.getComputedStyle(notificationsEl.value).height)
			: 0
	}
)

function closeAlert() {
	emit("close");
}
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/_mixins.scss";

.settings-broker {
	display: flex;
	flex-direction: column;
	width: 27rem;
	height: auto;
	@include padding-sides(2rem, (right, bottom, left));
	align-self: flex-start;
	position: absolute;
	background-color: $--c_main;
	@include border-radius(merge);

	&>*+* {
		margin-top: 1rem;
	}

	.top-line {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1rem;

		&__title {
			background-color: $--c_grey;
			padding: 1.2rem 2.2rem;
			@include border0-radii(0, 0, medium, medium);
			margin-right: 2rem;

			font: {
				weight: bold;
				size: $--fz_m;
			}
		}

		&__back {
			width: 1.8rem;
			height: 1.8rem;
			padding: 0.3rem;
			@include border-with-radius(0.1rem, solid, $--c_yellow, small);
			display: flex;
			justify-content: center;
			align-items: center;
			transform: rotate(90deg);
			cursor: pointer;
		}

		&__corner {
			fill: $--c_yellow;
		}
	}

	&__top-text {
		font-size: calc($--fz_m - 0.2rem);
	}

	&__container {
		display: flex;
		flex-direction: column;
	}

	.pages {
		margin-bottom: 1.5rem;

		&__container {
			display: flex;
			justify-content: space-between;
			margin-bottom: .7rem;
		}

		p {
			display: flex;
			align-items: center;
			cursor: pointer;
			font-size: $--fz_s;
		}

		.notifications-number {
			display: block;
			text-align: center;
			background-color: $--c_yellow;
			border-radius: 50%;
			color: $--c_black;
			margin-left: .3rem;
			font-size: $--fz_s;
		}

		&__line {
			background-color: $--c_grey-dark;
			width: 100%;
			height: .4rem;
			border-radius: .25rem;
			position: relative;

			&::after {
				content: "";
				position: absolute;
				top: 0;
				left: 0;
				height: 100%;
				width: 30%;
				background-color: $--c_white;
				border-radius: .25rem;
			}
		}
	}

	.item {
		display: flex;
		align-self: flex-start;

		&:not(.flex-column) {
			align-items: center;
		}

		&.flex-column {
			.item__name {
				margin-bottom: 0.5rem;
			}
		}

		&__select {
			margin-bottom: 0.8rem;

			&.underlined {
				@include border-sides(.1rem, solid, $--c_grey-light, (bottom));

				* {
					background-color: transparent;
				}
			}
		}

		textarea {
			resize: none;
			padding: 0.4rem 0.8rem;
			min-height: 5rem;
			font-size: $--fz_s;
		}

		input {
			padding: 0.3rem 0.5rem;
			font-size: $--fz_s;
		}

		select {
			padding: 0.3rem 2.8rem 0.3rem 0.8rem;
			font-family: "Gilroy_R";
			font-size: $--fz_s;
		}

		&__info {
			font-size: $--fz_xxs;
			margin-top: .3rem;
			color: $--c_grey-light;
		}
	}

	.item+.item {
		margin-top: 1.5rem;
	}


	&__button-container {
		display: flex;
		justify-content: space-between;
	}

	&__button {
		font-size: $--fz_s;
		align-self: center;
		width: auto;
		padding: 0.5rem 2.3rem;

		&.not-fill {
			background-color: transparent;
			@include border-with-radius(0.1rem, solid, $--c_yellow, smedium);
			color: $--c_white;
		}
	}

	.item,
	&__button-container {
		width: 80%;

	}
}

@media screen and (max-width: $--mobile-breakpoint) {
	.settings-broker {
		width: 35rem;

		.top-line {
			&__title {
				font: {
					size: $--fz_xm;
				}
			}
		}

		&__top-text {
			font-size: calc($--fz_xm - 0.2rem);
		}

		.pages {

			p {
				font-size: $--fz_m;
			}

			.notifications-number {
				font-size: $--fz_m;
			}
		}

		.item {
			.item__name {
				font-size: $--fz_m;
			}

			&__select {

				.base-select__corner {
					width: 1.7rem;
				}
			}

			textarea {
				min-height: 7rem;
				font-size: $--fz_m;
			}

			input {
				font-size: $--fz_m;
			}

			select {
				font-size: $--fz_m;
			}

			&__info {
				font-size: $--fz_s;
			}
		}

		&__button {
			font-size: $--fz_m;
		}

		.item,
		&__button-container {
			width: 100%;
		}

	}
}
</style>