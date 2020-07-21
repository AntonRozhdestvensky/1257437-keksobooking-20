'use strict';
(function () {
  var map = document.querySelector('.map');
  var mainPin = map.querySelector('.map__pin--main');
  var adForm = document.querySelector('.ad-form');
  var fieldsetsAdForm = adForm.childNodes;
  var mapFilters = document.querySelector('.map__filters').childNodes; // Фильтр объявлений

  var activatePage = function () {
    window.map.addPins(window.data.adverts);
    map.classList.remove('map--faded');
    adForm.classList.remove('ad-form--disabled');
    mapFilters.classList.remove('map__filters--disabled');
    fieldsetsAdForm.forEach(window.utils.unsetDisabled);
    mapFilters.forEach(window.utils.unsetDisabled);
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
  fieldsetsAdForm.forEach(window.utils.setDisabled);
  mapFilters.forEach(window.utils.setDisabled);
})();
