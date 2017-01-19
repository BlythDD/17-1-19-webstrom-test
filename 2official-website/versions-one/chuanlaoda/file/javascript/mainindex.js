if (!isPc() && QueryParamString("from") != "mobile") {
    window.location.href = "http://www.chuanlaoda.cn/web/"
}
function isPc() {
    var a = {win: false, mac: false, xll: false};
    var b = navigator.platform;
    a.win = b.indexOf("Win") == 0;
    a.mac = b.indexOf("Mac") == 0;
    a.x11 = (b == "X11") || (b.indexOf("Linux") == 0);
    if (a.win || a.mac || a.xll) {
        return true
    } else {
        return false
    }
}

$(document).ready(function () {
    /*$.ajax({
        url: "url",
        type: "POST",
        async: false,
        dataType: "json",
        jsonp: "callbackparam",
        jsonpCallback: "success_jsonpCallback",
        success: function (d) {
        var c = "url";
        var b = ".jpg";
        if (d.length > 0) {
            $(".bannerControl").show()
        }
        $.each(d, function (f, j) {
            var g = "http://www.chuanlaoda.cn/web/" + d[f].images + b;
            var e = '<li style="background:url(' + g + ') no-repeat center center"><a target="_blank" href="' + d[f].href + "'></a></li>";
            var h = "<li></li>";
            $("#indexban_pc").append(e);
            $("#count").append(h)
        });
        a()
    },
        error: function (b) {

        }
    });*/

    var banImgs = $("#bannerImages").val();
    var arrImg = banImgs.split(",");
    var c = "url";
    var b = ".jpg";
    if (arrImg.length > 0) {
        $(".bannerControl").show()
    }
    $.each(arrImg, function (f, j) {
        var g = "http://www.chuanlaoda.cn/web/" + arrImg[f] + b;
//        banner链接
        var e = '<li style="background:url(\'' + g + '\') no-repeat center center"></li>';
//        banner有链接
//        var e = '<li style="background:url(\'' + g + '\') no-repeat center center"><a target="_blank" href="' + arrImg[f] + '">000</a></li>';
//        var h = "<li></li>";
        $("#indexban_pc").append(e);
//        $("#count").append(h)
    });
    a()
    function a() {
        var c = $(".tu>li").length;
        var b = 0;
        var h;
        var k = $(window).width();
        var j = 0;

        function g() {
            d(b);
            b = b + 1;
            if (b == c) {
                b = 0
            }
        }

        function d(i) {
            $(".tu>li:eq(" + i + ")").siblings("li").fadeOut(500);
            $(".tu>li:eq(" + i + ")").fadeIn(500);
            $("#count>li:eq(" + i + ")").siblings("li").removeClass("cur1");
            $("#count>li:eq(" + i + ")").addClass("cur1");
            j = i
        }

        function f() {
            clearTimeout(h);
            h = setTimeout(function () {
                g();
                f()
            }, 4500)
        }

        function e() {
            clearTimeout(h);
            h = null
        }

        f();
        $(".tu").on("mouseenter", function () {
            e()
        }).on("mouseleave", function () {
            f()
        });
        $(".prev").bind("click", function () {
            if (j <= 0) {
                j = (c - 1)
            } else {
                j -= 1
            }
            d(j)
        });
        $(".next").bind("click", function () {
            if (j >= (c - 1)) {
                j = 0
            } else {
                j += 1
            }
            d(j)
        })
    }
});

