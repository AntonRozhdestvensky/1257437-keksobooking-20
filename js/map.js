'use strict';

(function () {

  var toggleFieldsetState = function (elements, state) {
    elements.forEach(function (element) {
      element.disabled = state;
    });
  };

  var activatePage = function () {
    window.pin.addPins();
    window.htmlSelectors.map.classList.remove('map--faded');
    window.htmlSelectors.adForm.classList.remove('ad-form--disabled');
    window.htmlSelectors.mapFilters.classList.remove('map__filters--disabled');
    toggleFieldsetState(window.htmlSelectors.fieldsetsAdForm, false);
    toggleFieldsetState(window.htmlSelectors.mapFormSelectOptions, false);
    toggleFieldsetState(window.htmlSelectors.mapFeatures, false);
    window.pin.getPositionPin(true);
    window.htmlSelectors.mainPin.removeEventListener('mousedown', onMainPinMousedown);
    window.htmlSelectors.mainPin.removeEventListener('keydown', onMainPinKeydown);
  };

  var isEnterKey = function (evt) {
    return evt.key === window.util.EventKeyCode.ENTER_KEY;
  };

  var onMainPinKeydown = function (evt) {
    if (isEnterKey(evt)) {
      activatePage();
    }
  };

  var onMainPinMousedown = function (evt) {
    if (evt.button === window.util.EventKeyCode.MOUSE_KEY) {
      activatePage();
    }
  };

  window.htmlSelectors.mainPin.addEventListener('mousedown', onMainPinMousedown);
  window.htmlSelectors.mainPin.addEventListener('keydown', onMainPinKeydown);

  window.pin.getPositionPin(false);
  toggleFieldsetState(window.htmlSelectors.fieldsetsAdForm, true);
  toggleFieldsetState(window.htmlSelectors.mapFormSelectOptions, true);
  toggleFieldsetState(window.htmlSelectors.mapFeatures, true);
})();
