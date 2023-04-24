$(document).ready(function() {
    slickHeader();
    slidetoggle_header();
    fancybox();
    scrollDiv();
    animate();
});

$(document).ready(function() {
    $('.nav-menu a[href*=#]').bind('click', function(e) {
        e.preventDefault();

        var target = $(this).attr("href");

        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 600, function() {
            location.hash = target;
        });

        return false;
    });
    var y = new Date().getFullYear();

    $('year').html(y);
});

$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();
    $('.page-section').each(function(i) {
        if ($(this).position().top <= scrollDistance) {
            $('.nav-menu a.active').removeClass('active');
            $('.nav-menu a').eq(i).addClass('active');
        }
    });
}).scroll();

function scrollDiv() {
    $(".nav-menu a").on('click', function(event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
}

function slickHeader() {
    // -----------------slick----------

    $(".banner__slide").slick({
        autoplay: false,

        arrows: true,

        dots: false,

        fade: true,

        slidesToShow: 1,

        draggable: false,

        infinite: true,

        pauseOnHover: false,

        swipe: true,

        touchMove: true,

        speed: 1500,

        autoplaySpeed: 3000,

        useTransform: true,

        cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",

        adaptiveHeight: true,

        focusOnSelect: true,
        responsive: [{
            breakpoint: 767.5,
            settings: {
                arrows: false,
            },
        }, ],
    });
}

function animate() {



    AOS.init();







    // You can also pass an optional settings object



    // below listed default settings



    AOS.init({



        // Global settings:



        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function



        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on



        initClassName: 'aos-init', // class applied after initialization



        animatedClassName: 'aos-animate', // class applied on animation



        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll



        disableMutationObserver: false, // disables automatic mutations' detections (advanced)



        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)



        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)











        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:



        offset: 120, // offset (in px) from the original trigger point



        delay: 0, // values from 0 to 3000, with step 50ms



        duration: 400, // values from 0 to 3000, with step 50ms



        easing: 'ease', // default easing for AOS animations



        once: false, // whether animation should happen only once - while scrolling down



        mirror: false, // whether elements should animate out while scrolling past them



        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation







    });



}

function slidetoggle_header() {
    // var link_panel = $('.menu-mobile');

    // link_panel.click(function(){

    // 	$(this).parent().find('.main-menu').slideToggle('active');

    // })
    jQuery(".header__bar-button a").click(function() {
        jQuery(".header-menu").toggleClass("active");
        jQuery("body").toggleClass("show-scroll");
    });
    if ($(window).width() < 767.5) {
        jQuery(".nav-menu a").click(function() {



            jQuery(".header-menu").removeClass("active");
            jQuery("body").removeClass("show-scroll");


        });
    }

    jQuery(document).mouseup(function(e) {
        if (!jQuery(".header__bar-button a, .header-menu.active").is(e.target) &&
            jQuery(".header__bar-button a, .header-menu.active").has(e.target).length === 0
        ) {
            jQuery(".header-menu").removeClass("active");
            jQuery("body").removeClass("show-scroll");
        }
    });
}

function fancybox() {
    var gallery_row = jQuery(".p__row");

    gallery_row.each(function() {
        jQuery(this)
            .find(".p__collum-photo a")

        .attr("data-fancybox", "images");

        jQuery('[data-fancybox="images"]').fancybox({
            thumbs: {
                showOnStart: true,
            },
        });
    });

    if ($(window).width() > 767.5) {
        var itemclass = "img-overlay";
        $(".p__collum-photo").append('<div class="' + itemclass + '"></div>');
    }
}