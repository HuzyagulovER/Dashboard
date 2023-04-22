<template>
	<section class="menu-telegram-bot">
		<BaseBlock
			class="menu-telegram-bot__block block separated grid-column-2 bot-info"
		>
			<div class="block__item item">
				<div class="item__row justify-center display-mxw-30">
					<img
						src="@/assets/images/ImageTelegram.png"
						alt=""
						width="404"
						height="246"
					/>
				</div>
			</div>
			<div class="block__item item">
				<div class="item__row flex-column">
					<p class="title yellow">У вас подключен телеграмм бот</p>
				</div>
				<div class="item__row flex-column">
					<input class="block__input input base-input" type="text" />
				</div>
				<div class="item__row flex-column">
					<p class="list-title">Ваши подписки:</p>
					<ul class="list">
						<li>статус ордера исполнен</li>
						<li>закрытие позиции</li>
						<li>инормация о входе в аккаунт, если не подключен 2FA</li>
					</ul>
				</div>
			</div>
		</BaseBlock>
		<BaseBlock
			class="menu-telegram-bot__block block separated grid-column-2 bot-change"
		>
			<div class="block__item item">
				<div class="item__row flex-column">
					<p class="title">Отключить телеграмм-бота</p>
					<p>&nbsp;</p>
				</div>
				<div class="item__row justify-start">
					<input
						class="underlined-input"
						type="text"
						placeholder="Код из телеграмма"
					/>
					<BaseButton class="small-button">отправить код</BaseButton>
				</div>
				<div class="item__row justify-start">
					<BaseButton class="button">Отключить бота</BaseButton>
				</div>
			</div>
			<div class="block__item item">
				<div class="item__row flex-column">
					<p class="title">Удалить телеграмм-бота</p>
					<RouterLink to="" class="no-access"
						>Нет доступа к телеграмм-боту?</RouterLink
					>
				</div>
				<div class="item__row justify-start">
					<input
						class="underlined-input"
						type="text"
						placeholder="Код из телеграмма"
					/>
					<BaseButton class="small-button">отправить код</BaseButton>
				</div>
				<div class="item__row justify-start">
					<BaseButton class="button">Удалить бота</BaseButton>
				</div>
			</div>
		</BaseBlock>
	</section>
</template>

<script lang="ts" setup>
import BaseBlock from "@/components/Elements/BaseBlock.vue";
import BaseButton from "@/components/Elements/BaseButton.vue";
</script>

<style lang="scss">
.menu-telegram-bot {
	.block {
		@include padding-sides(5rem, (left, right));
		margin-bottom: 3rem;
	}

	.bot-info {
		@include grid-sizes(1fr, 2fr 3fr);

		.title {
			font: {
				size: $--fz_l;
				family: "Gilroy_R";
				weight: normal;
			}
		}
		.input {
			width: 70%;
		}
		.list-title {
			font-size: $--fz_xm;
			margin-bottom: 0.8rem;
		}
		.list {
			list-style-position: inside;

			li {
				margin-left: 1rem;
				letter-spacing: 0.02rem;
			}
		}
	}

	.bot-change {
		.item {
			padding: 2rem 2rem 2rem 1rem;

			& + .item {
				padding: 2rem 1rem 2rem 3rem;
			}

			.title {
				margin-bottom: 0.3rem;
			}
		}

		input {
			width: 70%;
		}

		.small-button {
			background-color: $--c_white;
			margin-left: 2rem;
			padding: 0.6rem 1.2rem;
			width: auto;

			font: {
				size: $--fz_xs;
			}
		}

		.button {
			padding: 0.8rem 1.8rem;
			width: auto;

			font: {
				size: $--fz_s;
			}
		}

		.no-access {
			font-size: $--fz_s;
			color: $--c_grey-light;
		}
	}
}
</style>