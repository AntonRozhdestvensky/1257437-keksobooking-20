'use strict';

(function () {
  var map = document.querySelector('.map');
  var adForm = document.querySelector('.ad-form');
  var mapFilters = document.querySelector('.map__filters'); // Фильтр объявлений


  var mainPin = map.querySelector('.map__pin--main');
  var pinContainer = map.querySelector('.map__pins');




  var addressInput = adForm.querySelector('input[name=address]');

  var roomsNumber = adForm.querySelector('#room_number');
  var capacity = adForm.querySelector('#capacity');
  var adFormSubmit = document.querySelector('.ad-form__submit');



  var mapFeatures = mapFilters.querySelectorAll('input');

  window.htmlSelectors = {
    map: map,
    adForm,
    mapFilters,
  };
})();
