'use strict';

(function () {

  var activatePage = function () {
    window.pin.addPins();
    window.htmlSelectors.map.classList.remove('map--faded');
    window.htmlSelectors.adForm.classList.remove('ad-form--disabled');
    window.htmlSelectors.mapFilters.classList.remove('map__filters--disabled');
    toggleFieldsetState(window.htmlSelectors.fieldsetsAdForm, false);
    toggleFieldsetState(window.htmlSelectors.mapFormSelectOptions, false);
    toggleFieldsetState(window.htmlSelectors.mapFeatures, false);
    window.pin.renderAddressInput(true);
    window.htmlSelectors.mainPin.removeEventListener('mousedown', onMainPinMousedown);
    window.htmlSelectors.mainPin.removeEventListener('keydown', onMainPinKeydown);
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

  window.htmlSelectors.mainPin.addEventListener('mousedown', onMainPinMousedown);
  window.htmlSelectors.mainPin.addEventListener('keydown', onMainPinKeydown);

  window.pin.renderAddressInput(false);
  toggleFieldsetState(window.htmlSelectors.fieldsetsAdForm, true);
  toggleFieldsetState(window.htmlSelectors.mapFormSelectOptions, true);
  toggleFieldsetState(window.htmlSelectors.mapFeatures, true);
})();
