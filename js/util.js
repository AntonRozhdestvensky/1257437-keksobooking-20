'use strict';

(function () {
  var ErrorText = {
    GUESTS: 'Количество гостей должно быть меньше или равно количеству комнат.',
    NO_GUESTS: 'Такое большое помещение не для гостей.',
    NO_VALUE_GUESTS: 'Не выбрано количество гостей',
  };

  var toggleFieldsetStateOff = function (elements) {
    elements.forEach(function (element) {
      element.disabled = true;
    });
  };

  var toggleFieldsetStateOn = function (elements) {
    elements.forEach(function (element) {
      element.disabled = false;
    });
  };

  var isEnterKey = function (evt) {
    return evt.key === window.constant.EventKeyCode.ENTER_KEY;
  };

  var isMainMouseButton = function (evt) {
    return evt.button === window.constant.EventKeyCode.MOUSE_KEY;
  };

  window.util = {
    ErrorText: ErrorText,
    toggleFieldsetStateOff: toggleFieldsetStateOff,
    toggleFieldsetStateOn: toggleFieldsetStateOn,
    isEnterKey: isEnterKey,
    isMainMouseButton: isMainMouseButton,
  };
})();
