'use strict';

(function () {
  var pinContainer = document.querySelector('.map__pins');

  var addPins = function (adverts) {
    var fragment = document.createDocumentFragment();
    adverts.forEach(function (advert) {
      fragment.appendChild(window.pin.render(advert));
    });
    pinContainer.appendChild(fragment);
  };

  window.map = {
    addPins: addPins,
  };
})();


