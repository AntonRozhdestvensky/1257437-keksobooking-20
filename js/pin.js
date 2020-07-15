'use strict';

// Компонент для работы с метками
(function () {


    var renderPin = function (advert) {
      var pin = window.htmlSelectors.pinTemplate.cloneNode(true);
      var image = pin.querySelector('img');
      pin.style.left = (advert.location.x - MainPinSize.RADIUS) + 'px';
      pin.style.top = (advert.location.y - MainPinSize.HEIGHT) + 'px';
      image.src = advert.author.avatar;
      image.alt = advert.offer.title;

      return pin;
    };

    var addPins = function () {
      var fragment = document.createDocumentFragment();
      for (var i = 0; i < window.data.generateAdverts.length; i++) {
        fragment.appendChild(renderPin(window.data.generateAdverts[i]));
      }
      window.htmlSelectors.pinContainer.appendChild(fragment);
    };

    var getPositionPin = function (isPageActive) {
      if (isPageActive) {
        window.htmlSelectors.addressInput.value = (parseInt(window.htmlSelectors.mainPin.style.left, 10) + window.util.MainPinSize.RADIUS) +
        ', '
        + (parseInt(window.htmlSelectors.mainPin.style.top, 10) + window.util.MainPinSize.HEIGHT);
      } else {
        window.htmlSelectors.addressInput.value = (parseInt(window.htmlSelectors.mainPin.style.left, 10) + window.util.MainPinSize.RADIUS) +
        ', '
        + (parseInt(window.htmlSelectors.mainPin.style.top, 10) + window.util.MainPinSize.RADIUS);
      }
    };

    window.pin = {
      getPositionPin: getPositionPin,
      addPins: addPins,
    };
})();
