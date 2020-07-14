'use strict';


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
var mainPin = map.querySelector('.map__pin--main');

var pinContainer = map.querySelector('.map__pins');
var adForm = document.querySelector('.ad-form');
var addressInput = adForm.querySelector('input[name=address]');
var fieldsetsAdForm = adForm.querySelectorAll('fieldset');
var mapFilters = document.querySelector('.map__filters'); // Фильтр объявлений
var mapFormSelectOptions = mapFilters.querySelectorAll('select');
var mapFeatures = mapFilters.querySelectorAll('input');
var roomsNumber = adForm.querySelector('#room_number');
var capacity = adForm.querySelector('#capacity');
var adFormSubmit = document.querySelector('.ad-form__submit');

var renderPin = function (advert) {
  var pin = pinTemplate.cloneNode(true);
  var image = pin.querySelector('img');
  pin.style.left = (advert.location.x - RADIUS_PIN) + 'px';
  pin.style.top = (advert.location.y - HEIGHT_PIN) + 'px';
  image.src = advert.author.avatar;
  image.alt = advert.offer.title;

  return pin;
};

var addPins = function (adverts) {
  var fragment = document.createDocumentFragment();
  adverts.forEach(function (advert) {
    fragment.appendChild(renderPin(advert));
  });
  pinContainer.appendChild(fragment);
};

var adverts = generateAdverts();

// Module 4 Task 2


