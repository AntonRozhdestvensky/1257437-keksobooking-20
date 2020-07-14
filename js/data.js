'use strict';

(function () {
  window.ADVERT_COUNT = 8;
  window.TITLES = [
    'Заголовок - 1',
    'Заголовок - 2',
    'Заголовок - 3',
    'Заголовок - 4',
    'Заголовок - 5',
    'Заголовок - 6',
    'Заголовок - 7',
    'Заголовок - 8'
  ]; // Временно. Возможно будет изменен.
  window.PRICE_MIN = 300;
  window.PRICE_MAX = 100000;
  window.TYPES = ['palace', 'flat', 'house', 'bungalo'];
  window.ROOMS = [1, 2, 3, 4]; // 4 === любое число комнат
  window.GUESTS = [1, 2, 3, 4]; // 3 === любое количество гостей, 4 === не для гостей
  window.CHECK_TIMES = ['12:00', '13:00', '14:00'];
  window.FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  window.DESCRIPTIONS = [
    'Описание - 1',
    'Описание - 2',
    'Описание - 3',
    'Описание - 4',
    'Описание - 5',
    'Описание - 6',
    'Описание - 7',
    'Описание - 8',
  ]; // Временно. Возможно будет изменено.
  window.PHOTOS = [
    'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel3.jpg'
  ];
  window.RADIUS_PIN = 50 / 2;
  window.HEIGHT_PIN = 70;
  window.MAIN_WIDTH_PIN = 65;
  window.MAIN_HEIGHT_PIN = 65;
  window.MAIN_HEIGHT_PIN_TAIL = 16;
  window.LOCATION_X_MIN = 0;
  window.LOCATION_X_MAX = 1200;
  window.LOCATION_Y_MIN = 130;
  window.LOCATION_Y_MAX = 630;
  window.ENTER_KEY = 'Enter';
  window.MOUSE_KEY = 0;
  window.ErrorText = {
    GUESTS: 'Количество гостей должно быть меньше или равно количеству комнат.',
    NO_GUESTS: 'Такое большое помещение не для гостей.',
    NO_VALUE_GUESTS: 'Не выбрано количество гостей',
  };

  // Получаем случайный элемент массива
  window.getRandomElementArray = function (array) {
    return Math.floor(Math.random() * array.length);
  };

  // Получаем случайное число
  window.getRandomInteger = function (min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
  };
})();
