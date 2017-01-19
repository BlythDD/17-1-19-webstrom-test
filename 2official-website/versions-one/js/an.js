var $window           = $(window),
    win_height_padded = $window.height() * 1.1;
//    isTouch           = Modernizr.touch;
$window.on('scroll', revealOnScroll);
function revealOnScroll() {
    var scrolled = $window.scrollTop();
    //    top-header
    var mainHead = $(".main-header");
    if(scrolled >= 270){
        mainHead.find(".bg").css({"opacity":"1","background-color":"#4c69a0"});
        mainHead.find(".nav .nav-list a").css("color","#4c69a0");
    }else{
        mainHead.find(".bg").css({"opacity":".6","background-color":"#fff"});
        mainHead.find(".nav .nav-list a").css("color","#fff");
    }

    var beforeScrollTop = document.body.scrollTop,
        fn = fn || function() {};
    window.addEventListener("scroll", function() {
        var afterScrollTop = document.body.scrollTop,
            delta = afterScrollTop - beforeScrollTop;
        if( delta === 0 ) return false;
        fn( delta > 0 ? "down" : "up" );
        beforeScrollTop = afterScrollTop;
    }, false);
    console.log(scrolled);

    $(".revealOnScroll:not(.animated)").each(function () {
        var $this = $(this),
            offsetTop = $this.offset().top;
        if (scrolled + win_height_padded > offsetTop) {
            if ($this.data('timeout')) {
                window.setTimeout(function () {
                    $this.addClass('animated ' + $this.data('animation'));
                }, parseInt($this.data('timeout'), 10));
            } else {
                $this.addClass('animated ' + $this.data('animation'));
            }
        }
    });
}