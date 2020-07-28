'use strict';

(function () {
  var ADVERT_COUNT = 8;
  var MIN_FEATURES = 2;
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

  var getRandomElementArray = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  var getRandomArray = function (array, length) {
    length = length ? length : array.length;
    var randomArray = array.slice();
    randomArray.sort(function () {
      return Math.random() - 0.5;
    });
    return randomArray.slice(0, length);
  };

  var getRandomInteger = function (min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
  };

  // Генерируем 8 объявлений о недвижимости
  var generateAdverts = function () {
    var adverts = [];

    for (var i = 1; i <= ADVERT_COUNT; i++) {
      var locationX = getRandomInteger(window.constants.MapRect.LEFT, window.constants.MapRect.RIGHT);
      var locationY = getRandomInteger(window.constants.MapRect.TOP, window.constants.MapRect.BOTTOM);

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
          features: getRandomArray(FEATURES, getRandomInteger(MIN_FEATURES, FEATURES.length)),
          description: getRandomElementArray(DESCRIPTIONS),
          photos: getRandomArray(PHOTOS),
        },
        location: {
          x: locationX,
          y: locationY,
        }
      });
    }
    return adverts;
  };

  var adverts = generateAdverts();

  window.data = {
    adverts: adverts,
  };
})();
