// let productsInfoColorItem = document.querySelector('.products-info-color-item');

// productsInfoColorItem.onclick = function () {
//     let productsInfoColor = this.parentElement;
//     let productsInfo = productsInfoColor.parentElement;
//     let productsItem = productsInfo.parentElement;

//     productsItem.style.display = 'none';
// }

// productsInfoColorItem.onclick = function () {
//     let productsItem = document.querySelector('.products-item');
//     productsInfoColorItem.parentElement.style.display = 'none'
//     // let one = productsItem.childNodes[0];

//     // one.style.display = 'none';
//     console.log(productsItem);
// }

let productsItem = document.querySelectorAll('.products-item');
let productsInfoColorItem = document.querySelectorAll('.products-info-color-item');


for (let i = 0; i < productsInfoColorItem.length; i++) {

    productsInfoColorItem[i].onclick = function () {

        for (let j = 0; j < productsItem.length; j++) {

            if (productsItem[j].contains(productsInfoColorItem[i])) {
                productsItem[j].style.display = 'none';
            }
        }
    }
}