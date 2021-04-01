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
let popup = document.querySelector('.popup');
let openPopupBtn = document.getElementById('open_popup_btn');
let closePopupBtn = document.querySelector('.popup__close-btn');
let closeOverlay = document.querySelector('.popup__overlay');
let popupContent = document.querySelector('.popup__content');
let editTitle = document.querySelector('.profile__title');
let editSubtitle = document.querySelector('.profile__subtitle');
let formElement = document.querySelector('[name="popup-form"]');
let editT = document.querySelector('[name="edit-title"]');
let editS = document.querySelector('[name="edit-subtitle"]');

/*popap новое место: переменные*/
let openPopupAddBtn = document.getElementById('open_popup-add_btn');
let closePopupAddBtn = document.getElementById('close_popup-add_btn');
let closePopupAddOverlay = document.querySelector('[name="add-popup-overlay"]');
let popupAdd = document.getElementById('add-popup');
let profileAddBtn = document.querySelector('.profile__add-btn');
let formElementAdd = document.querySelector('[name="add-popup-form"]');
let editTAdd = document.querySelector('[name="edit-title-add"]');
let editSAdd = document.querySelector('[name="edit-subtitle-add"]');

/*popup просмотр картинки: переменные*/
const popupImg = document.getElementById('img-popup');

/*вставка картинок на сайт: переменные*/
const list = document.querySelector('.elements');
const listItemTemplate = document.querySelector('.list-item-template').content.querySelector('.element');

/*popap редактировать: функции*/
function formSubmitHandler (evt) {
    evt.preventDefault();
    editTitle.textContent = editT.value;
    editSubtitle.textContent = editS.value;
    closePopup();                
}
    
function openPopup(event) {;
    popup.classList.remove('popup_closed');
    popup.classList.add('popup_opened');
    editT.value = editTitle.textContent;
    editS.value = editSubtitle.textContent;
}

function closePopup() {
    popup.classList.remove('popup_opened');
    popup.classList.add('popup_closed');
}

/*popap новое место: функции*/
function openPopupAdd(event) {
    popupAdd.classList.remove('popup_closed');
    popupAdd.classList.add('popup_opened');
}

function closePopupAdd() {
    popupAdd.classList.remove('popup_opened');
    popupAdd.classList.add('popup_closed');
    editTAdd.value = '';
    editSAdd.value='';
}

function openPopupImg(event) {
    popupImg.classList.remove('popup_closed');
    popupImg.classList.add('popup_opened');
}

function closePopupImg() {
    popupImg.classList.remove('popup_opened');
    popupImg.classList.add('popup_closed');
}

/* popap новое место: функции: добавление элемента на сайт*/
function formAddSubmitHandler (evt) {
    evt.preventDefault();
    const listItem = listItemTemplate.cloneNode(true);

    const link = editSAdd.value;
    const name = editTAdd.value;
    /*создание элемента*/
    createListItem(listItem, link, name);
    /*удаление элемента*/
    deleteListItem(listItem);
    /*popup просмотр картинки*/
    viewingListItem(listItem, link, name);

    list.prepend(listItem);
    
    closePopupAdd();          
}

/*popup просмотр картинки: функции*/
function viewingListItem(item, link, name) {
    const listItemImage = item.querySelector('.element__foto');
    /*обработка событий*/
    listItemImage.addEventListener('click', () => {
        openPopupImg();
        const popupImgSrc = popupImg.querySelector('.popup__img').src = link;
        const popupImgAlt = popupImg.querySelector('.popup__img').alt = name;
        const popupImgTitle = popupImg.querySelector('.popup__title-img').textContent = name;
    });

    const closePopupImgBtn = document.getElementById('close_popup-img_btn');
    const closePopupImgOverlay = document.querySelector('[name="img-popup-overlay"]');
    /*обработка событий*/
    closePopupImgBtn.addEventListener('click', function() {closePopupImg();});
    closePopupImgOverlay.addEventListener('click', function() {closePopupImg();});
}

/*вставка картинок на сайт: функции: создание элемента*/
function createListItem(item, link, name) {
    const listItemImageSrc = item.querySelector('.element__foto').src = link;
    const listItemImageAlt = item.querySelector('.element__foto').alt = name;

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

/*popap редактировать: обработка событий*/
openPopupBtn.addEventListener('click', function() {openPopup();});
closePopupBtn.addEventListener('click', function() {closePopup();});
closeOverlay.addEventListener('click', function() {closePopup();});
formElement.addEventListener('submit', formSubmitHandler);

/*popap новое место: обработка событий*/
openPopupAddBtn.addEventListener('click', function() {openPopupAdd();});
closePopupAddBtn.addEventListener('click', function() {closePopupAdd();});
closePopupAddOverlay.addEventListener('click', function() {closePopupAdd();});
formElementAdd.addEventListener('submit', formAddSubmitHandler);


/*вставка картинок на сайт*/
intitalListData.forEach(item => {
    const listItem = listItemTemplate.cloneNode(true);

    const link = item.link;
    const name = item.name;
    /*создание элемента*/
    createListItem(listItem, link, name);
    /*удаление элемента*/
    deleteListItem(listItem);
    /*popup просмотр картинки*/
    viewingListItem(listItem, link, name);

    list.prepend(listItem);
});