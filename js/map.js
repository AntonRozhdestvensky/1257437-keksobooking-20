'use strict';

(function () {
  var pinContainer = document.querySelector('.map__pins');

  var addPins = function (adverts) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < adverts.length; i++) {
      fragment.appendChild(window.pin.rendering(adverts[i]));
    }
    pinContainer.appendChild(fragment);
  };

  window.map = {
    addPins: addPins,
  };
})();
