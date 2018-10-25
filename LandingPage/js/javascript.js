// $(document).ready(function(){
// 	$('p').click(function(){
// 	$(this).css('cursor', 'pointer');
// 	});
// });

// $('p').slideUp(1000).slideDown(1000);

// $(function(){
// 	// $('input').animate({'width': '200px'}, 1000);
// 	$('img').click(function(){
// 	// $(this).animate({'width': '200px'}, 1000);

// // изменение картинок
// 	$(this).fadeOut(500, function(){
// 		$(this).attr('src', 'icon-order-call.png').fadeIn(500);
// 		});
// 	});
// });


// $(function(){
// 	// $('input').animate({'width': '200px'}, 1000);
// 	$('input').click(function(){

// // Анимация
// 	$(this).animate({'width': '200px'}, 1000);

// // слайд поднимаеться и пускаеться
// 	$('input').slideUp(1000).slideDown(2000);
// 	alert($('input').attr('src'));



// 	});
// });
// $(function(){
// // изменение свойств классов css
// 	$('p').click(function(){
// 		$(this).css('color', 'red');

// 	});

// // скрытие элемента
// 		$('.button').click(function(){
// 		$(this).hide();

// 	});

// });

// // Добовление атрибутов
// $(function(){

// 	$('strong').attr('style', 'border: 1px solid black');
// });
$(function(){
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
    })


});




$(function(){
    new WOW().init();

});

