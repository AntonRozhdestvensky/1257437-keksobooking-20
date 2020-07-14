'use strict';

(function () {
  var ENTER_KEY = 'Enter';
  var MOUSE_KEY = 0;
  var map = document.querySelector('.map');
  var mainPin = map.querySelector('.map__pin--main');
  var adForm = document.querySelector('.ad-form');
  var fieldsetsAdForm = adForm.querySelectorAll('fieldset');
  var mapFilters = document.querySelector('.map__filters'); // Фильтр объявлений
  var mapFormSelectOptions = mapFilters.querySelectorAll('select');
  var mapFeatures = mapFilters.querySelectorAll('input');

  window.util = {
    ENTER_KEY: ENTER_KEY,
    MOUSE_KEY: MOUSE_KEY,
    map: map,
    mainPin: mainPin,
    adForm: adForm,
    fieldsetsAdForm: fieldsetsAdForm,
    mapFormSelectOptions: mapFormSelectOptions,
    mapFeatures: mapFeatures,

    getRandomElementArray: function (array) {
      return Math.floor(Math.random() * array.length);
    },

    getRandomInteger: function (min, max) {
      return Math.round(min - 0.5 + Math.random() * (max - min + 1));
    },
  };
})();
