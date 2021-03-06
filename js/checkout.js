let shippingBlock = document.querySelector('.checkout-container-form-block-shipping');
let paymentBlock = document.querySelector('.checkout-container-form-block-payment');
let thanksBlock = document.querySelector('.thanks');

let nextButton = document.querySelectorAll('.js-next');
let emptyFields = document.querySelector('.empty-fields');

function messageErrorInForm() {
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
            let errorMsg = elem.getAttribute('data-error');
            elem.classList.add('checkout-container-input-error');
            elem.nextElementSibling.textContent = errorMsg;
        }

        elem.addEventListener('input', function () {
            elem.classList.remove('checkout-container-input-error');
            elem.nextElementSibling.textContent = '';
        });
    });
};

function nextStep() {
    let inputErrors = document.querySelectorAll('.checkout-container-input-error');
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
};

messageErrorInForm();

nextButton.forEach(elem => {
    elem.addEventListener('click', inputsValidate);
    elem.addEventListener('click', nextStep);
});


// Local storage

let choosenProduct = document.querySelector('.choosen-product');
let choosenProductImg = document.querySelector('.products-item-img');

function insertProduct() {
    let name = localStorage.getItem('name');
    let color = localStorage.getItem('color');
    let image = localStorage.getItem('image');

    let nameCarousel = localStorage.getItem('name-carousel');
    let colorCarousel = localStorage.getItem('color-carousel');
    let imageCarousel = localStorage.getItem('image-carousel');
    let buttonClicked = localStorage.getItem('button-clicked');


    if (buttonClicked != 'true') {
        choosenProductImg.setAttribute('src', image);
        choosenProduct.innerHTML += `You bought ${name} ${color}`;
    } else {
        choosenProductImg.setAttribute('src', imageCarousel);
        choosenProduct.innerHTML += `You bought ${nameCarousel} ${colorCarousel}`;
    };
};

insertProduct();
