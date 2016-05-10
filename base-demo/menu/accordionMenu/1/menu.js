$(function(){
	var oBtn = $('span');
	var oContent = $('ul');

	oBtn.click(function(){
		
		/*if(oContent.is(':visible')){
			oContent.slideUp();
		}else{
			oContent.slideDown();
		}*/

		oContent.slideToggle();
	});
});