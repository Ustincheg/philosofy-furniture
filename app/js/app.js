// $(function() {
//     $('.product-page__slider').slick({    	  
//             nextArrow: '<div id="next"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>'    	    	
//     });
//     $('.js-slider-mib').slick({
//     	centerMode: true,
//   		centerPadding: '60px',
//   		slidesToShow: 3,
//   		slidesToScroll: 1,
//   		nextArrow: '<div id="next"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>',
//   		responsive: [  
// 			{
// 		      breakpoint: 768,
// 		      settings: {		    			        
// 		        slidesToShow: 1
// 		      	}
// 			}
// 		]
//     })    
// });
$(document).ready(function(){
	$('.slider-for').slick({
		lazyLoad: 'ondemand',
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		asNavFor: '.slider-nav',
		   autoplay: false
	  });
	  $('.slider-nav').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		dots: false,		
		centerMode: true,
		focusOnSelect: true,
		arrows: false	  
	  });
  });	