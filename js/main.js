'use strict';

var ADVERT_COUNT = 8;
var TITLES = [
  'Заголовок - 1',
  'Заголовок - 2',
  'Заголовок - 3',
  'Заголовок - 4',
  'Заголовок - 5',
  'Заголовок - 6',
  'Заголовок - 7',
  'Заголовок - 8'
]; // Временно. Возможно будет изменен.
var PRICE_MIN = 300;
var PRICE_MAX = 100000;
var TYPES = ['palace', 'flat', 'house', 'bungalo'];
var ROOMS = [1, 2, 3, 4]; // 4 === любое число комнат
var GUESTS = [1, 2, 3, 4]; // 3 === любое количество гостей, 4 === не для гостей
var CHECK_TIMES = ['12:00', '13:00', '14:00'];
var FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var DESCRIPTIONS = [
  'Описание - 1',
  'Описание - 2',
  'Описание - 3',
  'Описание - 4',
  'Описание - 5',
  'Описание - 6',
  'Описание - 7',
  'Описание - 8',
]; // Временно. Возможно будет изменено.
var PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg'
];
var RADIUS_PIN = 50 / 2;
var HEIGHT_PIN = 70;
var LOCATION_X_MIN = 0;
var LOCATION_X_MAX = 1200;
var LOCATION_Y_MIN = 130;
var LOCATION_Y_MAX = 630;
var ENTER_KEY = 'Enter';
var ERROR_TEXT = {
  GUESTS: 'Количество гостей должно быть меньше или равно количеству комнат.',
  NO_GUESTS: 'Такое большое помещение не для гостей.',
  NO_VALUE_GUESTS: 'Не выбрано количество гостей',
};

// Получаем случайный элемент массива
var getRandomElementArray = function (array) {
  return Math.floor(Math.random() * array.length);
};

// Получаем случайное число
var getRandomInteger = function (min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
};

// Генерируем 8 объявлений о недвижимости
var generateAdverts = function () {
  var adverts = [];

  for (var i = 1; i <= ADVERT_COUNT; i++) {
    var locationX = getRandomInteger(LOCATION_X_MIN, LOCATION_X_MAX);
    var locationY = getRandomInteger(LOCATION_Y_MIN, LOCATION_Y_MAX);

    adverts.push({
      author: {
        avatar: 'img/avatars/user0' + i + '.png',
      },
      offer: {
        title: getRandomElementArray(TITLES),
        address: locationX + ',' + locationY,
        price: getRandomInteger(PRICE_MIN, PRICE_MAX),
        type: getRandomElementArray(TYPES),
        rooms: getRandomElementArray(ROOMS),
        guests: getRandomElementArray(GUESTS),
        checkin: getRandomElementArray(CHECK_TIMES),
        checkout: getRandomElementArray(CHECK_TIMES),
        features: getRandomElementArray(FEATURES),
        description: getRandomElementArray(DESCRIPTIONS),
        photos: getRandomElementArray(PHOTOS),
      },
      location: {
        x: locationX,
        y: locationY,
      }
    });
  }

  return adverts;
};

// получение DOM элементов
var map = document.querySelector('.map');
var mapPinMain = map.querySelector('.map__pin--main');
var pinContainer = map.querySelector('.map__pins');
var adForm = document.querySelector('.ad-form');
var fieldsetsAdForm = adForm.querySelectorAll('fieldset');
var mapFilters = document.querySelector('.map__filters'); // Фильтр объявлений
var roomsNumber = adForm.querySelector('#room_number');
var capacity = adForm.querySelector('#capacity');
var adFormSubmit = document.querySelector('.ad-form__submit');

var renderPin = function (advert) {
  var pin = mapPinMain.cloneNode(true);
  var image = pin.querySelector('img');

  pin.style.left = (advert.location.x - RADIUS_PIN) + 'px';
  pin.style.top = advert.location.y - HEIGHT_PIN + 'px';
  image.src = advert.author.avatar;
  image.alt = advert.offer.title;

  return pin;
};

var addPins = function (adverts) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < adverts.length; i++) {
    fragment.appendChild(renderPin(adverts[i]));
  }
  pinContainer.appendChild(fragment);
};

var adverts = generateAdverts();

// Module 4 Task 2
// Функция блокировки формы
var disableFieldsets = function (elem) {
  for (var i = 0; i < elem.length; i++) {
    elem[i].setAttribute('disabled', 'disabled');
  }
};

disableFieldsets(fieldsetsAdForm);

// Функция включения формы
var enableFieldsets = function (elem) {
  for (var i = 0; i < elem.length; i++) {
    elem[i].removeAttribute('disabled', 'disabled');
  }
};

// Набор функций-декораторов для активации страницы
var activatePage = function () {
  addPins(adverts);
  map.classList.remove('map--faded');
  adForm.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('map__filters--disabled');
  enableFieldsets(fieldsetsAdForm);
  enableFieldsets(mapFilters.children);
  mapPinMain.removeEventListener('mousedown', onMainPinMousedown);
  mapPinMain.removeEventListener('keydown', onMainPinKeydown);
};

var onMainPinMousedown = function () {
  activatePage();
};

var isEnterKey = function (evt) {
  return evt.key === ENTER_KEY;
};

var onMainPinKeydown = function (evt) {
  if (isEnterKey(evt)) {
    activatePage();
  }
};

// Слушатели для активации страницы
mapPinMain.addEventListener('mousedown', onMainPinMousedown);
mapPinMain.addEventListener('keydown', onMainPinKeydown);


// Валидация формы по mousedown
adFormSubmit.addEventListener('change', function () {
  var roomsValue = roomsNumber.value;
  var capacityValue = capacity.value;

  if (roomsValue === '100' && capacityValue !== '0') {
    capacityValue.setCustomValidity(ERROR_TEXT.NO_GUESTS);
  } else if (capacityValue === '0' && roomsValue !== '100') {
    capacityValue.setCustomValidity(ERROR_TEXT.NO_VALUE_GUESTS);
  } else if (roomsValue < capacityValue) {
    capacityValue.setCustomValidity(ERROR_TEXT.GUESTS);
  } else {
    capacityValue.setCustomValidity('');
  }
});
