const mapBlock = document.querySelector('.map');

/**
 * функция смены состояния кнопок (открытая / закрытая)
 */
const toggleButton = e => {
  const button = e.target.closest('button');
  if (button) button.classList.toggle('button_opened');
};

/**
 * функция закрытия открытых кнопок
 */
const closeButtonsOverLayer = () => {
  const openedButtons = mapBlock.querySelectorAll('.button_opened');
  openedButtons.forEach(button => button.classList.remove('button_opened'));
};

/**
 * функция проверки нажатия на оверлей и закрытие кнопок
 */
const checkLayerClick = e => {
  if (e.target === e.currentTarget) closeButtonsOverLayer();
};

/**
 * функция обратоки кликов секции с картой
 */
const mapClickHandler = e => {
  toggleButton(e);
  checkLayerClick(e);
};

mapBlock.addEventListener('click', mapClickHandler);
