var beforeScrollTop = $(window).scrollTop();
$(window).scroll(function() {
    var afterScrollTop = $(window).scrollTop(),
        updown = afterScrollTop - beforeScrollTop;
    if( updown === 0 ) return false;
    beforeScrollTop = afterScrollTop;
//    console.log(updown > 0 ? "down" : "up");

    var isUpDown = updown > 0 ? "down" : "up";  //判断往上还是往下
    var scrollTop = $(window).scrollTop();




    var lenght = $("body").find(".s-animated").length;
    $("body").find(".s-animated").each(function(){
        var an = $(this);
        var anType = an.attr("data-animation-class");
        var anVal = an.attr("data-an-offset");
        if(scrollTop >= anVal-50  && scrollTop <= anVal+50){
            if(anType == "fadeInLeft"){
                function removeAn(){
                    an.removeClass("animLeft")
                }
                if(!an.is(".animLeft")){
                    an.addClass("animLeft");
                    setTimeout(removeAn,4000);
                }
            }
            if(anType == "fadeInRight"){
                function removeAn(){
                    an.removeClass("animRight")
                }
                if(!an.is(".animRight")){
                    an.addClass("animRight");
                    setTimeout(removeAn,4000);
                }


            }
        }




    });








    /*if(isUpDown == 'down' && scrollTop >= 400) {  //数据自取，可依据元素的scrollTop值
        var markLeft = parseInt($('#mark').css('left'));
        left = markLeft + (scrollTop/10);   //值的变动与滚动幅度现相关  ， 自行调节
        if(markLeft <= 640) {   //这个值是让他滚动到一个边界  ，  自行调节
            $('#mark').css('left', left + 'px');   //举例一个元素，其他的自己来咯
        }

    } else if(isUpDown == 'up' && scrollTop <= 700) {   //往上时做相反
        var markLeft = parseInt($('#mark').css('left'));
        left = markLeft - (scrollTop/10);
        if(markLeft >= -100) {
            $('#mark').css('left', left + 'px');
        }
    }*/

    //其他的如opacity left 同理，自己实践一下吧
});