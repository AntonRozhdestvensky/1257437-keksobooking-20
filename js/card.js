'use strict';

(function () {
  var cardTemplate = document.querySelector('#card').content.querySelector('.map__card');
  var mapBlock = document.querySelector('.map');
  var mapFiltersContainer = document.querySelector('.map__filters-container');

  var HOUSING_TYPE = {
    'palace': 'Дворец',
    'flat': 'Квартира',
    'bungalo': 'Бунгало',
    'house': 'Дом'
  };

  var getGuestEnding = function (data) {
    return (data === 1) ? ' гостя' : ' гостей';
  };

  var getFeature = function (features) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < features.length; i++) {
      var creatList = document.createElement('li');
      creatList.classList.add('popup__feature');
      creatList.classList.add('popup__feature--' + features[i]);
      fragment.appendChild(creatList);
    }

    return fragment;
  };

  var getPhoto = function (photos) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < photos.length; i++) {
      var clonePhoto = cardTemplate.querySelector('.popup__photo').cloneNode();
      clonePhoto.src = photos[i];
      fragment.appendChild(clonePhoto);
    }

    return fragment;
  };

  var createCard = function (advert) {
    var card = cardTemplate.cloneNode(true);
    var offer = advert.offer;

    var popupClose = card.querySelector('.popup__close');


    card.querySelector('.popup__title').textContent = offer.title;
    card.querySelector('.popup__text--address').textContent = offer.address;
    card.querySelector('.popup__text--price').textContent = offer.price + ' ₽/ночь';
    card.querySelector('.popup__type').textContent = HOUSING_TYPE[advert.offer.type];
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
    if (advertCard) {
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
      evt.preventDefault();
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
