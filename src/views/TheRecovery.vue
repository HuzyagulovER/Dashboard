<template>
	<main class="registration">
		<h1 class="title_large">Восстановить</h1>
		<form class="authorization__reg-form reg-form">
			<input
				type="text"
				class="reg-form__input base-input"
				placeholder="Email"
			/>
			<BaseButton class="reg-form__button">Отправить код</BaseButton>
			<div class="reg-form__wrapper">
				<RouterLink
					class="reg-form__subbutton base-subbutton"
					to="/authorization"
				>
					Авторизоваться
				</RouterLink>
				<RouterLink
					class="reg-form__subbutton base-subbutton"
					to="/registration"
				>
					Зарегестрироваться
				</RouterLink>
			</div>
		</form>
	</main>
</template>

<script lang="ts" setup>
import BaseButton from "@/components/Elements/BaseButton.vue";
</script>

<style lang="scss" >
.registration {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
</style>