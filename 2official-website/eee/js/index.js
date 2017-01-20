
    $(".nav-tab").hover(function(){
        if($(this).find("ul")){
            $(this).find("ul").show();
        }
    }),function(){
        if($(this).find("ul")){
            $(this).find("ul").hide();
        }
    }
    $(".nav-list").hover(function () {
        $(".nav-list").hide();
        $(this).show();
    },function () {
        $(this).hide();
    })

