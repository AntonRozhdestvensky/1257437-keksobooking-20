'use strict';

(function () {
  var map = document.querySelector('.map');
  var mainPin = map.querySelector('.map__pin--main');
  var pinContainer = map.querySelector('.map__pins');

  var pinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');

  var adForm = document.querySelector('.ad-form');
  var addressInput = adForm.querySelector('input[name=address]');
  var fieldsetsAdForm = adForm.querySelectorAll('fieldset');
  var roomsNumber = adForm.querySelector('#room_number');
  var capacity = adForm.querySelector('#capacity');
  var adFormSubmit = document.querySelector('.ad-form__submit');

  var mapFilters = document.querySelector('.map__filters'); // Фильтр объявлений
  var mapFormSelectOptions = mapFilters.querySelectorAll('select');
  var mapFeatures = mapFilters.querySelectorAll('input');

  window.htmlSelectors = {
    map: map,
    mainPin: mainPin,
    pinContainer: pinContainer,
    pinTemplate: pinTemplate,
    adForm: adForm,
    addressInput: addressInput,
    fieldsetsAdForm: fieldsetsAdForm,
    roomsNumber: roomsNumber,
    capacity: capacity,
    adFormSubmit: adFormSubmit,
    mapFilters: mapFilters,
    mapFormSelectOptions: mapFormSelectOptions,
    mapFeatures: mapFeatures,
  };
})();
