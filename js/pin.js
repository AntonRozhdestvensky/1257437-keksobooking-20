'use strict';

// Компонент для работы с метками
(function () {
  var pinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');

  var renderPin = function (advert) {
    var pin = pinTemplate.cloneNode(true);
    var image = pin.querySelector('img');
    pin.style.left = (advert.location.x - window.constant.MainPinSize.RADIUS) + 'px';
    pin.style.top = (advert.location.y - window.constant.MainPinSize.HEIGHT) + 'px';
    image.src = advert.author.avatar;
    image.alt = advert.offer.title;

    return pin;
  };

  window.pin = {
    rendering: renderPin,
  };
})();
