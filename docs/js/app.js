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
  
  $(document).ready(function(){
	$('.slick-slider-wrap').slick({
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		autoplay: true,
	});
  });


  
 
let amount = 10000;
const multiplier = () => {
	const materialFacade = Number(document.getElementById("materialFacade").value);
	const tableTopMaterial = Number(document.getElementById("tableTopMaterial").value);
	const hardwareClass = Number(document.getElementById("hardwareClass").value);
	

	// const radio = document.getElementsByClassName("radio-JS")
	// const radiola = radio.querySelectorAll(input[checked]).value;

	

	amount = materialFacade * tableTopMaterial * hardwareClass;
	qwerqwe.innerHTML = parseInt(amount);
	return amount;
}
const constructorСalculation = () => {	
	calcResult.innerHTML = parseInt(amount);
};

function calc() {
	//получаем ссылку на элемент Select (Тип дизайна)
	var type_design = document.getElementById("type_design");
	//получаем ссылку на чекбокс (Требуется верстка?)
	var is_html = document.getElementById("is_html");
	//получаем ссылку на элемент input (Кол-во вариантов)
	var count = document.getElementById("count");
	//получаем ссылку на элемент span, в него будем писать стоимость дизайна
	var result = document.getElementById("result"); 

	var price = 0;
	price += parseInt(type_design.options[type_design.selectedIndex].value);
	price += (is_html.checked == true) ? parseInt(is_html.value) : 0;
	price = parseInt(count.value) * price;

	result.innerHTML = price;
}