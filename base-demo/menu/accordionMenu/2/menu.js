$(function(){

	$.easing.def = 'easeOutElastic';
	var oBtn = $('h3');

	oBtn.click(function(){
		$(this).next('ul').slideToggle().siblings('ul').slideUp();
	});

});