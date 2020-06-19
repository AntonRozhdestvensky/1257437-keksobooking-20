'use strict';

var ADVERT_COUNT = 8;
// var AVATARS = ['01', '02', '03', '04', '05', '06', '07', '08'];
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

// Получаем случайный элемент массива
var getRandomElementArray = function (array) {
  return Math.floor(Math.random() * array.length);
};

// Получаем случайное число
var getRandomInteger = function (min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
};

// Генерируем 8 объявлений о недвижимости
var generateSimilarAdverts = function () {
  var adverts = [];
  for (var i = 1; i <= ADVERT_COUNT; i++) { {
    var locationX = getRandomInteger(LOCATION_X_MIN, LOCATION_X_MAX);
    var locationY = getRandomInteger(LOCATION_Y_MIN, LOCATION_Y_MAX);
    adverts[i] = {
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
    };
  }
  return adverts;
};

// Убираем класс .map--faded
document.querySelector('.map').classList.remove('map--faded');

// Учитываем размеры пина для определения координат
var pinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');
var renderPin = function (advert) { {
  var pin = pinTemplate.cloneNode(true);
  pin.style.left = (adverts.location.x - RADIUS_PIN) + 'px';
  pin.style.top = adverts.location.y - HEIGHT_PIN + 'px';

  var avatar = pin.querySelector('img');
  avatar.src = adverts.author.avatar;
  avatar.alt = adverts.offer.title;

  return pin;
};

// Отрисовываем элементы в DOM
var mapPinSelector = document.querySelector('.map__pins');
var adverts = generateSimilarAdverts();

var addPins = function (adverts) { {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < pins.length; i++) {
    fragmentAdverts.appendChild(createAdverts(pins[i]));
  }
  mapPinSelector.appendChild(fragmentAdverts);
};

renderAdverts();
