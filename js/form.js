'use strict';

(function () {
  var mainPin = document.querySelector('.map__pin--main');
  var addressInput = document.querySelector('#address');
  var roomsNumber = document.querySelector('#room_number');
  var capacity = document.querySelector('#capacity');
  var adFormSubmit = document.querySelector('.ad-form__submit');

  var renderAddressInput = function (isPageActive) {
    var x = mainPin.offsetLeft + window.constants.MainPinSize.RADIUS;
    var y = mainPin.offsetTop + (isPageActive ? window.constants.MainPinSize.HEIGHT : window.constants.MainPinSize.RADIUS);

    addressInput.value = x + ', ' + y;
  };

  adFormSubmit.addEventListener('click', function () {
    var roomsValue = Number(roomsNumber.value);
    var capacityValue = Number(capacity.value);
    if (roomsValue === 100 && capacityValue !== 0) {
      capacity.setCustomValidity(window.util.ErrorText.NO_GUESTS);
    } else if (capacityValue === 0 && roomsValue !== 100) {
      capacity.setCustomValidity(window.util.ErrorText.NO_VALUE_GUESTS);
    } else if (roomsValue < capacityValue) {
      capacity.setCustomValidity(window.util.ErrorText.GUESTS);
    } else {
      capacity.setCustomValidity('');
    }
  });

  window.form = {
    renderAddressInput: renderAddressInput,
  };
})();
