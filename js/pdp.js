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

$buttonBuy = $('.button-buy-flickity');
let $carouselСell = $('.carousel-cell');

function productSetCarousel() {

    let $productName = $(this).closest($carouselСell).find('.name').html();
    let $productColor = $(this).closest($carouselСell).find('.products-info-color-item').data('color');
    let $productImage = $(this).closest($carouselСell).find('.products-item-img').attr('src');
    let $productColorCircle = 'products-info-color-' + $productColor;

    localStorage.setItem('name', $productName);
    localStorage.setItem('color', $productColor);
    localStorage.setItem('colorCircle', $productColorCircle);
    localStorage.setItem('image', $productImage);
    localStorage.setItem('color', $productColor);
}

$buttonBuy.on('click', productSetCarousel);

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



// flickity button buy

// let carouselCell = document.querySelectorAll('.carousel-cell');
// let buttonBuyFlickity = document.querySelectorAll('.button-buy-flickity');
// let productsItemImgBoxFlickity = document.querySelectorAll('.products-item-img-box-flickity');

// function showButtonBy(cell) {
//     buttonBuyFlickity.forEach((elem) => {
//         if (cell.contains(elem)) {
//             elem.classList.add('d-show')
//             elem.classList.remove('d-none-flickity');
//         }
//     });
// };

// function hideButtonBy(cell) {
//     buttonBuyFlickity.forEach((elem) => {
//         if (cell.contains(elem)) {
//             elem.classList.remove('d-show');
//             elem.classList.add('d-none-flickity')
//         }
//     });
// };

// function transformImgMin(cell) {
//     productsItemImgBoxFlickity.forEach((elem) => {
//         if (cell.contains(elem)) {
//             elem.classList.add('products-item-img-box-flickity-transform')
//         }
//     })
// };
// function transformImgMax(cell) {
//     productsItemImgBoxFlickity.forEach((elem) => {
//         if (cell.contains(elem)) {
//             elem.classList.remove('products-item-img-box-flickity-transform')
//         }
//     })
// };

// carouselCell.forEach((cell) => {
//     cell.onmouseenter = () => {
//         showButtonBy(cell);
//         transformImgMin(cell);
//     }

//     cell.onmouseleave = () => {
//         hideButtonBy(cell);
//         transformImgMax(cell);
//     }
// });
