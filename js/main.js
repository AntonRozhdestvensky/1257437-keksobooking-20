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
    window.utils.toggleFieldsetStateOn(fieldsetsAdForm);
    window.utils.toggleFieldsetStateOn(mapFormSelectOptions);
    window.utils.toggleFieldsetStateOn(mapFeatures);
    window.utils.toggleFieldsetStateOn(mapFilters);
    window.form.renderAddressInput(true);
    mainPin.removeEventListener('mousedown', onMainPinMousedown);
    mainPin.removeEventListener('keydown', onMainPinKeydown);
  };

  var onMainPinKeydown = function (evt) {
    if (window.utils.isEnterKey(evt)) {
      activatePage();
    }
  };

  var onMainPinMousedown = function (evt) {
    if (window.utils.isMainMouseButton(evt)) {
      activatePage();
    }
  };

  mainPin.addEventListener('mousedown', onMainPinMousedown);
  mainPin.addEventListener('keydown', onMainPinKeydown);

  window.form.renderAddressInput(false);
  window.utils.toggleFieldsetStateOff(fieldsetsAdForm);
  window.utils.toggleFieldsetStateOff(mapFormSelectOptions);
  window.utils.toggleFieldsetStateOff(mapFeatures);
  window.utils.toggleFieldsetStateOff(mapFilters);
})();
