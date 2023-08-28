<template>
	<div class="add-account__form form">
		<BaseBlock class="block separated grid-column-3 column-1-3">
			<div class="block__item item">
				<div class="item__row">
					<p class="title">Ключи <span class="rounded-number">2</span></p>
					<IconArrowRtl class="item__arrow" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Публичный ключ</label>
					<input class="block__input input base-input yellow-border" type="text" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Секретный ключ</label>
					<input class="block__input input base-input" type="text" />
				</div>
				<div class="item__row flex-column">
					<BaseCheckbox />
				</div>
			</div>
			<div class="block__item item">
				<div class="item__row">
					<p class="title">Списки <span class="rounded-number">3</span></p>
					<IconArrowRtl class="item__arrow" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Тип списков</label>
					<BaseSelect class="block__input select-input">
						<option value="1"></option>
					</BaseSelect>
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Белый список</label>
					<input class="block__input input base-input" type="text" />
				</div>
			</div>
			<div class="block__item item">
				<div class="item__row">
					<p class="title">Трейлинг <span class="rounded-number">4</span></p>
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Трейлинг</label>
					<input class="block__input input base-input" type="number" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Процент отклонения трейлинг-стопа</label>
					<input class="block__input input base-input" type="number" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Процент активации трейлинг-стопа</label>
					<input class="block__input input base-input yellow-border" type="number" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Задержка для открытия позиции в свечах</label>
					<input class="block__input input base-input" type="number" />
				</div>
			</div>
		</BaseBlock>
		<BaseBlock class="block separated grid-column-3 column-1-3">
			<div class="block__item item">
				<label class="block__label label" for="">Язык</label>
				<BaseSelect class="block__input select-input">
					<option value="1"></option>
				</BaseSelect>
			</div>
			<div class="block__item item">
				<label class="block__label label" for="">Процент стоп-лосса</label>
				<input class="block__input input base-input" type="number" />
			</div>
			<div class="block__item item">
				<label class="block__label label" for="">Трейдинг</label>
				<input class="block__input input base-input yellow-border" type="number" />
			</div>
		</BaseBlock>

		<div class="form__column column-1-2">
			<BaseBlock class="block grid-column-1 column-1-2 p-l">
				<div class="item__row">
					<p class="title">Katana <span class="rounded-number">1</span></p>
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Katana Ba</label>
					<input class="block__input input base-input yellow-border" type="number" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Katana Sma P2</label>
					<input class="block__input input base-input" type="number" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Katana Sma P Bar</label>
					<input class="block__input input base-input" type="number" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Katana Sma P3</label>
					<input class="block__input input base-input" type="number" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Katana Sma P4</label>
					<input class="block__input input base-input" type="number" />
				</div>
			</BaseBlock>
			<BaseBlock class="block grid-column-1 column-1-2 p-l">
				<div class="item__row">
					<p class="title">Musashi <span class="rounded-number">3</span></p>
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Musashi Ema Toggle</label>
					<input class="block__input input base-input yellow-border" type="number" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Musashi Ema Source</label>
					<BaseSelect class="block__input select-input">
						<option value="1"></option>
					</BaseSelect>
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Musashi Ema Length</label>
					<input class="block__input input base-input" type="number" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Musashi Tts Toggle</label>
					<input class="block__input input base-input" type="number" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Musashi Tts Length</label>
					<input class="block__input input base-input" type="number" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Musashi Tts Multiplier</label>
					<input class="block__input input base-input" type="number" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Musashi Stc Toggle</label>
					<input class="block__input input base-input" type="number" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Musashi Stc Use Over Cond</label>
					<input class="block__input input base-input" type="number" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Musashi Stc Mode</label>
					<input class="block__input input base-input" type="number" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Musashi Stc Length</label>
					<input class="block__input input base-input" type="number" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Musashi Stc Fast Length</label>
					<input class="block__input input base-input" type="number" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Musashi Stc Slow Length</label>
					<input class="block__input input base-input" type="number" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Musashi Stc Overbought Level</label>
					<input class="block__input input base-input" type="number" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Musashi Stc Oversold Level</label>
					<input class="block__input input base-input" type="number" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Musashi Stc Overshoot Level</label>
					<input class="block__input input base-input" type="number" />
				</div>
			</BaseBlock>
			<BaseBlock class="block grid-column-1 column-1-2 p-l">
				<div class="item__row">
					<p class="title">Усреднение затрат</p>
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Усреднение затрат включено (1/0)</label>
					<input class="block__input input base-input yellow-border" type="number" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Тип усреднения затрат</label>
					<BaseSelect class="block__input select-input">
						<option value="1"></option>
					</BaseSelect>
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Объем усреднения затрат ($)</label>
					<input class="block__input input base-input" type="number" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Множитель количества усреднения затрат</label>
					<input class="block__input input base-input" type="number" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Автообновление уровней усреднения затрат</label>
					<BaseSelect class="block__input select-input">
						<option value="1"></option>
					</BaseSelect>
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Плотность усреднения затрат</label>
					<input class="block__input input base-input" type="number" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Количество ордеров в сетке</label>
					<input class="block__input input base-input" type="number" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Авто-отмена ордеров усреднения затрат</label>
					<input class="block__input input base-input" type="number" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Первая цена усреднения затрат</label>
					<input class="block__input input base-input" type="number" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Последняя цена усреднения затрат</label>
					<input class="block__input input base-input" type="number" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Шаг в % ордеров усреднения затрат</label>
					<input class="block__input input base-input" type="number" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Тип цены для просчета усреднения затрат</label>
					<BaseSelect class="block__input select-input">
						<option value="1"></option>
					</BaseSelect>
				</div>
			</BaseBlock>

			<BaseBlock class="block grid-column-1 column-1-2 p-l">
				<div class="item__row">
					<p class="title">Тейк-профит 1</p>
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Процент</label>
					<input class="block__input input base-input yellow-border" type="number" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Объем</label>
					<input class="block__input input base-input" type="number" />
				</div>
				<div class="item__row justify-start align-center">
					<label class="block__label label mr-2 mobile-mb-0" for="">Включен</label>
					<BaseCheckbox />
				</div>
				<div class="item__row justify-start align-center">
					<label class="block__label label mr-2 mobile-mb-0" for="">Включен безубыток</label>
					<BaseCheckbox />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Тип безубытка</label>
					<input class="block__input input base-input" type="number" />
				</div>
			</BaseBlock>
			<BaseBlock class="block grid-column-1 column-1-2 p-l">
				<div class="item__row">
					<p class="title">Тейк-профит 2</p>
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Процент</label>
					<input class="block__input input base-input yellow-border" type="number" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Объем</label>
					<input class="block__input input base-input" type="number" />
				</div>
				<div class="item__row justify-start align-center">
					<label class="block__label label mr-2 mobile-mb-0" for="">Включен</label>
					<BaseCheckbox />
				</div>
				<div class="item__row justify-start align-center">
					<label class="block__label label mr-2 mobile-mb-0" for="">Включен безубыток</label>
					<BaseCheckbox />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Тип безубытка</label>
					<input class="block__input input base-input" type="number" />
				</div>
			</BaseBlock>
			<BaseBlock class="block grid-column-1 column-1-2 p-l">
				<div class="item__row">
					<p class="title">Тейк-профит 3</p>
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Процент</label>
					<input class="block__input input base-input yellow-border" type="number" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Объем</label>
					<input class="block__input input base-input" type="number" />
				</div>
				<div class="item__row justify-start align-center">
					<label class="block__label label mr-2 mobile-mb-0" for="">Включен</label>
					<BaseCheckbox />
				</div>
				<div class="item__row justify-start align-center">
					<label class="block__label label mr-2 mobile-mb-0" for="">Включен безубыток</label>
					<BaseCheckbox />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Тип безубытка</label>
					<input class="block__input input base-input" type="number" />
				</div>
			</BaseBlock>
		</div>
		<div class="form__column column-2-3">
			<BaseBlock class="block grid-column-1 column-2-3 p-l">
				<div class="item__row">
					<p class="title">
						Geisha <span class="rounded-number">2</span>
					</p>
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Geisha interval</label>
					<input class="block__input input base-input yellow-border" type="number" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Geisha mult</label>
					<input class="block__input input base-input" type="number" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Geisha source</label>
					<BaseSelect class="block__input select-input">
						<option value="1"></option>
					</BaseSelect>
				</div>
			</BaseBlock>
			<BaseBlock class="block grid-column-1 column-2-3 p-l">
				<div class="item__row">
					<p class="title">
						Supertrend <span class="rounded-number">4</span>
					</p>
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Длина Супертренда</label>
					<input class="block__input input base-input yellow-border" type="number" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Источник Супертренда</label>
					<BaseSelect class="block__input select-input">
						<option value="1"></option>
					</BaseSelect>
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Множитель Супертренда</label>
					<input class="block__input input base-input" type="number" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Изменить метод расчета АТР Супертренда (1/0)</label>
					<input class="block__input input base-input" type="number" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Использовать Супертренд Фильтр (1/0)</label>
					<input class="block__input input base-input" type="number" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Длина Супертренд Фильтра</label>
					<input class="block__input input base-input" type="number" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Источник Супертренд Фильтра</label>
					<BaseSelect class="block__input select-input">
						<option value="1"></option>
					</BaseSelect>
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Множитель Супертренд Фильтра</label>
					<input class="block__input input base-input" type="number" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Изменить метод расчета АТР Супертренд Фильтра (1/0)</label>
					<input class="block__input input base-input" type="number" />
				</div>
			</BaseBlock>
			<BaseBlock class="block grid-column-1 column-2-3 p-l">
				<div class="item__row">
					<p class="title">
						Alphatrend <span class="rounded-number">5</span>
					</p>
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Длина Альфатренда</label>
					<input class="block__input input base-input yellow-border" type="number" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Источник Альфатренда</label>
					<BaseSelect class="block__input select-input">
						<option value="1"></option>
					</BaseSelect>
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Множитель Альфатренда</label>
					<input class="block__input input base-input" type="number" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Изменить метод расчета Альфатренда (1/0)</label>
					<input class="block__input input base-input" type="number" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Использовать Альфатренд Фильтр (1/0)</label>
					<input class="block__input input base-input" type="number" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Длина Альфатренд Фильтра</label>
					<input class="block__input input base-input" type="number" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Источник Альфатренд Фильтра</label>
					<BaseSelect class="block__input select-input">
						<option value="1"></option>
					</BaseSelect>
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Множитель Альфатренд Фильтра</label>
					<input class="block__input input base-input" type="number" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Изменить метод расчета Альфатренд Фильтра (1/0)</label>
					<input class="block__input input base-input" type="number" />
				</div>
			</BaseBlock>

			<BaseBlock class="block grid-column-1 column-2-3 p-l">
				<div class="item__row">
					<p class="title">
						ТП/СЛ <span class="rounded-number">3</span>
					</p>
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Использовать динамические ТП/СЛ (1/0)</label>
					<input class="block__input input base-input yellow-border" type="number" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Длина для динамических ТП/СЛ</label>
					<input class="block__input input base-input" type="number" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Процентное отклонение для динамических ТП/СЛ</label>
					<input class="block__input input base-input" type="number" />
				</div>
			</BaseBlock>
			<BaseBlock class="block grid-column-1 column-2-3 p-l">
				<div class="item__row">
					<p class="title">Маркет структура</p>
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Использовать Фильтр Маркет Структуры (1/0)</label>
					<input class="block__input input base-input yellow-border" type="number" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Длина фильтра маркет структуры</label>
					<input class="block__input input base-input" type="number" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Использовать реверс в Фильтре Маркет Структуры (1/0)</label>
					<input class="block__input input base-input" type="number" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Тикер Фильтра Маркет Структуры</label>
					<input class="block__input input base-input" type="text" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Таймфрейм Фильтра Маркет Структуры</label>
					<input class="block__input input base-input" type="text" />
				</div>
			</BaseBlock>
			<BaseBlock class="block grid-column-1 column-2-3 p-l">
				<div class="item__row">
					<p class="title">
						Дополнительно <span class="rounded-number">9</span>
					</p>
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Стратегия</label>
					<BaseSelect class="block__input select-input yellow-border">
						<option value="1"></option>
					</BaseSelect>
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Фильтр</label>
					<input class="block__input input base-input" type="text" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Объем сделки</label>
					<input class="block__input input base-input" type="number" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Тип объема сделки</label>
					<BaseSelect class="block__input select-input">
						<option value="1"></option>
					</BaseSelect>
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Плечо</label>
					<input class="block__input input base-input" type="number" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Таймфрейм</label>
					<input class="block__input input base-input" type="text" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Максимальное количество сделок</label>
					<input class="block__input input base-input" type="number" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Тип маржи</label>
					<BaseSelect class="block__input select-input">
						<option value="1"></option>
					</BaseSelect>
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Направления сделок</label>
					<BaseSelect class="block__input select-input">
						<option value="1"></option>
					</BaseSelect>
				</div>
			</BaseBlock>

			<BaseBlock class="block grid-column-1 column-2-3 p-l">
				<div class="item__row">
					<p class="title">Тейк-профит 4</p>
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Процент</label>
					<input class="block__input input base-input yellow-border" type="number" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Объем</label>
					<input class="block__input input base-input" type="number" />
				</div>
				<div class="item__row justify-start align-center">
					<label class="block__label label mr-2 mobile-mb-0" for="">Включен</label>
					<BaseCheckbox />
				</div>
				<div class="item__row justify-start align-center">
					<label class="block__label label mr-2 mobile-mb-0" for="">Включен безубыток</label>
					<BaseCheckbox />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Тип безубытка</label>
					<input class="block__input input base-input" type="number" />
				</div>
			</BaseBlock>
			<BaseBlock class="block grid-column-1 column-2-3 p-l">
				<div class="item__row">
					<p class="title">Тейк-профит 5</p>
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Процент</label>
					<input class="block__input input base-input yellow-border" type="number" />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Объем</label>
					<input class="block__input input base-input" type="number" />
				</div>
				<div class="item__row justify-start align-center">
					<label class="block__label label mr-2 mobile-mb-0" for="">Включен</label>
					<BaseCheckbox />
				</div>
				<div class="item__row justify-start align-center">
					<label class="block__label label mr-2 mobile-mb-0" for="">Включен безубыток</label>
					<BaseCheckbox />
				</div>
				<div class="item__row flex-column">
					<label class="block__label label" for="">Тип безубытка</label>
					<input class="block__input input base-input" type="number" />
				</div>
			</BaseBlock>
		</div>

		<div class="form__column form__buttons buttons column-2-3">
			<BaseButton class="buttons__button rounded">Добавить аккаунт</BaseButton>
			<BaseButton class="buttons__button">Подтвердить</BaseButton>
		</div>
	</div>
</template>

<script lang="ts" setup>
import BaseBlock from "@/components/Elements/BaseBlock.vue";
import BaseButton from "@/components/Elements/BaseButton.vue";
import BaseCheckbox from "@/components/Elements/BaseCheckbox.vue";
import IconArrowRtl from "@/components/Icons/IconArrowRtl.vue";
import BaseSelect from "@/components/Elements/BaseSelect.vue";
</script>

<style lang="scss">
@import "@/assets/scss/_mixins.scss";
@import "@/assets/scss/_variables.scss";

.add-account {
	.form {
		padding: 4.19rem;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-auto-rows: auto;
		gap: 3rem;
		overflow-y: scroll;

		&__column {
			&>.block+.block {
				margin-top: 3rem;
			}
		}

		.buttons {
			display: flex;

			&__button {
				text-transform: uppercase;
				@include border-radius(merge);

				font: {
					size: $--fz_m;
					family: "Gilroy_S";
				}

				&+.buttons__button {
					margin-left: 3rem;
				}
			}
		}
	}
}

@media screen and (max-width: $--mobile-breakpoint) {
	.add-account {
		.form {
			padding: 3rem;
			gap: 2rem;

			&__column {
				&>* {
					margin-bottom: 2rem;
				}
			}

			.block {
				&__label {
					font-size: $--fz_m;
				}

				.item {
					.title {
						font: {
							size: $--fz_l !important;
						}
					}
				}
			}

			.buttons {
				grid-column: 1/3 !important;
				justify-content: space-evenly;

				&__button {
					width: 20rem;
					padding: 1.5rem 3.5rem !important;
					margin: 0 !important;
					line-height: $--fz_m;
					border-radius: 1.14rem;

					font: {
						size: $--fz_m;
					}
				}
			}
		}
	}
}
</style>
