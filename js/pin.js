'use strict';

(function () {
    var MainPinSize = {
        HEIGHT: 80,
        RADIUS: Math.floor(65 / 2),
    };
    var mainPin = window.util.map.querySelector('.map__pin--main');
    var pinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');
    var adForm = document.querySelector('.ad-form');

  var map = document.querySelector('.map');

    var addressInput = adForm.querySelector('input[name=address]');
    var pinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');
    var pinContainer = map.querySelector('.map__pins');

    var renderPin = function (advert) {
        var pin = pinTemplate.cloneNode(true);
        var image = pin.querySelector('img');
        pin.style.left = (advert.location.x - MainPinSize.RADIUS) + 'px';
        pin.style.top = (advert.location.y - MainPinSize.HEIGHT) + 'px';
        image.src = advert.author.avatar;
        image.alt = advert.offer.title;

        return pin;
      };

      var addPins = function (adverts) {
        var fragment = document.createDocumentFragment();
        adverts.forEach(function (advert) {
          fragment.appendChild(renderPin(advert));
        });
        pinContainer.appendChild(fragment);
      };

    var getPositionPin = function (isPageActive) {
        if (isPageActive) {
          addressInput.value = (parseInt(mainPin.style.left, 10) + MainPinSize.RADIUS) + ', ' + (parseInt(mainPin.style.top, 10) + MainPinSize.HEIGHT);
        } else {
          addressInput.value = (parseInt(mainPin.style.left, 10) + MainPinSize.RADIUS) + ', ' + (parseInt(mainPin.style.top, 10) + MainPinSize.RADIUS);
        }
    };



    window.pin = {
        'renderPin': renderPin,
        'getPositionPin': getPositionPin,
        'addPins': addPins
    };
})();
