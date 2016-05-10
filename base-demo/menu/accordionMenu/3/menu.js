$(function(){
	var menu = $('.menu');
	menu.hover(function(){
		$(this).children('ul').show();
	},function(){
		$(this).children('ul').hide();
	});
});