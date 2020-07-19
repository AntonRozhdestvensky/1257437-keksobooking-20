'use strict';

(function () {
    var MapRect = {
        LEFT: 0,
        RIGHT: 1200,
        TOP: 130,
        BOTTOM: 630,
    };

    var EventKeyCode = {
        ENTER_KEY: 'Enter',
        MOUSE_KEY: 0,
    };

    var MainPinSize = {
      HEIGHT: 80,
      RADIUS: Math.floor(65 / 2),
    };

    window.constant = {
        MapRect: MapRect,
        EventKeyCode: EventKeyCode,
        MainPinSize: MainPinSize,
    };

})();
