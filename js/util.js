'use strict';

(function () {
  var ErrorText = {
    GUESTS: 'Количество гостей должно быть меньше или равно количеству комнат.',
    NO_GUESTS: 'Такое большое помещение не для гостей.',
    NO_VALUE_GUESTS: 'Не выбрано количество гостей',
  };

  var toggleFieldsetState = function (elements, state) {
    elements.forEach(function (element) {
      element.disabled = state;
    });
  };

  var isEnterKey = function (evt) {
    return evt.key === EventKeyCode.ENTER_KEY;
  };

  var isMainMouseButton = function (evt) {
    return evt.button === MOUSE_KEY;
  };

  window.util = {
    ErrorText: ErrorText,
    toggleFieldsetState: toggleFieldsetState,
    isEnterKey: isEnterKey,
    isMainMouseButton: isMainMouseButton,
  };
})();
