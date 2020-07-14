'use strict';

(function () {
  // Функция блокировки/разблокировки формы
  var doDisableElements = function (elements, state) {
    elements.forEach(function (element) {
      element.disabled = state;
    });
  };

  // Блокируем страницу по умолчанию
  doDisableElements(fieldsetsAdForm, true);
  doDisableElements(mapFormSelectOptions, true);
  doDisableElements(mapFeatures, true);

  var getAddressPassive = function () {
    addressInput.value = window.mainPin.offsetLeft + ', ' + window.mainPin.offsetTop;
  };

  getAddressPassive();

  var getAddressActive = function () {
    addressInput.readOnly = true;
    addressInput.value = (window.mainPin.offsetLeft + Math.floor(window.MAIN_WIDTH_PIN / 2))
    + ', ' + (window.mainPin.offsetTop + window.MAIN_HEIGHT_PIN + window.MAIN_HEIGHT_PIN_TAIL);
  };

  // Набор функций-декораторов для активации страницы
  var activatePage = function () {
    window.addPins(adverts);
    window.map.classList.remove('map--faded');
    adForm.classList.remove('ad-form--disabled');
    mapFilters.classList.remove('map__filters--disabled');
    doDisableElements(fieldsetsAdForm, false);
    doDisableElements(mapFormSelectOptions, false);
    doDisableElements(mapFeatures, false);
    getAddressActive();
    mainPin.removeEventListener('mousedown', onMainPinMousedown);
    mainPin.removeEventListener('keydown', onMainPinKeydown);
  };

  var isEnterKey = function (evt) {
    return evt.key === window.ENTER_KEY;
  };

  var onMainPinKeydown = function (evt) {
    if (isEnterKey(evt)) {
      activatePage();
    }
  };

  var onMainPinMousedown = function (evt) {
    if (evt.button === window.MOUSE_KEY) {
      activatePage();
    }
  };

  // Слушатели для активации страницы
  mainPin.addEventListener('mousedown', onMainPinMousedown);
  mainPin.addEventListener('keydown', onMainPinKeydown);
  adFormSubmit.addEventListener('click', function () {
    var roomsValue = Number(roomsNumber.value);
    var capacityValue = Number(capacity.value);

    if (roomsValue === 100 && capacityValue !== 0) {
      capacity.setCustomValidity(window.ErrorText.NO_GUESTS);
    } else if (capacityValue === 0 && roomsValue !== 100) {
      capacity.setCustomValidity(window.ErrorText.NO_VALUE_GUESTS);
    } else if (roomsValue < capacityValue) {
      capacity.setCustomValidity(window.ErrorText.GUESTS);
    } else {
      capacity.setCustomValidity('');
    }
  });
});
