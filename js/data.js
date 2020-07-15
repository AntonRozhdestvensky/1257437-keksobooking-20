'use strict';

(function () {
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
  var LOCATION_X_MIN = 0;
  var LOCATION_X_MAX = 1200;
  var LOCATION_Y_MIN = 130;
  var LOCATION_Y_MAX = 630;

  var getRandomElementArray = function (array) {
    return Math.floor(Math.random() * array.length);
  };

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

  window.data = {
    generateAdverts: generateAdverts
  };
})();
