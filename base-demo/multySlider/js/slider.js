// 如果想要使一个元素运动起来，一般情况下这个元素须要具有position属性absolute/relative
$(function(){
    var oul = $('.wrap ul');
    var oulHtml = oul.html();
    oul.html(oulHtml+oulHtml)
    var timer=null;

    var ali=$('.wrap ul li')  ;
    var aliWidth=ali.eq(0).width();
    var alen=ali.length;
    var ulWidth=aliWidth*alen;
    oul.width(ulWidth);	//1600px


    var speed=2;

    function slider(){
        if(speed<0){
            if(oul.css('left')==-ulWidth/2+'px'){
                oul.css('left',0);
            }
            oul.css('left','+='+speed+'px');
        }


        if(speed>0){
            if(oul.css('left')=='0px'){
                oul.css('left',-ulWidth/2+'px');
            }
            oul.css('left','+='+speed+'px');
        }
    }
    timer = setInterval(slider,30);
    $('.wrap').mouseover(function(){
        clearInterval(timer);
    });
    $('.wrap').mouseout(function(){
        timer = setInterval(slider,30);
    });
    $('.goLeft').click(function(){
        speed=-2;
    });

    $('.goRight').click(function(){
        speed=2;
    });


});
