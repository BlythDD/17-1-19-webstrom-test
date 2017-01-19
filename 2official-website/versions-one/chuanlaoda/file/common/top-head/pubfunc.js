var oRootUrl = window.location.protocol + "//" + window.location.host;
var oStaticRootUrl = window.location.protocol + "//static.loji.com";
var mobileReg = /^((1[3|4|5|7|8])+\d{9})$/;
function isExist(a) {
    if (typeof a !== "undefined" && typeof a !== null) {
        return true
    } else {
        return false
    }
}
var ie6 = !-[1] && !window.XMLHttpRequest;
function popup(b, a) {
    if ($(b).length === 0) {
        return
    }
    if ($("#Overlay").size() === 0) {
        $('<div id="Overlay" class="overlayBG"></div>').appendTo($("body"))
    }
    if (ie6) {
        b.css({position: "fixed", top: (($(window).height() - b.height()) / 2 + $(window).scrollTop() - 50), left: (($(window).width() - b.width()) / 2) + $(window).scrollLeft(), "z-index": "9999"}).show();
        $(window).scroll(function () {
            b.css("top", ($(window).height() - b.height()) / 2 + $(window).scrollTop()).css("left", ($(window).width() - b.width()) / 2 + $(window).scrollLeft())
        })
    } else {
        b.css({position: "fixed", top: (($(window).height() - b.height()) / 2 - 50), left: (($(window).width() - b.width()) / 2), "z-index": "9999"}).show()
    }
    $("#Overlay").show()
}
function hideMask(a) {
    a.hide();
    $("#Overlay").hide();
    return false
}
Date.prototype.format = function (c) {
    var b = {"M+": this.getMonth() + 1, "d+": this.getDate(), "h+": this.getHours(), "m+": this.getMinutes(), "s+": this.getSeconds(), "q+": Math.floor((this.getMonth() + 3) / 3), "S+": this.getMilliseconds()};
    if (/(y+)/i.test(c)) {
        c = c.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))
    }
    for (var a in b) {
        if (new RegExp("(" + a + ")").test(c)) {
            c = c.replace(RegExp.$1, RegExp.$1.length == 1 ? b[a] : ("00" + b[a]).substr(("" + b[a]).length))
        }
    }
    return c
};
function theWeek() {
    var c = 0;
    now = new Date();
    years = now.getYear();
    if (years < 1000) {
        years += 1900
    }
    var e = new Array(12);
    e[0] = 31;
    e[2] = 31;
    e[3] = 30;
    e[4] = 31;
    e[5] = 30;
    e[6] = 31;
    e[7] = 31;
    e[8] = 30;
    e[9] = 31;
    e[10] = 30;
    e[11] = 31;
    if (Math.round(now.getYear() / 4) == now.getYear() / 4) {
        e[1] = 29
    } else {
        e[1] = 28
    }
    if (now.getMonth() === 0) {
        c = c + now.getDate()
    } else {
        var d = now.getMonth();
        for (var b = 1; b <= d; b++) {
            c = c + e[b - 1]
        }
        c = c + now.getDate()
    }
    var a = Math.round(c / 7);
    return a
}
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (b) {
        var a = this.length >>> 0;
        var c = Number(arguments[1]) || 0;
        c = (c < 0) ? Math.ceil(c) : Math.floor(c);
        if (c < 0) {
            c += a
        }
        for (; c < a; c++) {
            if (c in this && this[c] === b) {
                return c
            }
        }
        return -1
    }
}
(function () {
    var a = function (b) {
        this.showTime = "3500";
        if ($(".tip-page").length === 0) {
            this.box = $('<div class="tip-page"></div>');
            $("body").append(this.box)
        } else {
            this.box = $(".tip-page")
        }
    };
    a.prototype = {show: function (c) {
        if (c) {
            this.box.text(c)
        }
        this.box.fadeIn();
        var b = this;
        window.setTimeout(function () {
            b.hide()
        }, 5000)
    }, hide: function () {
        this.box.fadeOut()
    }};
    window.EUNKE = window.EUNKE || {};
    window.EUNKE.tipPage = a;
    window.tippage = new EUNKE.tipPage({})
})(jQuery);
function blockLoading(a) {
    $(a).css("position", "relative");
    $(a).append('<div class="loading"><div class="load_bg"></div><img src="http://static.loji.com/avenger/imgs/loading.gif"></div>')
}
function unblockLoading(a) {
    $(a).find(".loading").remove()
}
function setCookie(b, d, a) {
    var c = new Date();
    c.setDate(c.getDate() + a);
    document.cookie = b + "=" + d + ";expires=" + c + ";path=/"
}
function getCookie(b) {
    var a = document.cookie.split("; ");
    var c = 0;
    for (c = 0; c < a.length; c++) {
        var d = a[c].split("=");
        if (d[0] == b) {
            return d[1]
        }
    }
    return null
}
function removeCookie(a) {
    setCookie(a, "1", -1)
}
function QueryParamString(a) {
    var b = new RegExp("(^|&)" + a + "=([^&]*)(&|$)", "i");
    var c = window.location.search.substr(1).match(b);
    if (c != null) {
        return decodeURI(c[2])
    } else {
        return null
    }
}
function getStrLen(e) {
    e = $.trim(e);
    var a = 0;
    var d = new RegExp("[\u4e00-\u9fa5]");
    for (var c = 0, b = e.length; c < b; c++) {
        var f = e.charAt(c);
        if (d.test(f) == true) {
            a += 2
        } else {
            a++
        }
    }
    return a
}
$("body").bind("click", function (a) {
    $(".select_content").hide();
    $(".select_list").hide();
    $(".commonBubble").hide()
});
$("body").delegate(".close,.J_dismiss,#Overlay", "click", function () {
    $("#Overlay,.mw,.commonPop").hide();
    return false
});
$("body").delegate(".imgBox .fagnifier,.imgBox img", "click", function () {
    var a = $(this).parents(".imgBox").find("img").attr("src");
    if (a) {
        if ($("#imgView").size() === 0) {
            $("body").append($('<div class="commonPop" id="imgView"><a href="javascript:void(0);" class="close"></a><div class="imgWar"><img src=""></div></div>'))
        }
        $("#imgView").find("img").attr("src", a);
        popup($("#imgView"))
    }
});
$("body").delegate('input[type="checkbox"]', "click", function () {
    if ($(this).parents(".checker").hasClass("disabled")) {
        return
    }
    if ($(this).is(":checked")) {
        $(this).parent("span").addClass("checked");
        var a = $(this).attr("data-allChkId");
        if (a && $("#" + a).size() > 0) {
            $("#" + a).find("input[type='checkbox']").each(function () {
                this.checked = true
            });
            $("#" + a).find("input[type='checkbox']").parent("span").addClass("checked")
        }
    } else {
        $(this).parent("span").removeClass("checked");
        var a = $(this).attr("data-allChkId");
        if (a && $("#" + a).size() > 0) {
            $("#" + a).find("input[type='checkbox']").removeAttr("checked").parent("span").removeClass("checked")
        }
    }
});
$("body").delegate('input[type="radio"]', "change", function () {
    var b = $(this).attr("name");
    $('input[name="' + b + '"]').parent("span").removeClass("checked");
    var a = "";
    if ($(this).is(":checked")) {
        $(this).parent("span").addClass("checked")
    }
});
function getCboxOrRadioVal(a, b) {
    var c = [];
    $('input[name="' + a + '"]:checked').each(function () {
        c.push($(this).val())
    });
    if (b == "array") {
        return c
    } else {
        if (c.length === 0) {
            return undefined
        } else {
            if (c.length == 1) {
                return c[0]
            } else {
                return c.join(",")
            }
        }
    }
}
function initcheckBox() {
    if (!$(".boxCheckerWar .checkRealVal").val()) {
        return
    }
    var d = $(".boxCheckerWar .checkRealVal").val().split(",");
    for (var c = 0; c < d.length; c++) {
        var b = $(".boxCheckerWar .checker input");
        for (var a = 0; a < b.length; a++) {
            if ($(b[a]).val() == d[c]) {
                $(b[a]).each(function () {
                    this.checked = true
                });
                $(b[a]).parents("span").addClass("checked")
            }
        }
    }
}
$(".first_level_title").bind("click", function (a) {
    if (!$(this).hasClass("has_sec")) {
        return
    } else {
        a.preventDefault();
        $(this).next("ul.second_level").toggle()
    }
});
function initDriverInMap() {
    var e = $("#allmap").attr("data-longitude");
    var d = $("#allmap").attr("data-latitude");
    var c = new BMap.Map("allmap");
    c.centerAndZoom(new BMap.Point(e, d), 11);
    c.addControl(new BMap.MapTypeControl());
    c.enableScrollWheelZoom(true);
    var a = new BMap.Point(e, d);
    var b = new BMap.Marker(a);
    c.addOverlay(b)
}
function viewDriverPoiInMap(c) {
    if ($("#" + c).size() === 0) {
        return
    }
    var f = $("#" + c).attr("data-longitude");
    var e = $("#" + c).attr("data-latitude");
    var d = new BMap.Map(c);
    d.centerAndZoom(new BMap.Point(f, e), 11);
    d.addControl(new BMap.MapTypeControl());
    d.enableScrollWheelZoom(true);
    var a = new BMap.Point(f, e);
    var b = new BMap.Marker(a);
    d.addOverlay(b)
}
$("body").delegate(".J_vehicleDetailTrigger", "click", function () {
    viewVehicleDetailFun($(this))
});
function viewVehicleDetailFun(e, c) {
    var b;
    if (!c) {
        if (e.attr("data-type") != "driver") {
            tippage.show("请求参数错误，请刷新页面重试。");
            return
        } else {
            b = e.attr("data-id")
        }
    } else {
        b = c
    }
    if ($("#J_driverDetail").length == "0") {
        var d = $('<div class="commonPop commonPopNoFoot" id="J_driverDetail"><a href="javascript:void(0);" class="close"></a><div class="contentBox"><div class="driverSection"></div></div></div>');
        $("body").append(d)
    }
    var a = {id: b, f: "index"};
    $.ajax({url: oRootUrl + "/index/vehicleDetail", type: "post", dataType: "json", data: a, beforeSend: function () {
        blockLoading("#J_driverDetail");
        $("#J_driverDetail .driverSection").hide()
    }, success: function (f) {
        if (f.code == "0") {
            $("#J_driverDetail .driverSection").empty().append(f.values.html).show();
            if (c > 0) {
                $("#J_driverDetail").removeClass("commonPopNoFoot")
            } else {
                $("#J_driverDetail").addClass("commonPopNoFoot")
            }
            popup($("#J_driverDetail"));
            unblockLoading("#J_driverDetail");
            initDriverInMap("mapall")
        } else {
            tippage.show("请求失败，请刷新页面重试！")
        }
    }, error: function (f) {
        tippage.show("网络繁忙，请稍后再试！")
    }})
}
function initWebUpload(b) {
    var a = "pickSelect" + b;
    a = WebUploader.create({auto: true, fileSizeLimit: 1024 * 1024 * 10, swf: oStaticRootUrl + "/avenger/js/plugin/webuploader-0.1.5/Uploader.swf", server: oRootUrl + "/upload", pick: b, duplicate: true, accept: {title: "Images", extensions: "gif,jpg,jpeg,bmp,png,PNG", mimeTypes: "image/*"}, oImgBox: function () {
        var d = $(this.pick);
        var c = d.parents(".img_upload");
        return c
    }});
    a.on("fileQueued", function (c) {
        var e = $(this.options.pick);
        var d = e.parents(".img_upload");
        blockLoading(this.options.oImgBox())
    });
    a.on("uploadSuccess", function (f, e) {
        var i = $.parseJSON(e._raw);
        var d = i.values.image;
        var h = i.values.image300x300;
        var g = $(this.options.pick);
        var c = this.options.oImgBox();
        if (b == "#headImg") {
            $.ajax({url: oRootUrl + "/profile/user/updateHeadImg", type: "post", dataType: "json", data: {headImg: d}, async: true, success: function (j) {
                tippage.show("头像修改成功。");
                g.parents(".img_upload").find(".previewWar").html('<img class="preview" src="' + h + '" />');
                unblockLoading(c)
            }, error: function (j) {
                unblockLoading(c);
                tippage.show("网络繁忙，请稍后再试！")
            }})
        } else {
            g.parents(".img_upload").find(".img_box").show();
            g.parents(".img_upload").find(".previewWar").html('<img class="preview" src="' + h + '" />');
            g.parents(".img_upload").find(".img_box").find("input[type='hidden']").val(d);
            unblockLoading(this.options.oImgBox())
        }
    });
    a.on("uploadError", function (c) {
        alert("上传失败，刷新页面重试");
        unblockLoading(this.options.oImgBox())
    });
    return a
}
function isPcFlag() {
    var a = navigator.userAgent;
    var c = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
    var b = true;
    for (var d = 0; d < c.length; d++) {
        if (a.indexOf(c[d]) > 0) {
            b = false;
            break
        }
    }
    return b
}
$("#loginTypeSelect input").change(function () {
    if (!$(this).parents("label").parent("span").hasClass("loginActive")) {
        $("#loginTypeSelect .loginActive").removeClass("loginActive");
        $(this).parents("label").parent("span").addClass("loginActive");
        $("#loginSec .logFrm form:visible").hide();
        var a = $(".loginActive").index();
        $("#loginSec .logFrm form").eq(a).show()
    }
});
function postLoginForm() {
    $("#loginForm").validate({ignore: "", rules: {username: {required: true, mobileOrOther: true}, mypassword: {required: true}}, errorPlacement: function (error, element) {
        error.appendTo($("#errorInfo1"))
    }, messages: {username: {required: "用户名不能为空", mobileOrOther: "手机号或企业号格式不正确"}, mypassword: {required: "密码不能为空"}}, submitHandler: function () {
        var oUserName = $("input[name='username']").val();
        var opassMd5 = $.md5($("#mypassword").val());
        var postData = {username: oUserName, password: opassMd5, role: $("#J_role").val() || 0};
        var jumpFunc = $("#loginForm").data("data-fun");
        $.ajax({url: "/login/ajax", method: "post", data: postData, success: function (data) {
            if (data.code == 1) {
                tippage.show(data.values.message);
                return
            } else {
                if (data.values.hasSet === 0) {
                    if (jumpFunc) {
                        $(".mask").hide();
                        $("#loginSec").hide()
                    }
                } else {
                    if (jumpFunc) {
                        $(".mask").hide();
                        $("#loginSec").hide();
                        window.isBigCustomer = data.values.isBigCustomer;
                        eval(jumpFunc)
                    } else {
                        window.location.reload()
                    }
                }
            }
        }, error: function () {
            tippage.show("请求异常，请刷新页面重试")
        }})
    }})
}
function postLoginPhoneForm() {
    $("#loginFormMessage").validate({rules: {username: {required: true, mobile: true}, verifyCode: {required: true}, answer: {}}, errorPlacement: function (error, element) {
        error.appendTo($("#errorInfo2"))
    }, messages: {verifyCode: {required: "短信验证码不能为空"}, username: {required: "手机号不能为空", mobile: "手机格式不正确"}, answer: {required: "验证码不能为空", maxlength: "验证码长度有误"}}, submitHandler: function (form) {
        var jumpFunc = $("#loginForm").data("data-fun");
        var option = {url: "/loginBySms", type: "post", dataType: "json", async: true, success: function (data) {
            if (data.code == 1) {
                tippage.show(data.values.message);
                return
            } else {
                if (data.values.hasSet === 0) {
                    if (jumpFunc) {
                        $(".mask").hide();
                        $("#loginSec").hide()
                    }
                } else {
                    if (jumpFunc) {
                        $(".mask").hide();
                        $("#loginSec").hide();
                        window.isBigCustomer = data.values.isBigCustomer;
                        eval(jumpFunc)
                    } else {
                        window.location.reload()
                    }
                }
            }
        }, error: function (data) {
            tippage.show("网络繁忙，请稍后再试！")
        }};
        $("#loginFormMessage").ajaxSubmit(option)
    }})
}
function getCaptchaUrl() {
    return"/captcha?t=" + new Date().getTime()
}
function getVerifyCodeBtn(c) {
    var a = c;
    var d = "";
    var b = 60;
    clearInterval(d);
    d = setInterval(function () {
        if (b > 1) {
            a.val((b -= 1) + "秒后获取")
        } else {
            clearInterval(d);
            a.attr("disabled", false).val("获取验证码").removeClass("btn-countdown");
            a.parent("form").find(".captImg").attr("src", "/captcha?t=" + new Date().getTime())
        }
    }, 1000)
}
function refreshVerifyForPhoneLogin() {
    $("#J_captchaImagePhoneLogin").attr("src", getCaptchaUrl())
}
$("#J_captchaImagePhoneLogin").bind("click", function () {
    refreshVerifyForPhoneLogin()
});
function getVerifyForPhoneLogin() {
    var c;
    c = $("#errorInfo2 label");
    if ($("#J_mobileForPhoneLogin").val() == "") {
        c.html("手机号不能为空");
        c.show()
    } else {
        if ($("#J_answerForPhoneLogin").val() == "") {
            c.html("请您输入图片中的字符");
            c.show()
        } else {
            if (/^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test($("#J_mobileForPhoneLogin").val())) {
                c.html("");
                c.hide();
                var a = {mobile: $("#J_mobileForPhoneLogin").val(), answer: $("#J_answerForPhoneLogin").val()};
                var b = {url: "/login/getLoginSmsCode", type: "post", dataType: "json", data: a, success: function (d) {
                    if (d.code == 1) {
                        tippage.show(d.values.message);
                        refreshVerifyForPhoneLogin()
                    } else {
                        getVerifyCodeBtn($("#J_getVerifyBtn_phonelogin"))
                    }
                }, error: function (d) {
                    tippage.show("网络繁忙，请稍后再试！")
                }};
                $.ajax(b)
            } else {
                c.html("手机号格式不正确");
                c.show()
            }
        }
    }
}
$("#J_getVerifyBtn_phonelogin").bind("click", function () {
    getVerifyForPhoneLogin()
});
$("#loginBtnP").bind("click", function () {
    postLoginPhoneForm()
});
$("#J_mobileForPhoneLogin").bind("keyup", function () {
    if ($(this).val().length == 11) {
        $("#J_getVerifyBtn_phonelogin").css("background-color", "#FF6B00")
    }
    if ($(this).val().length != 11) {
        $("#J_getVerifyBtn_phonelogin").css("background-color", "#A7A7A7")
    }
});
$(function () {
    var a = {grrz: {name: "个人认证", con: "罗计拥有强大的技术实力，可以保障您的个人隐私安全，请放心填写。"}, qyrz: {name: "企业认证", con: "罗计拥有强大的技术实力，可以保障您的个人隐私安全，请放心填写。"}, jzzc: {name: "精准找车", con: "借助罗计百万车源信息，通过筛选目标线路，帮您精准找到满意的承运车辆 。"}, ksfh: {name: "快速发货", con: "提交新建订单后可选择指定熟车发货或将货物信息推送给罗计平台上的全部司机。"}, ddlr: {name: "订单录入", con: "您可在此填写发货信息和创建订单。"}, dfdd: {name: "待发订单", con: "您可在此查看、修改订单信息及调车发货。"}, ztdd: {name: "在途订单", con: "您可在此查看运输途中的订单信息，并实现定位追踪承运车辆。"}, wdsc: {name: "我的熟车", con: "您可通过筛选目标线路、车长、手机号码等添加司机成为熟车，并可编辑修改车队名称。"}, wyjm: {name: "我要加盟", con: "点击页面下方修改信息按钮，完成加盟信息，审核通过后即可成为罗计合作商家，享受罗计海量货源。"}, gmcx: {name: "购买车险", con: "罗计为您提供一对一专业服务，让您足不出户，享受方便快捷的车险服务。"}, kszd: {name: "快速找货", con: "您可通过筛选目标线路和货物类型找到符合目标要求的货物信息，抢单后可查看货主联系方式。"}, xlgl: {name: "线路管理", con: "您可通过添加专线服务信息，审核通过后即可接收货主订单。"}, yqdd: {name: "已抢订单", con: "您可在此查看货源和货主信息。"}, cydd: {name: "承运订单", con: "您可在此查看和检索所有承运订单信息，并处理订单状态和填写运单费用。"}, wdgl_zjm: {name: "网点管理-主界面（22日将上线）", con: "您可在此编辑、删除和添加网点信息，管理您的专线业务。"}, wdgl_bjwd: {name: "网点管理-编辑网点（22日将上线）", con: "您可在此编辑、删除和添加网点信息，管理您的专线业务。"}, txl: {name: "通讯录添加编辑", con: "您可在该界面添加或编辑联系人的信息。"}, txl_list: {name: "通讯录列表", con: "您在通讯录中，可管理发货人/收货人的联系方式、收/发货地址。"}, account_manager: {name: "账号管理", con: "在“账号管理”模块中，您可邀请其他用户共享车队信息，也可对邀请的用户进行管理。"}, wdyq: {name: "我的邀请", con: "邀请好友注册时需输入此邀请码，可获得罗币奖励。"}, messageBox: {name: "消息盒子", con: "您可以在这里收听到货源信息，以及一些重要通知。"}, brokerLiner: {name: "我的线路", con: "您可以在这里设置或修改始发地，还可以设置想要监听货源的线路。"}, companyDesc: {name: "物流名片", con: "您可在“物流名片”界面，查看物流公司的详细信息，还可将该物流名片分享给其他用户。"}, enterprise: {name: "企业账号", con: "企业主账号可以设置相关组织架构，组织架构最多可设置四级。"}};
    if ($(".tipsCon").length) {
        var b = $.trim($(".introTips").attr("dtype"));
        if (typeof(a[b]) == "object") {
            $(".tipsCon").addClass("commonBubble").html(a[b].con)
        }
        $(".introTips").hover(function (c) {
            $(this).find(".commonBubble").show()
        }, function () {
            $(this).find(".tipsCon").hide()
        })
    }
});
$("#lineChoicePop .table_gray tbody").on("DOMNodeInserted", function () {
    $.each($(".durationStr"), function (a, b) {
        $(b).html($(b).html().replace("天", ""))
    })
});
function initStar(b) {
    var a = "starForShow star star";
    var c = b.substring(b.indexOf(".") + 1, b.indexOf(".") + 2);
    if (c < 5) {
        a += Math.floor(b)
    } else {
        if (c >= 5) {
            a += Math.floor(b) + "half"
        }
    }
    return a
}
function showLoginForm() {
    if ($("#Overlay").size() === 0) {
        $('<div id="Overlay" class="overlayBG"></div>').appendTo($("body"))
    }
    $("#Overlay").show();
    $("#loginSec").show();
    postLoginForm()
}
function hideLoginForm() {
    $("#Overlay").hide();
    $("#loginSec").hide()
}
$(document).ready(function () {
    if (isPcFlag()) {
        $(".J_showInPc").show()
    }
    $("#loginTrigger").bind("click", function () {
        $("#mask").show();
        $("#loginSec").show()
    });
    $("#app .downAppBtn").bind("click", function () {
        var a = $(this).index();
        $(this).addClass("on").siblings("a").removeClass("on");
        $("#app .appQr").eq(a).show().siblings("p").hide()
    });
    $(".appQrBtn a").bind("click", function () {
        var a = $(this).index();
        $(this).addClass("on").siblings("a").removeClass("on");
        $(".appQrImg img").eq(a).show().siblings("img").hide()
    });
    postLoginForm();
    postLoginPhoneForm();
    $.each($(".star"), function (a, c) {
        var b = $(c).attr("data-star");
        if (b) {
            $(c).attr("class", initStar(b))
        }
    });
    $(".toolbar").bind("mouseover", function () {
        $(this).addClass("fullShow")
    }).bind("mouseout", function () {
        $(this).removeClass("fullShow")
    });
    $(".goTop").bind("click", function () {
        window.scroll(0, 0)
    });
    $(".radio").each(function () {
        var b = $(this), a = b.find("input[type=radio]");
        if (a.prop("checked")) {
            b.addClass("checked")
        } else {
            b.removeClass("checked")
        }
    });
    $(".radio input[type=radio]").change(function () {
        if ($(this).prop("checked")) {
            $(this).parent().addClass("checked")
        } else {
            $(this).parent().removeClass("checked")
        }
    });
    $("#J_ownerLogin").bind("click", function () {
        $("#loginForm").data("data-fun", "window.location.reload();");
        showLoginForm()
    });
    $("#J_brokerLogin").bind("click", function () {
        $("#J_role").val(3);
        $("#J_roleMessage").val(3);
        $("#J_resetPassUrl").attr("href", "/resetpass?role=broker");
        $("#J_regUrl").attr("href", "/broker/reg");
        $("#loginForm input[name='username']").attr("placeholder", "请输入手机号");
        $("#loginForm").data("data-fun", "window.location.reload();");
        showLoginForm()
    });
    $.each($(".J_popLogin"), function (b, a) {
        $(this).bind("click", function (d) {
            var c = $(this).attr("href");
            if ($("#J_roleStatus").val() != "0") {
                $("#loginForm").data("data-fun", 'window.location.href="' + c + '"');
                showLoginForm();
                stopDefault(d)
            }
        })
    })
});
function stopDefault(a) {
    if (a && a.preventDefault) {
        a.cancelBubble = true;
        a.preventDefault()
    } else {
        window.event.returnValue = false;
        return false
    }
}
function deleteSure(a, e, f, b) {
    a.find(".warn_con").html(e);
    var d = a.find(".popLeftBtn");
    var c = a.find(".popRightBtn");
    popup(a, 1);
    d.unbind("click");
    d.bind("click", function () {
        if (b && typeof(b) === "function") {
            b();
            d.unbind("click")
        } else {
            hideMask(a);
            d.unbind("click")
        }
    });
    c.unbind("click");
    c.bind("click", function () {
        if (f && typeof(f) === "function") {
            f();
            c.unbind("click")
        }
    })
}
function refreshPage(a) {
    var b = a || 0;
    setTimeout(function () {
        window.location.reload()
    }, b)
}
function toMax(a) {
    return Math.max.apply(null, a)
}
$(document).delegate(".validate-img", "click", function () {
    $(this).attr("src", "/captcha?t=" + new Date().getTime())
});