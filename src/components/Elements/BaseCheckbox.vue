<template>
	<div class="checkbox">
		<input type="checkbox" class="checkbox__input" />
		<div class="checkbox__layout"></div>
		<div class="checkbox__toggler"></div>
	</div>
</template>

<style lang="scss">
@import "@/assets/scss/_variables.scss";

.checkbox {
	width: calc(var(--checkbox-height) / 0.4333);
	height: var(--checkbox-height);
	position: relative;
	border-radius: calc(var(--checkbox-height) / 2);
	overflow: hidden;

	&__layout,
	&__toggler {
		position: absolute;
		top: 0;
		left: 0;
		pointer-events: none;
	}

	&__layout {
		background-color: $--c_grey;
		width: 100%;
		height: 100%;
	}

	&__toggler {
		background-color: $--c_yellow;
		border-radius: 50%;
		height: var(--checkbox-height);
		width: var(--checkbox-height);
		transition: all 0.3s ease;
	}

	&__input {
		width: 100%;
		height: 100%;
		opacity: 0;
		cursor: pointer;
	}

	input:checked~.checkbox__toggler {
		left: 100%;
		transform: translateX(-100%);
	}
}
</style>