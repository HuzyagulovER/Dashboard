<template>
	<div class="exchanges">
		<p class="exchanges__title">Exchanges</p>
		<div class="exchanges__container">
			<div class="exchanges__item item _active">
				<div class="item__image">
					<img src="@/assets/images/ImageBinance.png" alt="Item image">
				</div>
				<p class="item__name">Binance Futures</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/_mixins.scss";
$width: 12.5rem;

.exchanges {
	display: flex;
	flex-direction: column;
	width: 12.5rem;

	&__title {
		text-align: center;
		padding: 1.5rem 0;

		font: {
			family: Gilroy_S;
			size: $--fz_xm;
		}
	}

	&__container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.item {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		padding: 1rem;
		cursor: pointer;

		&__image {
			display: flex;
			justify-content: center;
			margin-bottom: 1rem;
			width: $width*0.4;
			height: $width*0.4;

			img {
				width: 100%;
				height: 100%;
				object-fit: contain;
			}
		}

		&__name {
			font-size: $--fz_s;
		}
	}

	._active.item,
	.item:hover {
		background-color: $--c_grey-dark;

		.item__name {
			color: $--c_green;
		}
	}
}

@media screen and (max-width: $--mobile-breakpoint) {
	.exchanges {
		align-items: stretch;
		padding: 0 $--padding_modile_broker 2rem;

		&__title {
			font-size: 3.7rem;
			margin-right: 3rem;
			text-align: left;
		}

		&__container {
			display: grid;
			grid-template: 1fr / 1fr 1fr;
			gap: 1.5rem;
		}

		.item {
			flex-direction: row;
			padding: 1.4rem 1.4rem;
			@include border-radius(merge);

			$image-width: 7rem;

			&__image {
				margin-right: 1rem;
				margin-bottom: 0;
				width: $image-width;
				height: $image-width;
				min-width: $image-width;
				min-height: $image-width;
			}

			&__name {
				font-size: 1.6rem;
			}
		}
	}
}
</style>