let shippingBlock = document.querySelector('.checkout-container-form-block-shipping');
let paymentBlock = document.querySelector('.checkout-container-form-block-payment');
let thanksBlock = document.querySelector('.thanks');

let nextButton = document.querySelectorAll('.js-next');
let emptyFields = document.querySelector('.empty-fields');


function inputsValidate() {
    let currentInputs;
    let currentStep = this.getAttribute('data-step');
    if (currentStep === 'shipping') {
        currentInputs = shippingBlock.querySelectorAll('.checkout-container-input');
    }
    if (currentStep === 'payment') {
        currentInputs = paymentBlock.querySelectorAll('.checkout-container-input');
    }

    currentInputs.forEach(elem => {
        if (!elem.value) {
            emptyFields.classList.remove('d-none');
            console.log('Error');
        } else {
            emptyFields.classList.add('d-none');
            console.log('No error');
        }
    });

    if (emptyFields.classList.contains('d-none')) {
        if (currentStep === 'shipping') {
            shippingBlock.classList.add('hide');
            paymentBlock.classList.remove('hide');
        } else {
            paymentBlock.classList.add('hide');
            thanksBlock.classList.remove('hide');
        }
    }
}

nextButton.forEach(elem => {
    elem.addEventListener('click', inputsValidate);
});






