let productItems = document.querySelectorAll('.products-item');
let colorCircles = document.querySelectorAll('.color-filter-label');

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

//resets chosen filter
function resetFilter(filter, circleColor) {
    let input = filter.previousElementSibling;

    input.checked = false;

    for (let item of productItems) {
        if (!item.classList.contains(circleColor)) {
            item.classList.remove('d-none');
        }
    }

}

//function that filtrates products by color
function colorFilter() {
    colorCircles.forEach(circle => {
        circle.onclick = function () {
            let circleColor = this.getAttribute('data-color');

            for (let item of productItems) {
                if (!item.classList.contains(circleColor)) {
                    item.classList.add('d-none');
                }
            }

            if (this.classList.contains('js-chosen-filter')) {
                this.classList.remove('js-chosen-filter');
                resetFilter(this, circleColor);
            } else {
                this.classList.add('js-chosen-filter');
            }
        }
    });
}

colorsAssign();
colorFilter();