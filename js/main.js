var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
    selectedAttraction: 0.01,
    friction: 0.15,
    pageDots: false,
    cellAlign: 'left',
    contain: true,
    autoPlay: true,
    autoPlay: 2000
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity('.main-carousel', {
    // options
});