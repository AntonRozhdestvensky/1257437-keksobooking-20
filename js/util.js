'use strict';

(function () {
  var ErrorText = {
    GUESTS: 'Количество гостей должно быть меньше или равно количеству комнат.',
    NO_GUESTS: 'Такое большое помещение не для гостей.',
    NO_VALUE_GUESTS: 'Не выбрано количество гостей',
  };

  var toggleFieldsetStateOff = function (elements) {
    for (var i = 0; i < elements.length; i++) {
      elements[i].disabled = true;
    }
  };

  var toggleFieldsetStateOn = function (elements) {
    for (var i = 0; i < elements.length; i++) {
      elements[i].disabled = false;
    }
  };

  var isEnterKey = function (evt) {
    return evt.key === window.constant.ENTER_KEY;
  };

  var isMainMouseButton = function (evt) {
    return evt.button === window.constant.MOUSE_KEY;
  };

  var isDocumentKeydown = function (evt) {
    return evt.key === window.constant.ESC_KEY;
  };

  window.util = {
    ErrorText: ErrorText,
    toggleFieldsetStateOff: toggleFieldsetStateOff,
    toggleFieldsetStateOn: toggleFieldsetStateOn,
    isEnterKey: isEnterKey,
    isMainMouseButton: isMainMouseButton,
    isDocumentKeydown: isDocumentKeydown,
  };
})();
