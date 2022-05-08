let shippingBlock = document.querySelector('.checkout-container-form-block-shipping');
let paymentBlock = document.querySelector('.checkout-container-form-block-payment');
let thanksBlock = document.querySelector('.thanks');

let nextButton = document.querySelectorAll('.js-next');
let emptyFields = document.querySelector('.empty-fields');

function addMessageError() {
    let allForms = document.querySelectorAll('.checkout-container-form');
    allForms.forEach(elem => {
        elem.innerHTML += '<p class="empty-fields"></p>';
    })
};

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
            console.log('Error');
            elem.classList.add('checkout-container-input-error');
            elem.nextElementSibling.textContent = 'Empty fields';

        }

        elem.addEventListener('input', function () {
            elem.classList.remove('checkout-container-input-error');
            elem.nextElementSibling.textContent = '';
        });
    });
}

function nextStep() {
    let inputErrors = document.querySelectorAll('.checkout-container-input-error');
    console.log(inputErrors);
    let currentStep = this.getAttribute('data-step');
    if (!(inputErrors.length > 0)) {
        if (currentStep === 'shipping') {
            shippingBlock.classList.add('hide');
            paymentBlock.classList.remove('hide');
        } else {
            paymentBlock.classList.add('hide');
            thanksBlock.classList.remove('hide');
        }
    }
}

addMessageError();

nextButton.forEach(elem => {
    elem.addEventListener('click', inputsValidate);
    elem.addEventListener('click', nextStep);
});




// function inputsValidate() {
//     let currentInputs;
//     let currentStep = this.getAttribute('data-step');
//     if (currentStep === 'shipping') {
//         currentInputs = shippingBlock.querySelectorAll('.checkout-container-input');
//     }
//     if (currentStep === 'payment') {
//         currentInputs = paymentBlock.querySelectorAll('.checkout-container-input');
//     }

//     currentInputs.forEach(elem => {
//         if (!elem.value) {
//             emptyFields.classList.remove('d-none');
//             console.log('Error');
//             elem.classList.add('checkout-container-input-error');

//         } else {
//             emptyFields.classList.add('d-none');
//             console.log('No error');
//             elem.classList.remove('checkout-container-input-error');

//         }
//     });

//     if (emptyFields.classList.contains('d-none')) {
//         if (currentStep === 'shipping') {
//             shippingBlock.classList.add('hide');
//             paymentBlock.classList.remove('hide');
//         } else {
//             paymentBlock.classList.add('hide');
//             thanksBlock.classList.remove('hide');
//         }
//     }
// }

// nextButton.forEach(elem => {
//     elem.addEventListener('click', inputsValidate);
// });

