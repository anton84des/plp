let productItems = document.querySelectorAll('.products-item');
let colorFilterLabel = document.querySelectorAll('.color-filter-label');

//function that adds classes to product items regarding available colors
function colorsAssign() {
    for (let item of productItems) {
        let infoColorItems = item.querySelectorAll('.products-info-color-item');

        for (let infoColor of infoColorItems) {
            let dataColor = infoColor.getAttribute('data-color');

            item.classList.add(dataColor);
        }
    }
};


let colorFilterInput = document.querySelectorAll('.color-filter-input');

for (let i = 0; i < colorFilterLabel.length; i++) {

    colorFilterInput[i].onclick = function () {

        let filterItem = colorFilterLabel[i].getAttribute('data-color');
        console.log(filterItem);

        if (colorFilterInput[i].checked) {
            for (let k = 0; k < productItems.length; k++) {

                if (!productItems[k].classList.contains(filterItem)) {
                    productItems[k].classList.add('d-none');
                } else if (!productItems[k].classList.contains(filterItem) || productItems[k].classList.contains('d-none')) {
                    productItems[k].classList.toggle('d-none');
                }
            }

        }
    };
}


// productItems[k].classList.contains(filterItem);
// console.log(productItems[k].classList.contains(filterItem));

// && colorFilterInput[i].nextElementSibling.getAttribute('data-color') == filterItem



// productItems.forEach((elem) => {

//     if (!elem.classList.contains(filterItem)) {
//         elem.classList.add('d-none');
//     }

//     if (!elem.classList.contains(filterItem) || elem.classList.contains('d-none')) {
//         elem.classList.remove('d-none');
//     } else {
//         elem.classList.add('d-none');
//     }

//     // !elem.classList.toggle('d-none');
// });






// document.querySelector('.color-filters').addEventListener('click', (event) => {
//     if (!event.target.classList.contains('color-filter-label')) return false;

//     let filterItem = event.target.dataset['color'];



//     productItems.forEach((elem) => {
//         if (!elem.classList.contains(filterItem)) {
//             elem.classList.add('d-none');
//         }
//     });


//     if (!event.target.classList.contains('js-chosen-filter')) {
//         event.target.classList.add('js-chosen-filter');
//     } else {
//         event.target.classList.remove('js-chosen-filter');
//         productItems.forEach((elem) => {
//             if (!elem.classList.contains(filterItem)) {
//                 elem.classList.remove('d-none');
//             }
//         });
//     }

// });




// colorFilterLabel.forEach(elem => {
//     elem.onclick = function () {
//         let filterItem = this.dataset['color'];

//         productItems.forEach((elem) => {
//             if (!elem.classList.contains(filterItem)) {
//                 elem.classList.add('d-none');
//             } else {
//                 elem.classList.remove('d-none');
//             }
//         });
//     }
// });






// if (!elem.classList.contains(filterItem)) {
//     elem.classList.toggle('d-none');
// }

//resets chosen filter
// function resetFilter(filter, circleColor) {
//     let input = filter.previousElementSibling;

//     input.checked = false;

//     for (let item of productItems) {
//         if (!item.classList.contains(circleColor)) {
//             item.classList.remove('d-none');
//         }
//     }

// }

//function that filtrates products by color
// function colorFilter() {
//     colorCircles.forEach(circle => {
//         circle.onclick = function () {
//             let circleColor = this.getAttribute('data-color');

//             for (let item of productItems) {
//                 if (!item.classList.contains(circleColor)) {
//                     item.classList.add('d-none');
//                 }
//             }

//             if (this.classList.contains('js-chosen-filter')) {
//                 this.classList.remove('js-chosen-filter');
//                 resetFilter(this, circleColor);
//             } else {
//                 this.classList.add('js-chosen-filter');
//             }
//         }
//     });
// }

// document.querySelector('.filter').addEventListener('click', function (event) {
//     if (!event.target.classList.contains('color-filter-label')) return false;
//     let colorFilterLabel = document.querySelectorAll('.color-filter-label');
//     colorFilterLabel.forEach((element) => {
//         console.log(this);
//     })

// console.log(event.target);
// console.log(this);
// });

colorsAssign();
// colorFilter();
