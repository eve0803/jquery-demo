$(function(){
   $('div').mousedown(function(e){
       var positionDiv=$(this).offset();
       var distanceX= e.pageX-positionDiv.left;
       var distanceY= e.pageY-positionDiv.top;
       $(document).mousemove(function(e){
           var x= e.pageX-distanceX;
           var y= e.pageY-distanceY;
           if(x<0){
               x=0;
           } else if(x>$(document).width()-$('div').outerWidth(true)){
               x=$(document).width()-$('div').outerWidth(true);
           }
           if(y<0){
               y=0;
           } else if(y>$(document).height()-$('div').outerHeight(true)){
               y=$(document).height()-$('div').outerHeight(true);
           }
           $('div').css({'left':x+'px','top':y+'px'}) ;
       }) ;
       $(document).mouseup(function(){
           $(document).off('mousemove');
       })   ;

   })

		
});