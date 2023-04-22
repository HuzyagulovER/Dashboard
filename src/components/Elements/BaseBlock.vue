<template>
	<div class="base-block">
		<slot />
	</div>
</template>

<style lang="scss">
$row-gap: 1rem;
$column-gap: 4.7rem;

.base-block {
	background-color: $--c_grey-dark;
	@include border0-radius(large);
	padding: 1rem 2rem;
	gap: $row-gap $column-gap;

	.title {
		font: {
			family: "Orbitron_S", Arial;
			weight: bold;
			size: $--fz_xl;
		}
		position: relative;
		align-self: flex-start;
	}

	.rounded-number {
		font: {
			family: "Orbitron_S";
			size: $--fz_l;
		}
		position: absolute;
		z-index: 2;
		color: $--c_grey;
		margin-left: 1.5rem;
		top: 50%;
		left: 100%;
		transform: translateY(-50%);
		line-height: $--fz_l;
		width: $--fz_l;
		height: $--fz_l;
		text-align: center;

		&::after {
			content: "";
			position: absolute;
			top: 50%;
			left: 50%;
			width: $--fz_l;
			height: $--fz_l;
			padding: 0.25rem;
			@include border0-radius(smedium);
			background-color: $--c_yellow;
			transform: translate(-50%, -50%);
			z-index: -1;
		}
	}
}
.separated.base-block {
	& > * {
		position: relative;

		& + * {
			&::after {
				content: "";
				position: absolute;
				top: 0;
				left: calc($column-gap / -2);
				height: 100%;
				width: calc($px);
				background: linear-gradient(
					to bottom,
					transparent 0%,
					$--c_grey-light 50%,
					transparent 100%
				);
			}
		}
	}
}

@for $i from 1 through 3 {
	.base-block.grid-column-#{$i} {
		@include grid(1, $i);
	}
}
</style>