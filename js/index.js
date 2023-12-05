$(document).ready(function (){

    $('[data-bs-toggle=tooltip]').tooltip();
    let isCollapse = false;

// start navbartoggler
    $('.header-navbar-link').click(function (){
        $('.header-navbar-link span').toggleClass('active');
        $('.navbar-collapse').slideToggle(500);
		
		isCollapse = $('.header-navbar-link span').hasClass('active');
    });
// end navbartoggler

/* remove pre loading section */
    $('.page-preloader-cover').delay(3000).fadeOut('slow');
/* remove pre loading section */

// start header & button-up show
    $(window).scroll(function () {
        if ($(window).scrollTop() > 1) {
            $('.header-nav').addClass('sticky');
            $('.btn-up').show();
        } else {
            $('.btn-up').hide();
            $('.header-nav').removeClass('sticky');
        }
    });

    $(".btn-up").click(function () {
        $("html, body").animate({scrollTop: 0}, "slow");
        return false;
    })
// end header & button-up show

// start full-slider
    $('.full-slider').owlCarousel({
        loop: true,
        rtl: true,
        margin: 0,
        autoWidth: false,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        navText: ["<i class=\"fas fa-angle-right\"></i>","<i class=\"fas fa-angle-left\"></i>"],
        responsive: {
            0: {
                items: 1
            }
        }
    });
// end full-slider

// start testimonials-slider
    $('.testimonials-slider').owlCarousel({
        loop: false,
        rtl: true,
        margin: 0,
        autoWidth: false,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            }
        }
    });
// end testimonials-slider

// start canvas
    particlesJS("particles-js",
    {"particles":{"number":{"value":152,
    "density":{"enable":true,"value_area":800}},
    "color":{"value":"#ffc000"},"shape":
    {"type":"circle","stroke":
    {"width":0,"color":"#000000"},
    "polygon":{"nb_sides":7},"image":
    {"src":"img/github.svg","width":100,
    "height":100}},"opacity":
    {"value":0.5,"random":false,"anim":
    {"enable":false,"speed":1,"opacity_min":0.1,
    "sync":false}},"size":{"value":4,
    "random":true,"anim":{"enable":false,
    "speed":40,"size_min":0.1,"sync":false}},
    "line_linked":{"enable":true,"distance":200,
    "color":"#ffc000","opacity":0.4,"width":1},
    "move":{"enable":true,"speed":6,
    "direction":"none","random":false,
    "straight":false,"out_mode":"out",
    "bounce":false,"attract":
    {"enable":false,"rotateX":600,
    "rotateY":1200}}},"interactivity":
    {"detect_on":"canvas","events":
    {"onhover":{"enable":true,"mode":"repulse"},
    "onclick":{"enable":true,"mode":"push"},
    "resize":true},"modes":{"grab":
    {"distance":400,"line_linked":
    {"opacity":1}},"bubble":{"distance":400,
    "size":40,"duration":2,"opacity":8,
    "speed":3},"repulse":{"distance":200,
    "duration":0.4},"push":{"particles_nb":4},
    "remove":{"particles_nb":2}}},
    "retina_detect":true});var count_particles,
    count_particles = document.querySelector('.js-count-particles');
    update = function() {

        if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array)
        {
            count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
        }
        requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
// end canvas

// start button-up
    $(".btn-up").click(function () {
        $("html, body").animate({scrollTop: 0}, "slow");
        return false;
    })
// end button-up
})