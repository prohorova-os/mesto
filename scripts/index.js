let popup = document.querySelector('.popup');
let openPopupBtn = document.getElementById('open_popup_btn');
let closePopupBtn = document.querySelector('.popup__close-btn');
let closeOverlay = document.querySelector('.popup__overlay');
let popupContent = document.querySelector('.popup__content');
let editTitle = document.querySelector('.profile__title');
let editSubtitle = document.querySelector('.profile__subtitle');
let formElement = document.querySelector('.form');
let editT = document.querySelector('[name="edit-title"]');
let editS = document.querySelector('[name="edit-subtitle"]');

function formSubmitHandler (evt) {
    evt.preventDefault();
    editTitle.textContent = editT.value;
    editSubtitle.textContent = editS.value;
    closePopup();                
}
    
function openPopup(event) {
    popup.classList.add('popup_opened');
    editT.value = editTitle.textContent;
    editS.value = editSubtitle.textContent;
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

openPopupBtn.addEventListener('click', function() {openPopup();});

closePopupBtn.addEventListener('click', function() {closePopup();});

closeOverlay.addEventListener('click', function() {closePopup();});

formElement.addEventListener('submit', formSubmitHandler);
 