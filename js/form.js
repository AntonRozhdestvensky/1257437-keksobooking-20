'use strict';

(function () {
  var mainPin = window.htmlSelectors.map.querySelector('.map__pin--main');
  var addressInput = window.htmlSelectors.adForm.querySelector('input[name=address]');

  var renderAddressInput = function (isPageActive) {
    var x = mainPin.offsetLeft + window.constant.MainPinSize.RADIUS;
    var y = mainPin.offsetTop + (isPageActive ? window.constant.MainPinSize.HEIGHT : window.constant.MainPinSize.RADIUS);

    addressInput.value = x + ', ' + y;
  };

  window.htmlSelectors.adFormSubmit.addEventListener('click', function () {
    var roomsValue = Number(window.htmlSelectors.roomsNumber.value);
    var capacityValue = Number(window.htmlSelectors.capacity.value);
    if (roomsValue === 100 && capacityValue !== 0) {
      window.htmlSelectors.capacity.setCustomValidity(window.util.ErrorText.NO_GUESTS);
    } else if (capacityValue === 0 && roomsValue !== 100) {
      window.htmlSelectors.capacity.setCustomValidity(window.util.ErrorText.NO_VALUE_GUESTS);
    } else if (roomsValue < capacityValue) {
      window.htmlSelectors.capacity.setCustomValidity(window.util.ErrorText.GUESTS);
    } else {
      window.htmlSelectors.capacity.setCustomValidity('');
    }
  });

  window.form = {
    renderAddressInput: renderAddressInput,
  }
})();
