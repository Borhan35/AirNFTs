
// Carousel Init For Artist
jQuery("#carousel_artist").owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: true,
    navText: ["<img src='assets/img/arrow-left.png'>","<img src='assets/img/arrow-right.png'>"],
    margin: 61,
    /*
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    */
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1,
            margin: 0
        },

        768: {
            items: 4,
            margin: 10
        },

        1024: {
            items: 5,
            margin: 20,
        },
        1280: {
            items: 6,
            margin: 20,
        },
        1440: {
            items: 6,
            margin: 45,
        },
        1566: {
            items: 7
        }
    }
});

// Select Init 
$(document).ready(function() {
    $('.language_select').niceSelect();
    $('.recently_add').niceSelect();
    $('.all_creators').niceSelect();
});

// Expand Mobile Search 
$(document).ready(function() {
    $('.mobile_search_expan').on('click',function(){
        $('.header_search_form').toggleClass('active');
    })
});