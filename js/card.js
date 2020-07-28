'use strict';

(function () {
  var cardTemplate = document.querySelector('#card').content.querySelector('.map__card');
  var mapBlock = document.querySelector('.map');
  var mapFiltersContainer = document.querySelector('.map__filters-container');

  var HousingType = {
    PALACE: 'Дворец',
    FLAT: 'Квартира',
    BUNGALO: 'Бунгало',
    HOUSE: 'Дом',
  };

  var getGuestEnding = function (guests) {
    return (guests === 1) ? ' гостя' : ' гостей';
  };

  var getFeature = function (features) {
    var fragment = document.createDocumentFragment();
    features.forEach(function (feature) {
      var featureList = document.createElement('li');
      featureList.classList = 'popup__feature popup__feature--' + feature;
      fragment.appendChild(featureList);
    });
    return fragment;
  }

  var getPhoto = function (photos) {
    var fragment = document.createDocumentFragment();
    photos.forEach(function (photo) {
      var clonePhoto = cardTemplate.querySelector('.popup__photo').cloneNode();
      clonePhoto.src = photo;
      fragment.appendChild(clonePhoto);
    });
    return fragment;
  }

  var createCard = function (advert) {
    var card = cardTemplate.cloneNode(true);
    var offer = advert.offer;

    var popupClose = card.querySelector('.popup__close');


    card.querySelector('.popup__title').textContent = offer.title;
    card.querySelector('.popup__text--address').textContent = offer.address;
    card.querySelector('.popup__text--price').textContent = offer.price + ' ₽/ночь';
    card.querySelector('.popup__type').textContent = HousingType[advert.offer.type];
    card.querySelector('.popup__text--capacity').textContent = offer.rooms + ' комнаты для ' + ' для ' + offer.guests + getGuestEnding(offer.guests);
    card.querySelector('.popup__text--time').textContent = 'Заезд после ' + offer.checkin + ', выезд до ' + offer.checkout;

    card.querySelector('.popup__features').innerHTML = '';
    card.querySelector('.popup__features').appendChild(getFeature(offer.features));

    card.querySelector('.popup__description').textContent = offer.description;

    card.querySelector('.popup__photos').innerHTML = '';
    card.querySelector('.popup__photos').appendChild(getPhoto(offer.photos));

    card.querySelector('.popup__avatar').src = advert.author.avatar;

    popupClose.addEventListener('click', onPopupCloseClick);

    return card;
  };

  var closeCard = function () {
    var advertCard = document.querySelector('.map__card');
    if (advertCard !== null) {
      advertCard.remove();
    }
    document.removeEventListener('click', onPopupCloseClick);
    document.removeEventListener('keydown', onEscapeKeydown);
  };

  var onEscapeKeydown = function (evt) {
    if (window.utils.isEscapeKey(evt)) {
      closeCard();
    }
  };

  var onPopupCloseClick = function (evt) {
    if (window.utils.isMainMouseButton(evt)) {
      closeCard();
    }
  };

  var renderCard = function (advert) {
    closeCard();
    mapBlock.insertBefore(createCard(advert), mapFiltersContainer);
    document.addEventListener('keydown', onEscapeKeydown);
  };

  window.card = {
    render: renderCard,
  };

})();
