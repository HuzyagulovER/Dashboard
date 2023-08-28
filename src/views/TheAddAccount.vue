<template>
	<main class="add-account">
		<div class="add-account__settings-title">
			<p class="yellow">Настройки</p>
		</div>
		<div class="add-account__dashboard-title">
			<p>Dashboard</p>
		</div>
		<div class="add-account__accounts accounts">
			<BaseButton class="accounts__button">Добавить аккаунт</BaseButton>
			<div class="accounts__list">
				<RouterLink class="accounts__account" to="">Аккаунт 1</RouterLink>
				<RouterLink class="accounts__account" to="">Аккаунт 2</RouterLink>
				<RouterLink class="accounts__account" to="">Аккаунт 3</RouterLink>
			</div>
		</div>
		<AddAccountForm class="add-account__form" />
	</main>
</template>

<script lang="ts" setup>
import AddAccountForm from "@/components/AddAccount/AddAccountForm.vue";
import BaseButton from "@/components/Elements/BaseButton.vue";
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/_mixins.scss";

.add-account {
	height: 100%;
	width: 100%;

	@include grid-area((settings-title, dashboard-title, accounts, form),
		(1fr, 9fr, 12fr, 88fr));

	&__settings-title {
		grid-area: settings-title;
		@include border-sides(0.1rem, solid, $--c_grey-light, (right, bottom));
		display: flex;
		justify-content: center;
		align-items: center;

		p {
			font: {
				family: "Gilroy_S";
				size: $--fz_xm;
			}
		}
	}

	&__dashboard-title {
		grid-area: dashboard-title;
		@include border-sides(0.1rem, solid, $--c_grey-light, (bottom));
		display: flex;
		align-items: center;
		padding: 0 4.19rem;

		p {
			font: {
				size: $--fz_m;
			}
		}
	}

	.accounts {
		grid-area: accounts;
		@include border-sides(0.1rem, solid, $--c_grey-light, (right));
		padding: 2rem 1rem;

		&__button {
			background-color: $--c_grey-dark;
			color: $--c_yellow;
			@include border-radius(medium);
			text-transform: uppercase;
			margin-bottom: 2rem;

			font: {
				family: "Gilroy_S";
				size: $--fz_xs;
			}
		}

		&__list {
			display: flex;
			flex-direction: column;
		}

		&__account {
			text-align: center;
			color: $--c_white;

			font: {
				family: "Gilroy_S";
				size: $--fz_s;
			}

			&+.accounts__account {
				margin-top: 0.8rem;
			}
		}
	}

	&__form {
		grid-area: form;
	}

	.form {
		.buttons {
			&__button {
				padding: 1.5rem 1.2rem;
			}
		}

		.block {

			.input,
			.select-input {
				font-size: $--fz_m !important;
			}
		}
	}
}

@media screen and (max-width: $--mobile-breakpoint) {
	.add-account {
		grid-template:
			"settings-title dashboard-title" auto
			"accounts accounts" auto
			"form form" auto / 1fr 1fr;

		&__settings-title,
		&__dashboard-title {
			display: block;
			padding: 4rem 0 3rem;
			border: 0;

			p {
				text-align: center;

				font: {
					size: $--fz_xl;
				}
			}
		}

		.accounts {
			padding: 0 3rem 3rem;
			display: flex;
			justify-content: center;
			border: 0;
			@include border-sides(0.1rem, solid, $--c_grey-light, (bottom));

			&>*+*,
			&__list>*+* {
				margin-left: 2rem;
			}

			&__button {
				margin-bottom: 0;
				width: auto;

				font: {
					size: $--fz_m;
				}
			}

			&__list {
				flex-direction: row;
				align-items: center;
			}

			&__account {
				margin-top: 0 !important;

				font: {
					size: $--fz_m;
				}
			}
		}

		.form {
			.block {

				.select-input {
					select {
						font-size: $--fz_m !important;
					}
				}
			}
		}
	}
}
</style>