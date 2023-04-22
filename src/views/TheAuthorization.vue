<template>
	<main class="authorization">
		<h1 class="title_large">Авторизация</h1>
		<form class="authorization__reg-form reg-form">
			<input
				type="text"
				class="reg-form__input base-input"
				placeholder="Login"
			/>
			<input
				type="text"
				class="reg-form__input base-input"
				placeholder="Password"
			/>
			<BaseButton class="reg-form__button">Войти</BaseButton>
			<div class="reg-form__wrapper">
				<RouterLink
					class="reg-form__subbutton base-subbutton"
					to="/registration"
				>
					Зарегестрироваться
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
.authorization {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
</style>