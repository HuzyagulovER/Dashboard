<template>
	<div class="checkbox">
		<input type="checkbox" class="checkbox__input" />
		<div class="checkbox__layout"></div>
		<div class="checkbox__toggler"></div>
	</div>
</template>

<style lang="scss">
$checkbox-height: 1.625rem;
$checkbox-width: 3.75rem;

.checkbox {
	width: 3.75rem;
	height: $checkbox-height;
	position: relative;
	border-radius: $checkbox-height/2;
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
		height: $checkbox-height;
		width: $checkbox-height;
		transition: all 0.3s ease;
	}

	&__input {
		width: 100%;
		height: 100%;
		opacity: 0;
		cursor: pointer;
	}

	input:checked ~ .checkbox__toggler {
		left: 100%;
		transform: translateX(-100%);
	}
}
</style>