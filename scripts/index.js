// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
// @todo: DOM узлы
const cardList = document.querySelector('.places__list');
// @todo: Функция создания карточки

function createCard(cardData) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const deleteButton = cardElement.querySelector('.card__delete-button');

  cardElement.querySelector('.card__title').textContent = cardData.name;
  cardElement.querySelector('.card__image').src = cardData.link;
  cardElement.querySelector('.card__image').alt = cardData.name;

  deleteButton.addEventListener('click', () => {
    deleteCard(cardElement);
});

return cardElement;
  }

// @todo: Функция удаления карточки
function deleteCard(cardElement) {
  cardElement.remove();
}
// @todo: Вывести карточки на страницу
initialCards.forEach(cardData => {
  let cardElement = createCard(cardData);
  cardList.append(cardElement);
});


