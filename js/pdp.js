let choosenProductImg = document.querySelector('.products-item-img');
let productName = document.querySelector('.name-pdp');
let infoColorItems = document.querySelector('.products-info-color-item');

function insertProduct() {
    let name = localStorage.getItem('name');
    let image = localStorage.getItem('image');
    let colorCircle = localStorage.getItem('colorCircle');

    choosenProductImg.setAttribute('src', image);
    productName.innerHTML = name;
    infoColorItems.classList.add(colorCircle);
};

insertProduct();

//

$buttonBuyFlickity = $('.button-buy-flickity');
let $carouselСell = $('.carousel-cell');

function productSetCarousel() {

    let $productName = $(this).closest($carouselСell).find('.name').html();
    let $productColor = $(this).closest($carouselСell).find('.products-info-color-item').data('color');
    let $productImage = $(this).closest($carouselСell).find('.products-item-img').attr('src');
    let $productColorCircle = 'products-info-color-' + $productColor;

    localStorage.setItem('name-carousel', $productName);
    localStorage.setItem('color-carousel', $productColor);
    localStorage.setItem('colorCircle-carousel', $productColorCircle);
    localStorage.setItem('image-carousel', $productImage);
    localStorage.setItem('button-clicked', true);
};

$buttonBuyFlickity.on('click', productSetCarousel);

let buttonBy = document.querySelector('.button-buy');
buttonBy.onclick = function () {
    localStorage.removeItem('button-clicked');
};

//

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
    selectedAttraction: 0.01,
    friction: 0.15,
    pageDots: false,
    cellAlign: 'left',
    contain: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity('.main-carousel', {
    // options
});
