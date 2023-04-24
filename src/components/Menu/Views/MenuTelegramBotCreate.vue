<template>
	<section class="menu-telegram-bot-create">
		<div class="menu-telegram-bot-create__top-line">
			<p>
				Подключив Телеграм бота, вы сможете получать уведомления от Finandy.
				Также мы планируем реализовать торговлю через Телеграм.
				<br />
				<span class="yellow"
					>Если у вас уже есть Телеграм бот, то просто добавьте его токен на 5
					шаге и нажмите “Подключить телеграм бота”.</span
				>
			</p>
		</div>
		<div class="menu-telegram-bot-create__container">
			<BaseBlock
				class="menu-telegram-bot-create__block block menu-telegram-bot-create__step-1 step"
			>
				<div class="block__item item">
					<div class="item__row justify-center">
						<div class="step__image">
							<img
								src="@/assets/images/Empty.png"
								alt=""
								width="284"
								height="169"
							/>
						</div>
					</div>
				</div>
				<div class="block__item item">
					<div class="item__row">
						<p class="step__title title">Шаг 1</p>
					</div>
					<div class="item__row">
						<p class="step__text">
							Перейдите к созданию вашего <br />
							бота в телеграм и затем <br />
							нажмите начать внизу экрана
						</p>
					</div>
					<div class="item__row">
						<BaseButton class="step__button">Создать бота</BaseButton>
					</div>
				</div>
			</BaseBlock>

			<div class="menu-telegram-bot-create__wrapper">
				<BaseBlock
					class="menu-telegram-bot-create__block block grid-column-2 menu-telegram-bot-create__step-2 step"
				>
					<div class="block__item item">
						<div class="item__row justify-center">
							<div class="step__image">
								<img
									src="@/assets/images/Empty.png"
									alt=""
									width="284"
									height="169"
								/>
							</div>
						</div>
					</div>
					<div class="block__item item">
						<div class="item__row">
							<p class="step__title title">Шаг 2</p>
						</div>
						<div class="item__row">
							<p class="step__text">Отправьте команду</p>
						</div>
					</div>
				</BaseBlock>
				<BaseBlock
					class="menu-telegram-bot-create__block block grid-column-2 menu-telegram-bot-create__step-3 step"
				>
					<div class="block__item item">
						<div class="item__row justify-center">
							<div class="step__image">
								<img
									src="@/assets/images/Empty.png"
									alt=""
									width="284"
									height="169"
								/>
							</div>
						</div>
					</div>
					<div class="block__item item">
						<div class="item__row">
							<p class="step__title title">Шаг 3</p>
						</div>
						<div class="item__row">
							<p class="step__text">Отправьте имя бота или любое другое</p>
						</div>
					</div>
				</BaseBlock>
				<BaseBlock
					class="menu-telegram-bot-create__block block grid-column-2 menu-telegram-bot-create__step-4 step"
				>
					<div class="block__item item">
						<div class="item__row justify-center">
							<div class="step__image">
								<img
									src="@/assets/images/Empty.png"
									alt=""
									width="284"
									height="169"
								/>
							</div>
						</div>
					</div>
					<div class="block__item item">
						<div class="item__row">
							<p class="step__title title">Шаг 4</p>
						</div>
						<div class="item__row">
							<p class="step__text">Отправьте ID бота или любое другое</p>
						</div>
					</div>
				</BaseBlock>
				<BaseBlock
					class="menu-telegram-bot-create__block block grid-column-2 menu-telegram-bot-create__step-5 step"
				>
					<div class="block__item item">
						<div class="item__row justify-center">
							<div class="step__image">
								<img
									src="@/assets/images/Empty.png"
									alt=""
									width="284"
									height="169"
								/>
							</div>
						</div>
					</div>
					<div class="block__item item">
						<div class="item__row">
							<p class="step__title title">Шаг 5</p>
						</div>
						<div class="item__row">
							<p class="step__text">Скопируйте Токен бота в поле ниже</p>
						</div>
						<div class="item__row">
							<input
								type="text"
								class="underlined-input step__input"
								placeholder="Вставьте токен бота здесь"
							/>
						</div>
					</div>
				</BaseBlock>
			</div>
			<div class="menu-telegram-bot-create__button-plug">
				<BaseButton>Подключить телеграм бота</BaseButton>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
import BaseBlock from "@/components/Elements/BaseBlock.vue";
import BaseButton from "@/components/Elements/BaseButton.vue";
</script>

<style lang="scss">
.menu-telegram-bot-create {
	padding: 0;

	&__top-line {
		padding: 2.1rem 3.3rem 1.5rem;
		@include border-sides(0.1rem, solid, $--c_grey, bottom);

		p {
			font-size: calc($--fz_xm - 0.2rem);
		}
		span {
			font-size: inherit;
		}
	}

	&__container {
		padding: 2.1rem 3.3rem 1.5rem;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	&__wrapper {
		display: grid;
		grid-template: auto / 1fr 1fr;
		gap: 2.5rem;
		width: 100%;
		margin-bottom: 2rem;
	}

	&__step-1 {
		margin-bottom: 2.5rem;
		@include grid-sizes(auto, auto auto);
	}

	.block {
		padding: 2rem 3rem 2rem 2rem;
		gap: 1.5rem;

		.item {
			padding: 0;

			&__row + .item__row {
				margin-top: 1rem;
			}
		}
	}

	.step {
		&__image {
			width: 17.75rem;
			height: 10.56rem;
			margin-right: 1.5rem;

			img {
				width: 100%;
				height: 100%;
				object-fit: contain;
			}
		}

		&__wrapper {
			display: flex;
			flex-direction: column;
		}

		.title {
			text-transform: uppercase;
		}

		&__text {
			font-size: $--fz_m;
		}

		&__button {
			font-size: $--fz_s;
			padding: 0.8rem 1.5rem;
			width: auto;
			@include border0-radius(medium);
		}

		&__input {
			padding: 0.3rem;
		}
	}

	&__button-plug {
		display: flex;
		justify-content: center;
		width: 100%;

		.base-button {
			width: auto;
			@include border0-radius(merge);
			@include padding-sides(1.8rem, (left, right));
		}
	}
}

@media screen and (max-width: $--mobile-breakpoint) {
	.menu-telegram-bot-create {
		padding: 0;

		&__top-line {
			padding: 2.1rem 3.3rem 1.5rem;
			@include border-sides(0.1rem, solid, $--c_grey, bottom);

			p {
				font-size: calc($--fz_xm - 0.2rem);
			}
		}

		&__container {
			padding: 2.1rem 3.3rem 3rem;
			flex-direction: column;
		}

		&__wrapper {
			grid-template: auto / 1fr;
			margin-bottom: 4rem;
		}

		&__step-1 {
			@include grid-sizes(1fr, 1fr 1fr);
			width: 100%;
		}

		.step {
			padding: 3rem 2.5rem;

			&__image {
				width: 20rem;
				height: auto;
				margin-right: 0;
			}

			&__text {
				font-size: $--fz_xm;
			}

			&__button {
				font-size: $--fz_xm;
			}

			&__input {
				padding: 0.5rem;
				font-size: $--fz_m;
			}
		}

		&__button-plug {
			.base-button {
				font-size: $--fz_l;
				@include padding-sides(2.5rem, (left, right));
			}
		}
	}
}
</style>