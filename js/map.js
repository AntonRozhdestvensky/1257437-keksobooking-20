'use strict';

(function () {
  var map = document.querySelector('.map');
  var mainPin = map.querySelector('.map__pin--main');
  var adForm = document.querySelector('.ad-form');
  var fieldsetsAdForm = adForm.querySelectorAll('fieldset');
  var activatePage = function () {
    addPins(adverts);
    window.utils.map.classList.remove('map--faded');
    window.utils.adForm.classList.remove('ad-form--disabled');
    mapFilters.classList.remove('map__filters--disabled');
    window.form.toggleFieldsetState(fieldsetsAdForm, false);
    window.form.toggleFieldsetState(mapFormSelectOptions, false);
    window.form.toggleFieldsetState(mapFeatures, false);
    window.pin.getPositionPin(true);
    mainPin.removeEventListener('mousedown', onMainPinMousedown);
    mainPin.removeEventListener('keydown', onMainPinKeydown);
  };

  var isEnterKey = function (evt) {
    return evt.key === ENTER_KEY;
  };

  var onMainPinKeydown = function (evt) {
    if (isEnterKey(evt)) {
      activatePage();
    }
  };

  var onMainPinMousedown = function (evt) {
    if (evt.button === MOUSE_KEY) {
      activatePage();
    }
  };

  mainPin.addEventListener('mousedown', onMainPinMousedown);
  mainPin.addEventListener('keydown', onMainPinKeydown);

  window.pin.getPositionPin(false);
  window.form.toggleFieldsetState(fieldsetsAdForm, true);
  window.form.toggleFieldsetState(mapFormSelectOptions, true);
  window.form.toggleFieldsetState(mapFeatures, true);
})();
