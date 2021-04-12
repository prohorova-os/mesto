const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__input-error_active');
}


const hideInputError = (formElement, inputElement) => {
    
    const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
    errorElement.textContent = " ";
    errorElement.classList.remove('popup__input-error_active');
}

const checkInputValidity = (formElement, inputElement) => {
    const isInputNoValid = inputElement.validity.valid;
    console.log(isInputNoValid)

    if (isInputNoValid) {
        
        hideInputError(formElement, inputElement)
    }
    else {
        const errorMessage = inputElement.validationMessage;
        
        showInputError(formElement, inputElement, errorMessage)
    }
}

const setEventListeners = (formElement) => {
    formElement.addEventListener('submit', event => {
        event.preventDefault();
    });

    const inputList = Array.from(formElement.querySelectorAll('.popup__edit'));
    
    inputList.forEach(inputElement => {
        inputElement.addEventListener('input', event => {
            checkInputValidity(formElement, inputElement);
        })
    })
}


const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.form'));
    
    formList.forEach(setEventListeners);
    
 }

 enableValidation();