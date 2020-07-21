'use strict';

// Компонент для работы с метками
(function () {
  var pinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');

  var renderPin = function (advert) {
    var pin = pinTemplate.cloneNode(true);
    var image = pin.querySelector('img');
    pin.style.left = (advert.location.x - window.constants.MainPinSize.RADIUS) + 'px';
    pin.style.top = (advert.location.y - window.constants.MainPinSize.HEIGHT) + 'px';
    image.src = advert.author.avatar;
    image.alt = advert.offer.title;

    pin.addEventListener('click', function () {
      window.card.render(advert);
    });

    return pin;
  };

  window.pin = {
    render: renderPin,
  };
})();
