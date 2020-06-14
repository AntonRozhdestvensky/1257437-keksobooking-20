'use strict';

var ARRAY_ADS = 8;
var AVATAR_TEMPLATE = 'img/avatars/user{{xx}}.png';
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
var LOCATION_X_MIN = 0;
var LOCATION_X_MAX = 1200;
var LOCATION_Y_MIN = 130;
var LOCATION_Y_MAX = 630;
