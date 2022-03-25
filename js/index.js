//function that adds classes to product items regarding available colors
function colorsAssign () {
    let productItems = document.querySelectorAll('.products-item');

    for (let item of productItems) {
       let infoColorItems = item.querySelectorAll('.products-info-color-item');

       for (let infoColor of infoColorItems) {
           let dataColor = infoColor.getAttribute('data-color');
           
           item.classList.add(dataColor);
       }
    }

}

colorsAssign();
