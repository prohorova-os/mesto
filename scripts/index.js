const intitalListData = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 

/*popap редактировать: переменные*/
const popup = document.querySelector('.popup');
const openPopupBtn = document.getElementById('open_popup_btn');
const closePopupBtn = document.querySelector('.popup__close-btn');
const closeOverlay = document.querySelector('.popup__overlay');
const popupContent = document.querySelector('.popup__content');
const editTitle = document.querySelector('.profile__title');
const editSubtitle = document.querySelector('.profile__subtitle');
const formElement = document.querySelector('[name="popup-form"]');
const editT = document.querySelector('[name="edit-title"]');
const editS = document.querySelector('[name="edit-subtitle"]');

/*popap новое место: переменные*/
const openPopupAddBtn = document.getElementById('open_popup-add_btn');
const closePopupAddBtn = document.getElementById('close_popup-add_btn');
const closePopupAddOverlay = document.querySelector('[name="add-popup-overlay"]');
const popupAdd = document.getElementById('add-popup');
const profileAddBtn = document.querySelector('.profile__add-btn');
const formElementAdd = document.querySelector('[name="add-popup-form"]');
const editTAdd = document.querySelector('[name="edit-title-add"]');
const editSAdd = document.querySelector('[name="edit-subtitle-add"]');

/*popup просмотр картинки: переменные*/
const popupImg = document.getElementById('img-popup');
const closePopupImgBtn = document.getElementById('close_popup-img_btn');
const closePopupImgOverlay = document.querySelector('[name="img-popup-overlay"]');

/*вставка картинок на сайт: переменные*/
const list = document.querySelector('.elements');
const listItemTemplate = document.querySelector('.list-item-template').content.querySelector('.element');

/*popap для всех: функции*/
function openPopup(popup) {;
    popup.classList.remove('popup_closed');
    popup.classList.add('popup_opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    popup.classList.add('popup_closed');
}

/*вставка картинок на сайт: функции: создание элемента*/
function createListItem(item, link, name) {
    item.querySelector('.element__foto').src = link;
    item.querySelector('.element__foto').alt = name;

    const listItemLike = item.querySelector('.element__like');
    listItemLike.addEventListener('click', () => {
        listItemLike.classList.toggle('element__like_active');
    });
    const listItemTitle = item.querySelector('.element__title');
    listItemTitle.textContent = name;
}

/*вставка картинок на сайт: функции: удаление элемента*/
function deleteListItem(item) {
    const deleteBtn = item.querySelector('.element__delete');
    deleteBtn.addEventListener('click', () => {
        item.remove();
    });
}

/*создание и удаление элемента, popap просмотр картинки*/
function actionsListItem(listItemTemplate, link, name) {
    const listItem = listItemTemplate.cloneNode(true);
    /*создание элемента*/
    createListItem(listItem, link, name);
    /*удаление элемента*/
    deleteListItem(listItem);
    /*popup просмотр картинки*/
    viewingListItem(listItem, link, name);
    list.prepend(listItem);
    return listItem;
}

/*popap редактировать: функции*/
function formSubmitHandler (evt) {
    evt.preventDefault();
    editTitle.textContent = editT.value;
    editSubtitle.textContent = editS.value;
    closePopup(popup);                
}

/* popap новое место: функции: добавление элемента на сайт*/
function formAddSubmitHandler (evt) {
    evt.preventDefault();
    const link = editSAdd.value;
    const name = editTAdd.value;
    /*создание и удаление элемента, popap просмотр картинки*/
    actionsListItem(listItemTemplate, link, name);
    closePopup(popupAdd);          
}

/*popup просмотр картинки: функции*/
function viewingListItem(item, link, name) {
    const listItemImage = item.querySelector('.element__foto');
    /*обработка событий*/
    listItemImage.addEventListener('click', () => {
        openPopup(popupImg);
        popupImg.querySelector('.popup__img').src = link;
        popupImg.querySelector('.popup__img').alt = name;
        popupImg.querySelector('.popup__title-img').textContent = name;
    });
}

/*popap редактировать: обработка событий*/
openPopupBtn.addEventListener('click', function() {
        openPopup(popup);
        editT.value = editTitle.textContent;
        editS.value = editSubtitle.textContent;
    });
closePopupBtn.addEventListener('click', function() {closePopup(popup);});
closeOverlay.addEventListener('click', function() {closePopup(popup);});
formElement.addEventListener('submit', formSubmitHandler);

/*popap новое место: обработка событий*/
openPopupAddBtn.addEventListener('click', function() {
        openPopup(popupAdd);
        editTAdd.value = '';
        editSAdd.value='';
    });
closePopupAddBtn.addEventListener('click', function() {closePopup(popupAdd);});
closePopupAddOverlay.addEventListener('click', function() {closePopup(popupAdd);});
formElementAdd.addEventListener('submit', formAddSubmitHandler);

/*popup просмотр картинки: обработка событий*/
closePopupImgBtn.addEventListener('click', function() {closePopup(popupImg);});
closePopupImgOverlay.addEventListener('click', function() {closePopup(popupImg);});

/*вставка картинок на сайт*/
intitalListData.forEach(item => {
    const link = item.link;
    const name = item.name;
    /*создание и удаление элемента, popap просмотр картинки*/
    actionsListItem(listItemTemplate, link, name);
});