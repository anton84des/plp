let productItems = document.querySelectorAll('.products-item');

//function that adds classes to product items regarding available colors
function colorsAssign () {
    for (let item of productItems) {
       let infoColorItems = item.querySelectorAll('.products-info-color-item');

       for (let infoColor of infoColorItems) {
           let dataColor = infoColor.getAttribute('data-color');
           
           item.classList.add(dataColor);
       }
    }

}

//function that filtrates products by color
function colorFilter () {
    let colorCircles = document.querySelectorAll('.color-filter-label');

    colorCircles.forEach(circle => {
        circle.onclick = function () {
            let circleColor = this.getAttribute('data-color');

            for (let item of productItems) {
                if (!item.classList.contains(circleColor)) {
                    item.classList.add('d-none');
                }
            }
        }
    });
}

colorsAssign();
colorFilter();