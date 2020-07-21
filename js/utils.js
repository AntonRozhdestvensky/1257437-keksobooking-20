'use strict';

(function () {
  var ErrorText = {
    GUESTS: 'Количество гостей должно быть меньше или равно количеству комнат.',
    NO_GUESTS: 'Такое большое помещение не для гостей.',
    NO_VALUE_GUESTS: 'Не выбрано количество гостей',
  };

  var setDisabled = function (element) {
    element.disabled = true;
  };

  var unsetDisabled = function (element) {
    element.disabled = false;
  };

  var isEnterKey = function (evt) {
    return evt.key === window.constant.ENTER_KEY;
  };

  var isMainMouseButton = function (evt) {
    return evt.button === window.constant.MOUSE_KEY;
  };

  var isEscapeKey = function (evt) {
    return evt.key === window.constant.ESC_KEY;
  };

  window.util = {
    ErrorText: ErrorText,
    setDisabled: setDisabled,
    unsetDisabled: unsetDisabled,
    isEnterKey: isEnterKey,
    isMainMouseButton: isMainMouseButton,
    isEscapeKey: isEscapeKey,
  };
})();
