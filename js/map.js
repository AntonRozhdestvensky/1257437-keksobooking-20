'use strict';

(function () {

  var pinContainer = window.htmlSelectors.map.querySelector('.map__pins');
  var fieldsetsAdForm = window.htmlSelectors.adForm.querySelectorAll('fieldset');
  var mapFormSelectOptions = window.htmlSelectors.adForm.mapFilters.querySelectorAll('select');

  var addPins = function (adverts) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < adverts.length; i++) {
      fragment.appendChild(windows.pin.rendering(adverts[i]));
    }
    pinContainer.appendChild(fragment);
  };

  var activatePage = function () {
    addPins(windows.pin.rendering);
    window.htmlSelectors.map.classList.remove('map--faded');
    window.htmlSelectors.adForm.classList.remove('ad-form--disabled');
    window.htmlSelectors.mapFilters.classList.remove('map__filters--disabled');
    window.util.toggleFieldsetStateOn(window.htmlSelectors.fieldsetsAdForm, false);
    window.util.toggleFieldsetStateOn(window.htmlSelectors.mapFormSelectOptions, false);
    window.util.toggleFieldsetStateOn(window.htmlSelectors.mapFeatures, false);
    window.form.renderAddressInput(true);
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
  window.util.toggleFieldsetStateOff(fieldsetsAdForm);
  window.util.toggleFieldsetStateOff(mapFormSelectOptions);
  window.util.toggleFieldsetStateOff(window.htmlSelectors.mapFeatures);
})();
