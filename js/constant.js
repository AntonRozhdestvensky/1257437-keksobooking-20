'use strict';

(function () {
  var MapRect = {
    LEFT: 0,
    RIGHT: 1200,
    TOP: 130,
    BOTTOM: 630,
  };

  var ENTER_KEY = 'Enter';
  var ESC_KEY = 'Escape';
  var MOUSE_KEY = 0;

  var MainPinSize = {
    HEIGHT: 80,
    RADIUS: Math.floor(65 / 2),
  };

  window.constant = {
    MapRect: MapRect,
    ENTER_KEY: ENTER_KEY,
    MOUSE_KEY: MOUSE_KEY,
    ESC_KEY: ESC_KEY,
    MainPinSize: MainPinSize,
  };

})();
