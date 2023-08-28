<template>
	<nav class="menu-nav">
		<div class="menu-nav__container">
			<RouterLink class="menu-nav__link highlight-link" to="/menu/false">
				<div class="menu-nav__icon">
					<IconUser />
				</div>
				<p>Профили</p>
			</RouterLink>

			<RouterLink class="menu-nav__link highlight-link" to="/menu/false">
				<div class="menu-nav__icon">
					<IconKey />
				</div>
				<p>API ключи</p>
			</RouterLink>

			<RouterLink class="menu-nav__link highlight-link" to="/menu/false">
				<div class="menu-nav__icon">
					<IconSubscriptions />
				</div>
				<p>Подписки</p>
			</RouterLink>

			<RouterLink class="menu-nav__link highlight-link mt-1" to="/menu/2fa">
				<div class="menu-nav__icon">
					<Icon2FA />
				</div>
				<p>2FA</p>
			</RouterLink>

			<RouterLink class="menu-nav__link highlight-link mt-1" to="/menu/telegram-bot">
				<div class="menu-nav__icon">
					<IconTelegram />
				</div>
				<p>Телеграмм-бот</p>
			</RouterLink>

			<RouterLink class="menu-nav__link highlight-link mt-1" to="/menu/telegram-bot-create">
				<div class="menu-nav__icon">
					<IconChangePass />
				</div>
				<p>Сменить пароль</p>
			</RouterLink>

			<RouterLink class="menu-nav__link highlight-link" to="/menu/false">
				<div class="menu-nav__icon">
					<IconSecretWord />
				</div>
				<p>Секретное слово</p>
			</RouterLink>

			<RouterLink class="menu-nav__link highlight-link" to="/menu/false">
				<div class="menu-nav__icon">
					<IconSession />
				</div>
				<p>Сеансы</p>
			</RouterLink>

			<RouterLink class="menu-nav__link highlight-link" to="/menu/false">
				<div class="menu-nav__icon">
					<IconReload />
				</div>
				<p>Перезагрузить аккаунт</p>
			</RouterLink>

			<div class="menu-nav__line mt-3">
				<RouterLink class="menu-nav__link highlight-link out-link" to="/menu/false">
					<div class="menu-nav__icon">
						<IconOut />
					</div>
					<p>Выход</p>
				</RouterLink>
			</div>
		</div>
	</nav>
</template>

<script lang="ts" setup>
import IconUser from "@/components/Icons/IconUser.vue";
import IconKey from "@/components/Icons/IconKey.vue";
import Icon2FA from "@/components/Icons/Icon2FA.vue";
import IconChangePass from "@/components/Icons/IconChangePass.vue";
import IconOut from "@/components/Icons/IconOut.vue";
import IconReload from "@/components/Icons/IconReload.vue";
import IconSecretWord from "@/components/Icons/IconSecretWord.vue";
import IconSession from "@/components/Icons/IconSession.vue";
import IconSubscriptions from "@/components/Icons/IconSubscriptions.vue";
import IconTelegram from "@/components/Icons/IconTelegram.vue";
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/_mixins.scss";

$link-margin-left: 2.4rem;
$link-padding-vertical: 1rem;
$link-padding-horizontal: 1rem;
$link-padding: $link-padding-vertical $link-padding-horizontal;
$icon-size: 1.8rem;

.menu-nav {
	padding: 2rem 1rem;
	@include border-sides(0.1rem, solid, $--c_grey, (right));

	&__container {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	&__icon {
		width: $icon-size;
		height: $icon-size;
		position: relative;

		&::after {
			content: "";
			position: absolute;
			top: 50%;
			right: -($link-margin-left/2);
			transform: translateY(-50%);
			width: $px;
			height: 100%;
			background-color: $--c_whitish-grey;
		}

		&>* {
			width: 100%;
			height: 100%;
			fill: $--c_white;
		}
	}

	&__link {
		display: flex;
		align-items: center;
		padding: $link-padding;
		width: 100%;

		&.out-link {
			* {
				fill: $--c_red !important;
			}
		}

		p {
			color: $--c_white;
			font-size: $--fz_xm;
			margin-left: $link-margin-left;
		}

		&.router-link-active {
			.menu-nav__icon {
				&::after {
					background-color: $--c_yellow !important;
				}
			}

			svg {
				fill: $--c_yellow !important;
			}

			p {
				color: $--c_yellow !important;
			}
		}
	}
}

@media screen and (max-width: $--mobile-breakpoint) {
	.menu-nav {
		padding: 0 5rem 2rem !important;

		&__icon {
			width: $icon-size + 1rem;
			height: $icon-size + 1rem;
		}

		&__link {
			padding: $link-padding-vertical + 0.8rem $link-padding-horizontal + 1.5rem;

			p {
				font-size: $--fz_xl !important;
			}
		}
	}
}
</style>