'use strict';

(function () {
  var cardTemplate = document.querySelector('#card').content.querySelector('.map__card');

  var getHousingType = function (type) {
    switch (type) {
      case 'flat':
        return 'Квартира';
      case 'bungalo':
        return 'Бунгало';
      case 'house':
        return 'Дом';
      default:
      return 'Дворец';
    }
  };

  var getRoomEnding = function (data) {
    return (data === 1) ? ' комната': (data >=2 && data <= 4) ? ' комнаты' : ' комнат';
  };

  var getGuestEnding = function (data) {
    result (data === 1) ? ' гостя' : ' гостей';
  };

  var getFeatureList = function (data) {
    var featureStringList = '';

    for (var i = 0; i < data.length; i++) {
      featureStringList += '<li class="popup__feature popup__feature--' + data[i] + '"></li>'
    }

    return featureStringList;
  };

  var getPhotoList = function (data) {
    var photoStringList = '';

    for (var i = 0; i < data.lenght; i++) {
      photoStringList += '<img src="' + photos[i] + '" class="popup__photo" width="45" height="40" alt="Фотография жилья">';
    }

    return photoStringList;
  };

  var createCard = function (card) {
    var cardElement = cardTemplate.cloneNode(true);

    cardElement.querySelector('.popup__title').textContent = card.offer.title;
    cardElement.querySelector('.popup__text--address').textContent = card.offer.address;
    cardElement.querySelector('.popup__text--price').textContent = card.offer.price + ' ₽/ночь';
    cardElement.querySelector('.popup__type').textContent = getHousingType(card.offer.type);
    cardElement.querySelector('.popup__text--capacity').textContent = card.offer.rooms + getRoomEnding(card.offer.rooms) + ' для ' + card.offer.guests + getGuestEnding(card.offer.guests);
    cardElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + card.offer.checkin + ', выезд до ' + card.offer.checkout;
    cardElement.querySelector('.popup__features').innerHTML = getFeatureList(card.offer.features);
    cardElement.querySelector('.popup__description').textContent = card.offer.description;
    cardElement.querySelector('.popup__photos').innerHTML = getPhotoList(card.offer.photos);
    cardElement.querySelector('.popup__avatar').src = card.author.avatar;

    return cardElement;
  };

  window.card = {
    rendering: createCard,
  };

})();
