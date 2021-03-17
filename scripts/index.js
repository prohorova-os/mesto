let popup = document.querySelector('.popup');
let openPopupBtn = document.getElementById('open_popup_btn');
let closePopupBtn = document.querySelector('.popup__close-btn');
let closeOverlay = document.querySelector('.popup__overlay');
let popupContent = document.querySelector('.popup__content');
let popupTitle = document.querySelector('.popup__edit-title');
let popupSubtitle = document.querySelector('.popup__edit-subtitle');
let editTitle = document.querySelector('.profile__title');
let editSubtitle = document.querySelector('.profile__subtitle');


// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                    // Так мы можем определить свою логику отправки.
                                                    // О том, как это делать, расскажем позже.
    // Получите значение полей jobInput и nameInput из свойства value
    inputName = document.querySelector('.popup__edit-title');
    inputJob = document.querySelector('.popup__edit-subtitle');
    
    // Выберите элементы, куда должны быть вставлены значения полей
    // Вставьте новые значения с помощью textContent    
    editTitle.textContent = inputName.textContent;
    editSubtitle.textContent = inputJob.textContent;
    ClosePopup();                
}
    
function OpenPopup(event) {
    popup.classList.add('popup_opened');
    popupTitle.textContent = editTitle.textContent;
    popupSubtitle.textContent = editSubtitle.textContent;

    // Находим форму в DOM
    let formElement = document.querySelector('.popup');// Воспользуйтесь методом querySelector()

    // Находим поля формы в DOM
    let nameInput = formElement.querySelector('.popup__edit-title');// Воспользуйтесь инструментом .querySelector()
    let jobInput = formElement.querySelector('.popup__edit-subtitle');// Воспользуйтесь инструментом .querySelector()

    // Прикрепляем обработчик к форме:
    // он будет следить за событием “submit” - «отправка»
    formElement.addEventListener('submit', formSubmitHandler); 
}

function ClosePopup() {
    popup.classList.remove('popup_opened');
}

openPopupBtn.addEventListener('click', function() {OpenPopup();});

closePopupBtn.addEventListener('click', function() {ClosePopup();});

closeOverlay.addEventListener('click', function() {ClosePopup();});

popupContent.addEventListener('click', function(event) {event.stopImmediatePropagation();});