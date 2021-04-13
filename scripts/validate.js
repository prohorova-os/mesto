/*поиск поля ошибки */
const searchErrorElement = (inputElement, inputErrorClass,inputSection) => {
    const formSectionElement = inputElement.closest(inputSection);
    return formSectionElement.querySelector(inputErrorClass);
}

/*показать ошибку*/
const showInputError = (formElement, inputElement, errorMessage, errorClass, inputErrorClass, inputSection) => {
    /*вывод текста ошибки*/
    const errorElement = searchErrorElement(inputElement, inputErrorClass, inputSection);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
    /*изменение цвета черты на красный*/
    inputElement.classList.add('popup__edit_error');
}

/*скрыть поле с ошибкой*/
const hideInputError = (formElement, inputElement, errorClass, inputErrorClass, inputSection) => {
    const errorElement = searchErrorElement(inputElement, inputErrorClass, inputSection);
    errorElement.textContent = " ";
    errorElement.classList.remove(errorClass);
    /*изменение цвета черты на серый*/
    inputElement.classList.remove('popup__edit_error');
}

/*валидация формы*/
const checkInputValidity = (formElement, inputElement, errorClass, inputErrorClass, inputSection) => {
    const isInputNoValid = inputElement.validity.valid;
    if (isInputNoValid) {
        hideInputError(formElement, inputElement, errorClass, inputErrorClass, inputSection);
    }
    else {
        const errorMessage = inputElement.validationMessage;
        showInputError(formElement, inputElement, errorMessage, errorClass, inputErrorClass, inputSection);
    }
}

/*переключение активности кнопки */
const toggleButtleState = (buttonElement, inputList, inactiveButtonClass) => {
    const hasNotValidInput = inputList.some((inputElement) => !inputElement.validity.valid);
    console.log(hasNotValidInput)
    if (hasNotValidInput) {
        buttonElement.setAttribute("disabled", true);
        buttonElement.classList.add(inactiveButtonClass);
    }
    else {
        buttonElement.removeAttribute("disabled");
        buttonElement.classList.remove(inactiveButtonClass);
    }
}

/*обработчик событий поле формы*/
const setEventListeners = (formElement, inputSelector, submitButtonSelector, inactiveButtonClass, 
    errorClass, inputErrorClass, inputSection) => {
    formElement.addEventListener('submit', event => {
        event.preventDefault();
    });
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);
    inputList.forEach(inputElement => {
        inputElement.addEventListener('input', event => {
            checkInputValidity(formElement, inputElement, errorClass, inputErrorClass, inputSection);
            toggleButtleState(buttonElement, inputList, inactiveButtonClass);
        });
    });
    toggleButtleState(buttonElement, inputList, inactiveButtonClass);
}

/*валидация*/
const enableValidation = ({formSelector, inputSelector, submitButtonSelector, inactiveButtonClass,
    errorClass, inputErrorClass, inputSection}) => {
    const formList = Array.from(document.querySelectorAll(formSelector));
    formList.forEach((formElement) => {
        setEventListeners(formElement, inputSelector, submitButtonSelector, inactiveButtonClass, 
            errorClass, inputErrorClass, inputSection);
    });
    
}

// включение валидации вызовом enableValidation
// все настройки передаются при вызове

enableValidation({
    formSelector: '.form',
    inputSelector: '.popup__edit',
    submitButtonSelector: '.popup__save-btn',
    inactiveButtonClass: 'popup__save-btn_disabled',
    inputErrorClass: '.popup__input-error',
    inputSection: '.form__section',
    errorClass: 'popup__input-error_active'
  }); 