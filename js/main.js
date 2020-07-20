'use strict';
(function () {
  var map = document.querySelector('.map');
  var adForm = document.querySelector('.ad-form');
  var mapFilters = document.querySelector('.map__filters'); // Фильтр объявлений
  var fieldsetsAdForm = adForm.querySelectorAll('fieldset');
  var mapFormSelectOptions = adForm.querySelectorAll('select');
  var mapFeatures = mapFilters.querySelectorAll('input');
  var mainPin = map.querySelector('.map__pin--main');


  var activatePage = function () {
    window.map.addPins(window.data.adverts);
    map.classList.remove('map--faded');
    adForm.classList.remove('ad-form--disabled');
    mapFilters.classList.remove('map__filters--disabled');
    window.util.toggleFieldsetStateOn(fieldsetsAdForm);
    window.util.toggleFieldsetStateOn(mapFormSelectOptions);
    window.util.toggleFieldsetStateOn(mapFeatures);
    window.util.toggleFieldsetStateOn(mapFilters);
    window.form.renderAddressInput(true);
    mainPin.removeEventListener('mousedown', onMainPinMousedown);
    mainPin.removeEventListener('keydown', onMainPinKeydown);
  };

  var onMainPinKeydown = function (evt) {
    if (window.util.isEnterKey(evt)) {
      activatePage();
    }
  };

  var onMainPinMousedown = function (evt) {
    if (window.util.isMainMouseButton(evt)) {
      activatePage();
    }
  };

  mainPin.addEventListener('mousedown', onMainPinMousedown);
  mainPin.addEventListener('keydown', onMainPinKeydown);

  window.form.renderAddressInput(false);
  window.util.toggleFieldsetStateOff(fieldsetsAdForm);
  window.util.toggleFieldsetStateOff(mapFormSelectOptions);
  window.util.toggleFieldsetStateOff(mapFeatures);
  window.util.toggleFieldsetStateOff(mapFilters);
})();
