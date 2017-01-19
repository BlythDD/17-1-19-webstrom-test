var $window = $(window),
    win_height_padded = $window.height() * 1.1;
//    isTouch = Modernizr.touch;
$window.on('scroll', revealOnScroll);
window.onload=revealOnScroll();
//载入后动画
function revealOnScroll() {
    var scrolled = $window.scrollTop();
    var beforeScrollTop = document.body.scrollTop,
        fn = fn || function() {};
    window.addEventListener("scroll", function() {
        var afterScrollTop = document.body.scrollTop,
            delta = afterScrollTop - beforeScrollTop;
        if( delta === 0 ) return false;
        fn( delta > 0 ? "down" : "up" );
        beforeScrollTop = afterScrollTop;
    }, false);
    $(".animate:not(.animated)").each(function () {
        var $this = $(this),
            offsetTop = $this.offset().top;
        if(scrolled+win_height_padded >= offsetTop+200 && scrolled-offsetTop <= 150) {
          if ($this.data('timeout')) {
              window.setTimeout(function () {
                  var an = $this.data("an");
//                  $this.css("opacity","1");
                  $this.addClass('animated');
                  $this.addClass(an);
              }, parseInt($this.data('timeout'), 10));

          }

        }
        if($this.find(".animate-son")){
            $this.find(".animate-son").addClass("animate");

        }
    });
}
//鼠标动画
/*function mouseMagnifying(oneself){
    var $this = $(oneself);
        $this.find(".magnifying-son").fadeIn()
}*/


