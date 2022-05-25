let $productItem = $('.products-item');

//function that adds classes to product items regarding available colors
function colorsAssign() {
    let productItem = document.querySelectorAll('.products-item');
    for (let item of productItem) {
        let infoColorItems = item.querySelectorAll('.products-info-color-item');

        for (let infoColor of infoColorItems) {
            let dataColor = infoColor.getAttribute('data-color');

            item.classList.add(dataColor);
        }
    }
}

colorsAssign();

//function that filtrates products by color

let $colorCircles = $('.color-filter-input');

$colorCircles.on('change', colorFilter);

function colorFilter() {
    let $colorCirclesChecked = $('input:checked');
    $productItem.addClass('d-none');

    if ($colorCirclesChecked.length === 0) {
        $productItem.removeClass('d-none');
    }

    $colorCirclesChecked.each(function () {

        let $circleAttr = $(this).data('color');

        $('.products-item.' + $circleAttr).removeClass('d-none')
    });
};

//reset function

let $buttonReset = $('.button-reset');

$buttonReset.on('click', function () {
    $productItem.removeClass('d-none');
    $colorCircles.prop('checked', false);
});


// Local storage

$buttonBuy = $('.button-buy');

function productSet() {

    let $productName = $(this).siblings('.name').html();
    let $productColor = $(this).closest($productItem).find('.products-info-color-item').data('color');
    let $productImage = $(this).closest($productItem).find('.products-item-img').attr('src');

    localStorage.setItem('name', $productName);
    localStorage.setItem('color', $productColor);
    localStorage.setItem('image', $productImage);
}

$buttonBuy.on('click', productSet);

