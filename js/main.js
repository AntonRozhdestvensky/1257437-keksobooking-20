'use strict';

var ARRAY_ADS = 8;
var AVATARS = ['01', '02', '03', '04', '05', '06', '07', '08'];
var TITLE_ADS = [
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
var TYPE_REALTY = ['palace', 'flat', 'house', 'bungalo'];
var ROOMS = [1, 2, 3, 4]; // 4 === любое число комнат
var GUEST = [1, 2, 3, 4]; // 3 === любое количество гостей, 4 === не для гостей
var CHECKINOUT = ['12:00', '13:00', '14:00'];
var FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var DESCRIPTION_ADS = [
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
var WIDTH_PIN = 60;
var HEIGHT_PIN = 85;
var LOCATION_X_MIN = 0;
var LOCATION_X_MAX = 1200;
var LOCATION_Y_MIN = 130;
var LOCATION_Y_MAX = 630;

// Получаем случайный элемент массива
var getElementArray = function (array) {
  return Math.floor(Math.random() * array.length);
};

// Получаем случайное число
var randomInteger = function (min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
};

// Генерируем 8 объявлений о недвижимости
var generateSimilarAds = function () {
  var arrayAds = [];
  for (var i = 0; i < ARRAY_ADS; i++) {
    var getLocationX = randomInteger(LOCATION_X_MIN, LOCATION_X_MAX);
    var getLocationY = randomInteger(LOCATION_Y_MIN, LOCATION_Y_MAX);
    arrayAds[i] = {
      author: {
        avatar: 'img/avatars/user' + getElementArray(AVATARS) + '.png',
      },
      offer: {
        title: getElementArray(TITLE_ADS),
        address: getLocationX + ',' + getLocationY,
        price: randomInteger(PRICE_MIN, PRICE_MAX),
        type: getElementArray(TYPE_REALTY),
        rooms: getElementArray(ROOMS),
        guests: getElementArray(GUEST),
        checkin: getElementArray(CHECKINOUT),
        checkout: getElementArray(CHECKINOUT),
        features: getElementArray(FEATURES),
        description: getElementArray(DESCRIPTION_ADS),
        photos: getElementArray(PHOTOS),
      },
      location: {
        x: getLocationX,
        y: getLocationY,
      }
    };
  }
  return arrayAds;
};

// Убираем класс .map--faded
document.querySelector('.map').classList.remove('map--faded');

// Учитываем размеры пина для определения координат
var pinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');
var createAds = function (ads) {
  var mapPinAds = pinTemplate.cloneNode(true);
  mapPinAds.style.left = (ads.location.x - WIDTH_PIN) + 'px';
  mapPinAds.style.top = (ads.location.y - HEIGHT_PIN) + 'px';
  mapPinAds.querySelector('img').src = ads.author.avatar;
  mapPinAds.querySelector('img').alt = ads.offer.title;

  return mapPinAds;
};

// Отрисовываем элементы в DOM
var pinItemADS = function () {
  var mapPinSelector = document.querySelector('.map__pins');
  var fragmentAds = document.createDocumentFragment();
  for (var i = 0; i < generateSimilarAds.length; i++) {
    fragmentAds.appendChild(createAds(generateSimilarAds[i]));
  }
  mapPinSelector.appendChild(fragmentAds);
};

pinItemADS();
