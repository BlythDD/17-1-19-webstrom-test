jQuery(document).ready(function () {
    var qcloud = {};
    $('[_t_nav]').hover(function () {
        var _nav = $(this).attr('_t_nav');
        console.log(qcloud[ _nav + '_timer' ]);
        clearTimeout(qcloud[ _nav + '_timer' ]);
        qcloud[ _nav + '_timer' ] = setTimeout(function () {
            $('[_t_nav]').each(function () {
                $(this)[ _nav == $(this).attr('_t_nav') ? 'addClass' : 'removeClass' ]('nav-up-selected');
            });
            $('#' + _nav).stop(true, true).slideDown(200);
        }, 150);
    }, function () {
        var _nav = $(this).attr('_t_nav');
        clearTimeout(qcloud[ _nav + '_timer' ]);
        qcloud[ _nav + '_timer' ] = setTimeout(function () {
            $('[_t_nav]').removeClass('nav-up-selected');
            $('#' + _nav).stop(true, true).slideUp(200);
        }, 150);
    });
});
//nav end

// 招聘信息
$(".hire .vacancy-list").on("click",".job-item",function(){
    var thisId = $(this).attr("id");
    $(this).addClass("active").siblings(".job-item").removeClass("active");
    $("#hire-message .job-content").each(function(){
        var aims = $(this).data("id");
        if(thisId == aims){
            $(this).fadeIn().siblings(".job-content").hide();
        }
    })

})





