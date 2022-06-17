// function stickyHeader() {
//     let headerMenu = document.querySelector('.header-menu');
//     let sticky = headerMenu.offsetTop;
//     console.log(sticky)

//     window.onscroll = function () {
//         if (window.scrollY >= sticky) {
//             headerMenu.classList.add('sticky');
//         } else {
//             headerMenu.classList.remove('sticky');
//         }
//     }
// }

// stickyHeader();

$(document).ready(function () {
    function stickyHeader() {
        let $headerMenu = $('.header-menu');
        let $sticky = $headerMenu.offset().top;
        console.log($sticky)

        $(window).scroll(function () {
            if ($(window).scrollTop() >= $sticky) {
                $headerMenu.addClass('sticky');
            } else {
                $headerMenu.removeClass('sticky');
            }
        });
    }

    stickyHeader();
});