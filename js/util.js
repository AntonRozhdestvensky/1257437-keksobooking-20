'use strict';

(function () {
  var ErrorText = {
    GUESTS: 'Количество гостей должно быть меньше или равно количеству комнат.',
    NO_GUESTS: 'Такое большое помещение не для гостей.',
    NO_VALUE_GUESTS: 'Не выбрано количество гостей',
  };

  var MainPinSize = {
    HEIGHT: 80,
    RADIUS: Math.floor(65 / 2),
  };

  var EventKeyCode = {
    ENTER_KEY: 'Enter',
    MOUSE_KEY: 0,
  };

  window.util = {
    ErrorText: ErrorText,
    MainPinSize: MainPinSize,
    EventKeyCode: EventKeyCode,
  };
})();
