<template>
	<main class="registration">
		<h1 class="title_large">Регистрация</h1>
		<form class="authorization__reg-form reg-form">
			<input type="text" class="reg-form__input base-input" placeholder="Login" /><input type="text"
				class="reg-form__input base-input" placeholder="Email" /><input type="text" class="reg-form__input base-input"
				placeholder="Password" />
			<BaseButton class="reg-form__button">Зарегестрироваться</BaseButton>
			<div class="reg-form__wrapper">
				<RouterLink class="reg-form__subbutton base-subbutton" to="/authorization">
					Авторизоваться
				</RouterLink>
				<RouterLink class="reg-form__subbutton base-subbutton" to="/recovery">
					Восстановить
				</RouterLink>
			</div>
		</form>
	</main>
</template>

<script lang="ts" setup>
import BaseButton from "@/components/Elements/BaseButton.vue";
</script>

<style lang="scss" >
@import "@/assets/scss/_mixins.scss";
@import "@/assets/scss/_variables.scss";

.registration {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	.reg-form {

		&__input,
		&__button {
			@include border-radius(medium);
		}

		&__subbutton {
			@include border-radius(smedium);

		}
	}
}
</style>