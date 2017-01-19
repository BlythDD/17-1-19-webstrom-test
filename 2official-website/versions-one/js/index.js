
    $(".nav-tab").hover(function(){
        if($(this).find("ul")){
            $(this).find("ul").show();
        }
    },function(){
        if($(this).find("ul")){
            $(this).find("ul").hide();
        }
    })
    $(".nav-list").hover(function () {
        $(".nav-list").hide();
        $(this).show();
    },function () {
        $(this).hide();
    })

    $(".list-chest img").hover(function(){
        e.stopPropagation
        $(this).siblings(".introduction").addClass("revealOnScroll").show();
    },function(){
        $(this).siblings(".introduction").hide();
    })