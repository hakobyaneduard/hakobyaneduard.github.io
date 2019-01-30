$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav: true,
        center: true,
        responsiveClass:true,
        responsive:{
            320:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            }
        }
    })
    
});