var galleryTop = new Swiper('.gallery-top', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    loop: true,
	pagination:'.swiper-pagination',
	paginationClickable:true,
    spaceBetween: 0
});
$(window).resize(function(){
    reinitSwiper(galleryTop);
});
function reinitSwiper(swiper) {
  setTimeout(function () {
    swiper.onResize();
  }, 500);
}