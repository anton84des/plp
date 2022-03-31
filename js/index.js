let filters = document.querySelector('.filter');
let productItems = document.querySelectorAll('.products-item');

//function that adds classes to product items regarding available colors
function colorsAssign() {
    for (let item of productItems) {
       let infoColorItems = item.querySelectorAll('.products-info-color-item');

       for (let infoColor of infoColorItems) {
           let dataColor = infoColor.getAttribute('data-color');
           
           item.classList.add(dataColor);
       }
    }

}

//function that filtrates products by color
function colorFilter() {
    let colorCircles = document.querySelectorAll('input:checked');

    for (item of productItems) {
        item.classList.add('d-none');

        if (colorCircles.length === 0) {
            item.classList.remove('d-none');
        }

        for (circle of colorCircles) {
            let circleColor = circle.getAttribute('data-color');

            if (item.classList.contains(circleColor)) {
                item.classList.remove('d-none');
            }
        }
    }
}

colorsAssign();
filters.addEventListener('input', colorFilter)