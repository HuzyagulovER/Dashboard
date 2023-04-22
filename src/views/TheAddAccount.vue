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
.add-account {
	height: 100%;
	width: 100%;

	@include grid-area(
		(settings-title, dashboard-title, accounts, form),
		(1fr, 9fr, 12fr, 88fr)
	);

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

			& + .accounts__account {
				margin-top: 0.8rem;
			}
		}
	}

	&__form {
		grid-area: form;
	}
}
</style>