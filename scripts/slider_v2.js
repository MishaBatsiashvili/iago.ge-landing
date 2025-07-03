$(function(){
	$(window).ready(function () {
	    //initialize swiper when document ready  
	    var mySwiper = new Swiper ('.swiper-container-main', {
	      // Optional parameters
	      	direction: 'horizontal',
			autoplay: 2000,
			pagination: '.swiper-pagination',
			paginationClickable: true,
			disableOnInteraction: false,
			nextButton: '.swiper-button-next',
	      	prevButton: '.swiper-button-prev'
	    });
	    var mySwiper_wine = new Swiper ('.swiper-container-wine', {
	      // Optional parameters
	      	direction: 'horizontal',
			autoplay: 4000,
			pagination: '.swiper-pagination',
			disableOnInteraction: false,
	    });
	    var mySwiper_vine = new Swiper ('.swiper-container-vine', {
	      // Optional parameters
	      	direction: 'horizontal',
			autoplay: 4000,
			pagination: '.swiper-pagination',
			disableOnInteraction: false,
	    });

	});
});