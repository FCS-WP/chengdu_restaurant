import "../lib/slick/slick.js";

$(document).ready(function ($) {
    $('.foods-slider').slick({
    centerMode: true,
    centerPadding: '100px',
    slidesToShow: 3,
    arrows: true,
    infinite: true,
    adaptiveHeight: false,
    useTransform: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"</button>',

    responsive: [
        {
        breakpoint: 768,
        settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
        }
        },
        {
        breakpoint: 480,
        settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
        }
        }
    ]
    });
});
$('.foods-slider').slick('slickSetOption', 'slidesToScroll', 3, true);