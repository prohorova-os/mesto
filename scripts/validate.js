const showInputError = (inputElement, errorMessage) => {
    console.log(inputElement.name, errorMessage)
}


const hideInputError = (inputElement) => {
    
}

const checkInputValidity = (inputElement) => {
    const isInputNoValid = inputElement.validity.valid;
    console.log(isInputNoValid)

    if (isInputNoValid) {
        
        hideInputError(inputElement)
    }
    else {
        const errorMessage = inputElement.validationMessage;
        
        showInputError(inputElement, errorMessage)
    }
}

const setEventListeners = (formElement) => {
    formElement.addEventListener('submit', event => {
        event.preventDefault();
    });

    const inputList = Array.from(formElement.querySelectorAll('.popup__edit'));
    
    inputList.forEach(inputElement => {
        inputElement.addEventListener('input', event => {
            checkInputValidity(inputElement);
        })
    })
}


const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.form'));
    
    formList.forEach(setEventListeners);
    
 }

 enableValidation();