<template>
	<section class="manu-2fa">
		<div class="manu-2fa__image">
			<img src="@/assets/images/ImageConfirm.png" alt="" width="242" height="493" />
		</div>

		<div class="manu-2fa__container">
			<p class="manu-2fa__title title_large yellow">2FA активирован</p>
			<BaseBlock class="manu-2fa__block block">
				<div class="block__item item">
					<div class="item__row flex-column justify-start">
						<p class="block__label label">
							Для отключения введите пароль от Вашей учетной записи:
						</p>
						<input class="block__input base-input input" type="text" placeholder="Ваш пароль" />
					</div>
					<div class="item__row flex-column justify-start">
						<p class="block__label label">
							Вставьте текущий код из Google Authenticator:
						</p>
						<input class="block__input base-input input" type="text" placeholder="Код из Google Authenticator" />
					</div>
				</div>
			</BaseBlock>
			<p class="manu-2fa__no-access">
				Нет доступа к приложению 2FA?
				<RouterLink class="yellow" to="">Вам сюда</RouterLink>
			</p>
		</div>
	</section>
</template>

<script lang="ts" setup>
import BaseBlock from "@/components/Elements/BaseBlock.vue";
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";

.manu-2fa {
	display: flex;
	justify-content: center;
	margin: auto 0;

	&__image {
		width: 15.125rem;
		height: 30.81rem;
		position: relative;
		margin-right: 5rem;

		img {
			width: 100%;
			height: 100%;
			object-fit: contain;
		}

		&::after {
			content: "";
			position: absolute;
			top: 103%;
			left: 50%;
			transform: translateX(-50%);
			width: 130%;
			height: 1.8rem;
			background: radial-gradient(closest-side,
					rgba($color: $--c_black, $alpha: 0.5) 0%,
					transparent 100%);
		}
	}

	&__container {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	&__title {
		letter-spacing: 0.07rem;
		color: $--c_yellow;
	}

	&__block {
		margin-bottom: 3rem;
	}

	&__no-access {
		margin-left: 3rem;
		font-size: $--fz_m;
		position: relative;

		a {
			font-size: inherit;
		}

		&::after {
			content: "";
			position: absolute;
			top: 120%;
			left: 50%;
			transform: translateX(-50%);
			width: 102%;
			height: 0.1rem;
			background-color: $--c_white;
		}
	}

	.block {
		padding: 2rem 5rem 2rem 2.5rem;

		.item {
			padding: 0;

			&__row {}
		}

		.input {
			width: 25rem;
		}
	}
}

@media screen and (max-width: $--mobile-breakpoint) {
	.manu-2fa {
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;

		&__image {
			width: 25rem;
			height: auto;
			margin: 0 0 5rem;
		}

		&__container {
			width: 100%;
		}

		&__title {
			letter-spacing: 0.07rem;
			margin-left: 5rem;
		}

		&__block {
			margin-bottom: 3rem;
			width: 100%;
		}

		&__no-access {
			font-size: $--fz_xm;
			letter-spacing: 0.08rem;
		}

		.block {
			padding: 3rem 4rem;

			.item {
				padding: 0;
			}

			.input {
				width: 35rem;
				padding: 1rem;
			}
		}
	}
}
</style>