'use strict';

(function () {
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
})();
