<template>
	<section class="terminal-settings">
		<div class="terminal-settings__container">
			<p class="terminal-settings__subtitle">Основное</p>
			<div class="terminal-settings__line line">
				<p class="line__text">Включен</p>
				<div class="line__addition">
					<BaseCheckbox />
				</div>
			</div>
			<div class="terminal-settings__line line">
				<p class="line__text">Название</p>
				<div class="line__addition">
					<input type="text" class="underlined-input" />
				</div>
			</div>
			<div class="terminal-settings__line line">
				<p class="line__text">Пара</p>
				<div class="line__addition">
					<input type="text" class="underlined-input" />
				</div>
			</div>
			<div class="terminal-settings__line line line_column">
				<p class="line__text">Ордер</p>
				<div class="line__addition">
					<BaseSelect class="line__select">
						<option value="1">Стратегия_1</option>
						<option value="2">Стратегия_2</option>
					</BaseSelect>
				</div>
			</div>
			<div class="terminal-settings__line line line_url line_column">
				<p class="line__text yellow">URL сигнал</p>
				<div class="line__addition">
					<input type="text" class="underlined-input" />
				</div>
			</div>
			<div class="terminal-settings__line line line_signal line_column">
				<p class="line__text">Сообщение сигнала</p>
				<div class="line__addition">
					<textarea
						name=""
						id=""
						cols="30"
						rows="7"
						class="base-input"
					></textarea>
				</div>
			</div>
			<div class="terminal-settings__line line line_test">
				<div class="line__addition">
					<BaseSelect class="line__select fz_m">
						<option value="1">Тестовый сигнал</option>
					</BaseSelect>
				</div>
			</div>
			<div class="terminal-settings__line line line_pro">
				<div class="line__addition">
					<BaseSelect class="line__select fz_m yellow">
						<option value="1">PRO настройки</option>
					</BaseSelect>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
import BaseCheckbox from "@/components/Elements/BaseCheckbox.vue";
import BaseSelect from "@/components/Elements/BaseSelect.vue";
</script>


<style lang="scss">
.terminal-settings {
	grid-area: settings;
	@include border-sides(0.1rem, solid, $--c_grey-light, [right]);
	padding: 1rem 4rem;

	&__subtitle {
		color: $--c_grey-light;
		margin: 0 0 0.6rem -0.5rem;
		font-size: $--fz_xs;
		text-transform: uppercase;
	}

	.line {
		display: flex;
		align-items: center;
		height: auto;
		margin-bottom: 1rem;

		&__addition {
			width: 100%;
		}

		&__text {
			color: $--c_greyish-white;
			font-size: $--fz_xm;
			margin-right: 2rem;
			white-space: nowrap;
		}

		&_column {
			flex-direction: column;
			align-items: flex-start;

			.line__text {
				width: 100%;
				margin-bottom: 0.5rem;
				margin-right: 0;
			}
		}

		&__select {
			select {
				// font-size: $--fz_s;
				padding-left: 1.6rem;
			}
		}

		&_url {
			.line__text {
				font-family: "Gilroy_S" !important;
				margin-bottom: 0.8rem;
			}
			margin-top: 2.5rem;
		}

		&_signal {
			margin-top: 2.5rem;
			.line__text {
				text-align: center;
			}
			.base-input {
				resize: none;
			}
		}

		&_test {
			margin-top: 2.5rem;
		}

		&_pro {
			margin-top: 1.5rem;
		}
	}
}
</style>