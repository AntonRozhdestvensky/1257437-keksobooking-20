'use strict';

(function () {
  var ErrorText = {
    GUESTS: 'Количество гостей должно быть меньше или равно количеству комнат.',
    NO_GUESTS: 'Такое большое помещение не для гостей.',
    NO_VALUE_GUESTS: 'Не выбрано количество гостей',
  };
  var adForm = document.querySelector('.ad-form');
  var roomsNumber = adForm.querySelector('#room_number');
  var capacity = adForm.querySelector('#capacity');
  var adFormSubmit = document.querySelector('.ad-form__submit');

  var toggleFieldsetState = function (elements, state) {
    elements.forEach(function (element) {
      element.disabled = state;
    });
  };

  adFormSubmit.addEventListener('click', function () {
    var roomsValue = Number(roomsNumber.value);
    var capacityValue = Number(capacity.value);
    if (roomsValue === 100 && capacityValue !== 0) {
      capacity.setCustomValidity(ErrorText.NO_GUESTS);
    } else if (capacityValue === 0 && roomsValue !== 100) {
      capacity.setCustomValidity(ErrorText.NO_VALUE_GUESTS);
    } else if (roomsValue < capacityValue) {
      capacity.setCustomValidity(ErrorText.GUESTS);
    } else {
      capacity.setCustomValidity('');
    }
  });

  window.form = {
    'toggleFieldsetState': toggleFieldsetState
  };
})();
