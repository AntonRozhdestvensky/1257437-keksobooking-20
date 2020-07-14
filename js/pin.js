'use strict';

(function () {
  var pinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');

  window.renderPin = function (advert) {
    var pin = pinTemplate.cloneNode(true);
    var image = pin.querySelector('img');
    pin.style.left = (advert.location.x - window.RADIUS_PIN) + 'px';
    pin.style.top = (advert.location.y - window.HEIGHT_PIN) + 'px';
    image.src = advert.author.avatar;
    image.alt = advert.offer.title;

    return pin;
  };
})
