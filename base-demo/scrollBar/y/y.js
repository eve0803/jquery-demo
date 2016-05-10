$(function(){

	//移动窗口的步骤
	//1、按下鼠标左键
	//2、移动鼠标

	$('.inner').mousedown(function(e){

		// e.pageX
		var positionDiv = $(this).offset();
		var positionOuterDiv = $('.outer').offset();
		var distenceY = e.pageY - positionDiv.top + positionOuterDiv.top;
		//alert(distenceX)
		// alert(positionDiv.left);
		


		$(document).mousemove(function(e){
			var y = e.pageY - distenceY;
			
			

			if(y<0){
				y=0;
			}else if(y>$('.outer').height()-$('.inner').outerHeight(true)){
				y = $('.outer').height()-$('.inner').outerHeight(true);
			}

			$('.inner').css({
				'top':y+'px'
			});

			var percentage = y/($('.outer').height()-$('.inner').outerHeight(true));
			var dragHeight = $('.innerContent').height()-$('.outerContent').height();
			$('.innerContent').css('top',-percentage*dragHeight);

		});

		$(document).mouseup(function(){
			$(document).off('mousemove');
		});
	});


	var speed = 0;
	$('.outerContent').mousewheel(function(e,d){

		var innerTop = parseInt($('.inner').css('top'));
		var percentage = innerTop/($('.outer').height()-$('.inner').outerHeight(true));
		var dragHeight = $('.innerContent').height()-$('.outerContent').height();
		$('input').val(percentage);
		

		if(d==-1){
			speed++;
			if(speed>=47){
				speed=47;
			}
			$('.inner').css('top',speed*10+'px');
			$('.innerContent').css('top',-percentage*dragHeight);
		}else{
			speed--;
			if(speed<=0){
				speed=0;
			}
			$('.inner').css('top',speed*10+'px');
		}

	});
		
});