(function(){var h={},mt={},c={id:"ca3f11bbdb68fbf43862d8b4cc7608c8",dm:["loji.com"],js:"tongji.baidu.com/hm-web/js/",etrk:[],icon:'',ctrk:true,align:1,nv:-1,vdur:1800000,age:31536000000,rec:0,rp:[],trust:1,vcard:6802257,qiao:0,lxb:0,conv:0,med:0,cvcc:{id:/wpa|doyoo|qq_kefu|launchBtn/i,q:/chat|leyu|looyu|doyoo|openqq|tencent:\/\/|qq\.(com|htm)/i},cvcf:[],apps:''};var r=void 0,s=!0,t=null,w=!1;mt.h={};mt.h.X=/msie (\d+\.\d+)/i.test(navigator.userAgent);mt.h.Ga=/msie (\d+\.\d+)/i.test(navigator.userAgent)?document.documentMode||+RegExp.$1:r;mt.h.cookieEnabled=navigator.cookieEnabled;mt.h.javaEnabled=navigator.javaEnabled();mt.h.language=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"";mt.h.Ja=(window.screen.width||0)+"x"+(window.screen.height||0);mt.h.colorDepth=window.screen.colorDepth||0;mt.cookie={};
mt.cookie.set=function(a,b,e){var d;e.I&&(d=new Date,d.setTime(d.getTime()+e.I));document.cookie=a+"="+b+(e.domain?"; domain="+e.domain:"")+(e.path?"; path="+e.path:"")+(d?"; expires="+d.toGMTString():"")+(e.Wa?"; secure":"")};mt.cookie.get=function(a){return(a=RegExp("(^| )"+a+"=([^;]*)(;|$)").exec(document.cookie))?a[2]:t};mt.l={};mt.l.T=function(a){return document.getElementById(a)};mt.l.ta=function(a){var b;for(b="A";(a=a.parentNode)&&1==a.nodeType;)if(a.tagName==b)return a;return t};
(mt.l.O=function(){function a(){if(!a.B){a.B=s;for(var b=0,g=d.length;b<g;b++)d[b]()}}function b(){try{document.documentElement.doScroll("left")}catch(d){setTimeout(b,1);return}a()}var e=w,d=[],g;document.addEventListener?g=function(){document.removeEventListener("DOMContentLoaded",g,w);a()}:document.attachEvent&&(g=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",g),a())});(function(){if(!e)if(e=s,"complete"===document.readyState)a.B=s;else if(document.addEventListener)document.addEventListener("DOMContentLoaded",
g,w),window.addEventListener("load",a,w);else if(document.attachEvent){document.attachEvent("onreadystatechange",g);window.attachEvent("onload",a);var d=w;try{d=window.frameElement==t}catch(n){}document.documentElement.doScroll&&d&&b()}})();return function(b){a.B?b():d.push(b)}}()).B=w;mt.event={};mt.event.c=function(a,b,e){a.attachEvent?a.attachEvent("on"+b,function(d){e.call(a,d)}):a.addEventListener&&a.addEventListener(b,e,w)};
mt.event.preventDefault=function(a){a.preventDefault?a.preventDefault():a.returnValue=w};mt.j={};mt.j.parse=function(){return(new Function('return (" + source + ")'))()};
mt.j.stringify=function(){function a(a){/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,function(a){var b=e[a];if(b)return b;b=a.charCodeAt();return"\\u00"+Math.floor(b/16).toString(16)+(b%16).toString(16)}));return'"'+a+'"'}function b(a){return 10>a?"0"+a:a}var e={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(d){switch(typeof d){case "undefined":return"undefined";case "number":return isFinite(d)?String(d):"null";case "string":return a(d);case "boolean":return String(d);
default:if(d===t)return"null";if(d instanceof Array){var e=["["],l=d.length,n,f,k;for(f=0;f<l;f++)switch(k=d[f],typeof k){case "undefined":case "function":case "unknown":break;default:n&&e.push(","),e.push(mt.j.stringify(k)),n=1}e.push("]");return e.join("")}if(d instanceof Date)return'"'+d.getFullYear()+"-"+b(d.getMonth()+1)+"-"+b(d.getDate())+"T"+b(d.getHours())+":"+b(d.getMinutes())+":"+b(d.getSeconds())+'"';n=["{"];f=mt.j.stringify;for(l in d)if(Object.prototype.hasOwnProperty.call(d,l))switch(k=
d[l],typeof k){case "undefined":case "unknown":case "function":break;default:e&&n.push(","),e=1,n.push(f(l)+":"+f(k))}n.push("}");return n.join("")}}}();mt.lang={};mt.lang.d=function(a,b){return"[object "+b+"]"==={}.toString.call(a)};mt.lang.Ta=function(a){return mt.lang.d(a,"Number")&&isFinite(a)};mt.lang.Va=function(a){return mt.lang.d(a,"String")};mt.localStorage={};
mt.localStorage.G=function(){if(!mt.localStorage.f)try{mt.localStorage.f=document.createElement("input"),mt.localStorage.f.type="hidden",mt.localStorage.f.style.display="none",mt.localStorage.f.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(mt.localStorage.f)}catch(a){return w}return s};
mt.localStorage.set=function(a,b,e){var d=new Date;d.setTime(d.getTime()+e||31536E6);try{window.localStorage?(b=d.getTime()+"|"+b,window.localStorage.setItem(a,b)):mt.localStorage.G()&&(mt.localStorage.f.expires=d.toUTCString(),mt.localStorage.f.load(document.location.hostname),mt.localStorage.f.setAttribute(a,b),mt.localStorage.f.save(document.location.hostname))}catch(g){}};
mt.localStorage.get=function(a){if(window.localStorage){if(a=window.localStorage.getItem(a)){var b=a.indexOf("|"),e=a.substring(0,b)-0;if(e&&e>(new Date).getTime())return a.substring(b+1)}}else if(mt.localStorage.G())try{return mt.localStorage.f.load(document.location.hostname),mt.localStorage.f.getAttribute(a)}catch(d){}return t};
mt.localStorage.remove=function(a){if(window.localStorage)window.localStorage.removeItem(a);else if(mt.localStorage.G())try{mt.localStorage.f.load(document.location.hostname),mt.localStorage.f.removeAttribute(a),mt.localStorage.f.save(document.location.hostname)}catch(b){}};mt.sessionStorage={};mt.sessionStorage.set=function(a,b){if(window.sessionStorage)try{window.sessionStorage.setItem(a,b)}catch(e){}};
mt.sessionStorage.get=function(a){return window.sessionStorage?window.sessionStorage.getItem(a):t};mt.sessionStorage.remove=function(a){window.sessionStorage&&window.sessionStorage.removeItem(a)};mt.aa={};mt.aa.log=function(a,b){var e=new Image,d="mini_tangram_log_"+Math.floor(2147483648*Math.random()).toString(36);window[d]=e;e.onload=e.onerror=e.onabort=function(){e.onload=e.onerror=e.onabort=t;e=window[d]=t;b&&b(a)};e.src=a};mt.Q={};
mt.Q.za=function(){var a="";if(navigator.plugins&&navigator.mimeTypes.length){var b=navigator.plugins["Shockwave Flash"];b&&b.description&&(a=b.description.replace(/^.*\s+(\S+)\s+\S+$/,"$1"))}else if(window.ActiveXObject)try{if(b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(a=b.GetVariable("$version"))&&(a=a.replace(/^.*\s+(\d+),(\d+).*$/,"$1.$2"))}catch(e){}return a};
mt.Q.Pa=function(a,b,e,d,g){return'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+a+'" width="'+e+'" height="'+d+'"><param name="movie" value="'+b+'" /><param name="flashvars" value="'+(g||"")+'" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="'+a+'" width="'+e+'" height="'+d+'" src="'+b+'" flashvars="'+(g||"")+'" allowscriptaccess="always" /></object>'};mt.url={};
mt.url.i=function(a,b){var e=a.match(RegExp("(^|&|\\?|#)("+b+")=([^&#]*)(&|$|#)",""));return e?e[3]:t};mt.url.Ra=function(a){return(a=a.match(/^(https?:)\/\//))?a[1]:t};mt.url.wa=function(a){return(a=a.match(/^(https?:\/\/)?([^\/\?#]*)/))?a[2].replace(/.*@/,""):t};mt.url.V=function(a){return(a=mt.url.wa(a))?a.replace(/:\d+$/,""):a};mt.url.Qa=function(a){return(a=a.match(/^(https?:\/\/)?[^\/]*(.*)/))?a[2].replace(/[\?#].*/,"").replace(/^$/,"/"):t};
(function(){function a(){for(var a=w,e=document.getElementsByTagName("script"),d=e.length,d=100<d?100:d,g=0;g<d;g++){var l=e[g].src;if(l&&0===l.indexOf("https://hm.baidu.com/h")){a=s;break}}return a}return h.sa=a})();var A=h.sa;
h.p={Sa:"http://tongji.baidu.com/hm-web/welcome/ico",N:"hm.baidu.com/hm.gif",fa:"baidu.com",Da:"hmmd",Ea:"hmpl",Ca:"hmkw",Aa:"hmci",Fa:"hmsr",Ba:"hmcu",s:0,k:Math.round(+new Date/1E3),protocol:"https:"===document.location.protocol?"https:":"http:",C:A()||"https:"===document.location.protocol?"https:":"http:",Ua:0,la:6E5,ma:10,R:1024,ka:1,o:2147483647,ba:"cc cf ci ck cl cm cp cu cw ds ep et fl ja ln lo lt nv rnd si st su v cv lv api u tt".split(" ")};
(function(){var a={m:{},c:function(a,e){this.m[a]=this.m[a]||[];this.m[a].push(e)},z:function(a,e){this.m[a]=this.m[a]||[];for(var d=this.m[a].length,g=0;g<d;g++)this.m[a][g](e)}};return h.r=a})();
(function(){function a(a,d){var g=document.createElement("script");g.charset="utf-8";b.d(d,"Function")&&(g.readyState?g.onreadystatechange=function(){if("loaded"===g.readyState||"complete"===g.readyState)g.onreadystatechange=t,d()}:g.onload=function(){d()});g.src=a;var l=document.getElementsByTagName("script")[0];l.parentNode.insertBefore(g,l)}var b=mt.lang;return h.load=a})();
(function(){function a(){var a="";h.b.a.nv?(a=encodeURIComponent(document.referrer),window.sessionStorage?e.set("Hm_from_"+c.id,a):b.set("Hm_from_"+c.id,a,864E5)):a=(window.sessionStorage?e.get("Hm_from_"+c.id):b.get("Hm_from_"+c.id))||"";return a}var b=mt.localStorage,e=mt.sessionStorage;return h.S=a})();
(function(){var a=mt.l,b=mt.event,e=mt.h,d=h.p,g=[],l={ca:function(){c.ctrk&&(b.c(document,"mouseup",l.ia()),b.c(window,"unload",function(){l.D()}),setInterval(function(){l.D()},d.la))},ia:function(){return function(a){a=l.ua(a);if(""!==a){var b=(d.C+"//"+d.N+"?"+h.b.$().replace(/ep=[^&]*/,"ep="+encodeURIComponent("["+a+"]"))).length;b+(d.o+"").length>d.R||(b+encodeURIComponent(g.join(",")+(g.length?",":"")).length+(d.o+"").length>d.R&&l.D(),g.push(a),(g.length>=d.ma||/t:a/.test(a))&&l.D())}}},ua:function(b){if(0===
d.ka){var f=b.target||b.srcElement,k=f.tagName.toLowerCase();if("embed"==k||"object"==k)return""}e.X?(f=Math.max(document.documentElement.scrollTop,document.body.scrollTop),k=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft),k=b.clientX+k,f=b.clientY+f):(k=b.pageX,f=b.pageY);var m=window.innerWidth||document.documentElement.clientWidth||document.body.offsetWidth;switch(c.align){case 1:k-=m/2;break;case 2:k-=m}k="{x:"+k+",y:"+f+",";f=b.target||b.srcElement;return k=(b="a"==f.tagName.toLowerCase()?
f:a.ta(f))?k+("t:a,u:"+encodeURIComponent(b.href)+"}"):k+"t:b}"},D:function(){0!==g.length&&(h.b.a.et=2,h.b.a.ep="["+g.join(",")+"]",h.b.g(),g=[])}};h.r.c("pv-b",l.ca);return l})();
(function(){var a=mt.l,b=h.p,e=h.load,d=h.S;h.r.c("pv-b",function(){c.rec&&a.O(function(){for(var g=0,l=c.rp.length;g<l;g++){var n=c.rp[g][0],f=c.rp[g][1],k=a.T("hm_t_"+n);if(f&&!(2==f&&!k||k&&""!==k.innerHTML))k="",k=Math.round(Math.random()*b.o),k=4==f?"http://crs.baidu.com/hl.js?"+["siteId="+c.id,"planId="+n,"rnd="+k].join("&"):"http://crs.baidu.com/t.js?"+["siteId="+c.id,"planId="+n,"from="+d(),"referer="+encodeURIComponent(document.referrer),"title="+encodeURIComponent(document.title),"rnd="+
k].join("&"),e(k)}})})})();(function(){var a=h.p,b=h.load,e=h.S;h.r.c("pv-b",function(){if(c.trust&&c.vcard){var d="https://trust.baidu.com/vcard/v.js?"+["siteid="+c.vcard,"url="+encodeURIComponent(document.location.href),"source="+e(),"rnd="+Math.round(Math.random()*a.o),"hm=1"].join("&");b(d)}})})();
(function(){function a(){return function(){h.b.a.nv=0;h.b.a.st=4;h.b.a.et=3;h.b.a.ep=h.H.xa()+","+h.H.va();h.b.g()}}function b(){clearTimeout(y);var a;x&&(a="visible"==document[x]);z&&(a=!document[z]);f="undefined"==typeof a?s:a;if((!n||!k)&&f&&m)u=s,p=+new Date;else if(n&&k&&(!f||!m))u=w,q+=+new Date-p;n=f;k=m;y=setTimeout(b,100)}function e(a){var k=document,p="";if(a in k)p=a;else for(var b=["webkit","ms","moz","o"],d=0;d<b.length;d++){var q=b[d]+a.charAt(0).toUpperCase()+a.slice(1);if(q in k){p=
q;break}}return p}function d(a){if(!("focus"==a.type||"blur"==a.type)||!(a.target&&a.target!=window))m="focus"==a.type||"focusin"==a.type?s:w,b()}var g=mt.event,l=h.r,n=s,f=s,k=s,m=s,v=+new Date,p=v,q=0,u=s,x=e("visibilityState"),z=e("hidden"),y;b();(function(){var a=x.replace(/[vV]isibilityState/,"visibilitychange");g.c(document,a,b);g.c(window,"pageshow",b);g.c(window,"pagehide",b);"object"==typeof document.onfocusin?(g.c(document,"focusin",d),g.c(document,"focusout",d)):(g.c(window,"focus",d),
g.c(window,"blur",d))})();h.H={xa:function(){return+new Date-v},va:function(){return u?+new Date-p+q:q}};l.c("pv-b",function(){g.c(window,"unload",a())});return h.H})();
(function(){var a=mt.lang,b=h.p,e=h.load,d={Ha:function(d){if((window._dxt===r||a.d(window._dxt,"Array"))&&"undefined"!==typeof h.b){var l=h.b.J();e([b.protocol,"//datax.baidu.com/x.js?si=",c.id,"&dm=",encodeURIComponent(l)].join(""),d)}},Oa:function(b){if(a.d(b,"String")||a.d(b,"Number"))window._dxt=window._dxt||[],window._dxt.push(["_setUserId",b])}};return h.na=d})();
(function(){function a(k){for(var b in k)if({}.hasOwnProperty.call(k,b)){var d=k[b];e.d(d,"Object")||e.d(d,"Array")?a(d):k[b]=String(d)}}function b(a){return a.replace?a.replace(/'/g,"'0").replace(/\*/g,"'1").replace(/!/g,"'2"):a}var e=mt.lang,d=mt.j,g=h.p,l=h.r,n=h.na,f={w:[],F:0,Y:w,init:function(){f.e=0;l.c("pv-b",function(){f.oa();f.qa()});l.c("pv-d",f.ra);l.c("stag-b",function(){h.b.a.api=f.e||f.F?f.e+"_"+f.F:""});l.c("stag-d",function(){h.b.a.api=0;f.e=0;f.F=0})},oa:function(){var a=window._hmt||
[];if(!a||e.d(a,"Array"))window._hmt={id:c.id,cmd:{},push:function(){for(var a=window._hmt,k=0;k<arguments.length;k++){var p=arguments[k];e.d(p,"Array")&&(a.cmd[a.id].push(p),"_setAccount"===p[0]&&(1<p.length&&/^[0-9a-f]{32}$/.test(p[1]))&&(p=p[1],a.id=p,a.cmd[p]=a.cmd[p]||[]))}}},window._hmt.cmd[c.id]=[],window._hmt.push.apply(window._hmt,a)},qa:function(){var a=window._hmt;if(a&&a.cmd&&a.cmd[c.id])for(var b=a.cmd[c.id],d=/^_track(Event|MobConv|Order|RTEvent)$/,p=0,q=b.length;p<q;p++){var e=b[p];
d.test(e[0])?f.w.push(e):f.M(e)}a.cmd[c.id]={push:f.M}},ra:function(){if(0<f.w.length)for(var a=0,b=f.w.length;a<b;a++)f.M(f.w[a]);f.w=t},M:function(a){var b=a[0];if(f.hasOwnProperty(b)&&e.d(f[b],"Function"))f[b](a)},_setAccount:function(a){1<a.length&&/^[0-9a-f]{32}$/.test(a[1])&&(f.e|=1)},_setAutoPageview:function(a){if(1<a.length&&(a=a[1],w===a||s===a))f.e|=2,h.b.W=a},_trackPageview:function(a){if(1<a.length&&a[1].charAt&&"/"===a[1].charAt(0)){f.e|=4;h.b.a.et=0;h.b.a.ep="";h.b.K?(h.b.a.nv=0,h.b.a.st=
4):h.b.K=s;var b=h.b.a.u,d=h.b.a.su;h.b.a.u=g.protocol+"//"+document.location.host+a[1];f.Y||(h.b.a.su=document.location.href);h.b.g();h.b.a.u=b;h.b.a.su=d}},_trackEvent:function(a){2<a.length&&(f.e|=8,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=4,h.b.a.ep=b(a[1])+"*"+b(a[2])+(a[3]?"*"+b(a[3]):"")+(a[4]?"*"+b(a[4]):""),h.b.g())},_setCustomVar:function(a){if(!(4>a.length)){var d=a[1],e=a[4]||3;if(0<d&&6>d&&0<e&&4>e){f.F++;for(var p=(h.b.a.cv||"*").split("!"),q=p.length;q<d-1;q++)p.push("*");p[d-1]=e+"*"+b(a[2])+
"*"+b(a[3]);h.b.a.cv=p.join("!");a=h.b.a.cv.replace(/[^1](\*[^!]*){2}/g,"*").replace(/((^|!)\*)+$/g,"");""!==a?h.b.setData("Hm_cv_"+c.id,encodeURIComponent(a),c.age):h.b.Ia("Hm_cv_"+c.id)}}},_setReferrerOverride:function(a){1<a.length&&(h.b.a.su=a[1].charAt&&"/"===a[1].charAt(0)?g.protocol+"//"+window.location.host+a[1]:a[1],f.Y=s)},_trackOrder:function(b){b=b[1];e.d(b,"Object")&&(a(b),f.e|=16,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=94,h.b.a.ep=d.stringify(b),h.b.g())},_trackMobConv:function(a){if(a={webim:1,
tel:2,map:3,sms:4,callback:5,share:6}[a[1]])f.e|=32,h.b.a.et=93,h.b.a.ep=a,h.b.g()},_trackRTPageview:function(b){b=b[1];e.d(b,"Object")&&(a(b),b=d.stringify(b),512>=encodeURIComponent(b).length&&(f.e|=64,h.b.a.rt=b))},_trackRTEvent:function(b){b=b[1];if(e.d(b,"Object")){a(b);b=encodeURIComponent(d.stringify(b));var m=function(a){var b=h.b.a.rt;f.e|=128;h.b.a.et=90;h.b.a.rt=a;h.b.g();h.b.a.rt=b},l=b.length;if(900>=l)m.call(this,b);else for(var l=Math.ceil(l/900),p="block|"+Math.round(Math.random()*
g.o).toString(16)+"|"+l+"|",q=[],u=0;u<l;u++)q.push(u),q.push(b.substring(900*u,900*u+900)),m.call(this,p+q.join("|")),q=[]}},_setUserId:function(a){a=a[1];n.Ha();n.Oa(a)}};f.init();h.ga=f;return h.ga})();
(function(){function a(){"undefined"===typeof window["_bdhm_loaded_"+c.id]&&(window["_bdhm_loaded_"+c.id]=s,this.a={},this.W=s,this.K=w,this.init())}var b=mt.url,e=mt.aa,d=mt.Q,g=mt.lang,l=mt.cookie,n=mt.h,f=mt.localStorage,k=mt.sessionStorage,m=h.p,v=h.r;a.prototype={L:function(a,b){a="."+a.replace(/:\d+/,"");b="."+b.replace(/:\d+/,"");var d=a.indexOf(b);return-1<d&&d+b.length===a.length},Z:function(a,b){a=a.replace(/^https?:\/\//,"");return 0===a.indexOf(b)},A:function(a){for(var d=0;d<c.dm.length;d++)if(-1<
c.dm[d].indexOf("/")){if(this.Z(a,c.dm[d]))return s}else{var e=b.V(a);if(e&&this.L(e,c.dm[d]))return s}return w},J:function(){for(var a=document.location.hostname,b=0,d=c.dm.length;b<d;b++)if(this.L(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[\/\?#].*/,"");return a},U:function(){for(var a=0,b=c.dm.length;a<b;a++){var d=c.dm[a];if(-1<d.indexOf("/")&&this.Z(document.location.href,d))return d.replace(/^[^\/]+(\/.*)/,"$1")+"/"}return"/"},ya:function(){if(!document.referrer)return m.k-m.s>c.vdur?1:4;var a=
w;this.A(document.referrer)&&this.A(document.location.href)?a=s:(a=b.V(document.referrer),a=this.L(a||"",document.location.hostname));return a?m.k-m.s>c.vdur?1:4:3},getData:function(a){try{return l.get(a)||k.get(a)||f.get(a)}catch(b){}},setData:function(a,b,d){try{l.set(a,b,{domain:this.J(),path:this.U(),I:d}),d?f.set(a,b,d):k.set(a,b)}catch(e){}},Ia:function(a){try{l.set(a,"",{domain:this.J(),path:this.U(),I:-1}),k.remove(a),f.remove(a)}catch(b){}},Ma:function(){var a,b,d,e,f;m.s=this.getData("Hm_lpvt_"+
c.id)||0;13===m.s.length&&(m.s=Math.round(m.s/1E3));b=this.ya();a=4!==b?1:0;if(d=this.getData("Hm_lvt_"+c.id)){e=d.split(",");for(f=e.length-1;0<=f;f--)13===e[f].length&&(e[f]=""+Math.round(e[f]/1E3));for(;2592E3<m.k-e[0];)e.shift();f=4>e.length?2:3;for(1===a&&e.push(m.k);4<e.length;)e.shift();d=e.join(",");e=e[e.length-1]}else d=m.k,e="",f=1;this.setData("Hm_lvt_"+c.id,d,c.age);this.setData("Hm_lpvt_"+c.id,m.k);d=m.k===this.getData("Hm_lpvt_"+c.id)?"1":"0";if(0===c.nv&&this.A(document.location.href)&&
(""===document.referrer||this.A(document.referrer)))a=0,b=4;this.a.nv=a;this.a.st=b;this.a.cc=d;this.a.lt=e;this.a.lv=f},$:function(){for(var a=[],b=this.a.et,d=0,e=m.ba.length;d<e;d++){var f=m.ba[d],g=this.a[f];"undefined"!==typeof g&&""!==g&&("tt"!==f||"tt"===f&&0===b)&&a.push(f+"="+encodeURIComponent(g))}this.a.rt&&(0===b?a.push("rt="+encodeURIComponent(this.a.rt)):90===b&&a.push("rt="+this.a.rt));return a.join("&")},Na:function(){this.Ma();this.a.si=c.id;this.a.su=document.referrer;this.a.ds=
n.Ja;this.a.cl=n.colorDepth+"-bit";this.a.ln=String(n.language).toLowerCase();this.a.ja=n.javaEnabled?1:0;this.a.ck=n.cookieEnabled?1:0;this.a.lo="number"===typeof _bdhm_top?1:0;this.a.fl=d.za();this.a.v="1.2.11";this.a.cv=decodeURIComponent(this.getData("Hm_cv_"+c.id)||"");this.a.tt=document.title||"";var a=document.location.href;this.a.cm=b.i(a,m.Da)||"";this.a.cp=b.i(a,m.Ea)||"";this.a.cw=b.i(a,m.Ca)||"";this.a.ci=b.i(a,m.Aa)||"";this.a.cf=b.i(a,m.Fa)||"";this.a.cu=b.i(a,m.Ba)||""},init:function(){try{this.Na(),
0===this.a.nv?this.La():this.P(".*"),h.b=this,this.ha(),v.z("pv-b"),this.Ka()}catch(a){var b=[];b.push("si="+c.id);b.push("n="+encodeURIComponent(a.name));b.push("m="+encodeURIComponent(a.message));b.push("r="+encodeURIComponent(document.referrer));e.log(m.C+"//"+m.N+"?"+b.join("&"))}},Ka:function(){function a(){v.z("pv-d")}this.W?(this.K=s,this.a.et=0,this.a.ep="",this.g(a)):a()},g:function(a){var b=this;b.a.rnd=Math.round(Math.random()*m.o);v.z("stag-b");var d=m.C+"//"+m.N+"?"+b.$();v.z("stag-d");
b.ea(d);e.log(d,function(d){b.P(d);g.d(a,"Function")&&a.call(b)})},ha:function(){var a=document.location.hash.substring(1),d=RegExp(c.id),e=-1<document.referrer.indexOf(m.fa),f=b.i(a,"jn"),g=/^heatlink$|^select$/.test(f);a&&(d.test(a)&&e&&g)&&(this.a.rnd=Math.round(Math.random()*m.o),a=document.createElement("script"),a.setAttribute("type","text/javascript"),a.setAttribute("charset","utf-8"),a.setAttribute("src",m.protocol+"//"+c.js+f+".js?"+this.a.rnd),f=document.getElementsByTagName("script")[0],
f.parentNode.insertBefore(a,f))},ea:function(a){var b=k.get("Hm_unsent_"+c.id)||"",d=this.a.u?"":"&u="+encodeURIComponent(document.location.href),b=encodeURIComponent(a.replace(/^https?:\/\//,"")+d)+(b?","+b:"");k.set("Hm_unsent_"+c.id,b)},P:function(a){var b=k.get("Hm_unsent_"+c.id)||"";b&&(a=encodeURIComponent(a.replace(/^https?:\/\//,"")),a=RegExp(a.replace(/([\*\(\)])/g,"\\$1")+"(%26u%3D[^,]*)?,?","g"),(b=b.replace(a,"").replace(/,$/,""))?k.set("Hm_unsent_"+c.id,b):k.remove("Hm_unsent_"+c.id))},
La:function(){var a=this,b=k.get("Hm_unsent_"+c.id);if(b)for(var b=b.split(","),d=function(b){e.log(m.C+"//"+decodeURIComponent(b),function(b){a.P(b)})},f=0,g=b.length;f<g;f++)d(b[f])}};return new a})();
(function(){var a=mt.l,b=mt.event,e=mt.url,d=mt.j;try{if(window.performance&&performance.timing&&"undefined"!==typeof h.b){var g=+new Date,l=function(a){var b=performance.timing,d=b[a+"Start"]?b[a+"Start"]:0;a=b[a+"End"]?b[a+"End"]:0;return{start:d,end:a,value:0<a-d?a-d:0}},n=t;a.O(function(){n=+new Date});var f=function(){var a,b,f;f=l("navigation");b=l("request");f={netAll:b.start-f.start,netDns:l("domainLookup").value,netTcp:l("connect").value,srv:l("response").start-b.start,dom:performance.timing.domInteractive-
performance.timing.fetchStart,loadEvent:l("loadEvent").end-f.start};a=document.referrer;var k=a.match(/^(http[s]?:\/\/)?([^\/]+)(.*)/)||[],u=t;b=t;if("www.baidu.com"===k[2]||"m.baidu.com"===k[2])u=e.i(a,"qid"),b=e.i(a,"click_t");a=u;f.qid=a!=t?a:"";b!=t?(f.bdDom=n?n-b:0,f.bdRun=g-b,f.bdDef=l("navigation").start-b):(f.bdDom=0,f.bdRun=0,f.bdDef=0);h.b.a.et=87;h.b.a.ep=d.stringify(f);h.b.g()};b.c(window,"load",function(){setTimeout(f,500)})}}catch(k){}})();
(function(){var a=mt.h,b=mt.lang,e=mt.event,d=mt.j;if("undefined"!==typeof h.b&&(c.med||(!a.X||7<a.Ga)&&c.cvcc)){var g,l,n,f,k=function(a){if(a.item){for(var b=a.length,d=Array(b);b--;)d[b]=a[b];return d}return[].slice.call(a)},m=function(a,b){for(var d in a)if(a.hasOwnProperty(d)&&b.call(a,d,a[d])===w)return w},v=function(a,f){var e={};e.n=g;e.t="clk";e.v=a;if(f){var k=f.getAttribute("href"),l=f.getAttribute("onclick")?""+f.getAttribute("onclick"):t,m=f.getAttribute("id")||"";n.test(k)?(e.sn="mediate",
e.snv=k):b.d(l,"String")&&n.test(l)&&(e.sn="wrap",e.snv=l);e.id=m}h.b.a.et=86;h.b.a.ep=d.stringify(e);h.b.g();for(e=+new Date;400>=+new Date-e;);};if(c.med)l="/zoosnet",g="swt",n=/swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i,f={click:function(){for(var a=[],b=k(document.getElementsByTagName("a")),b=[].concat.apply(b,k(document.getElementsByTagName("area"))),b=[].concat.apply(b,k(document.getElementsByTagName("img"))),d,e,f=0,g=b.length;f<g;f++)d=b[f],e=d.getAttribute("onclick"),
d=d.getAttribute("href"),(n.test(e)||n.test(d))&&a.push(b[f]);return a}};else if(c.cvcc){l="/other-comm";g="other";n=c.cvcc.q||r;var p=c.cvcc.id||r;f={click:function(){for(var a=[],b=k(document.getElementsByTagName("a")),b=[].concat.apply(b,k(document.getElementsByTagName("area"))),b=[].concat.apply(b,k(document.getElementsByTagName("img"))),d,e,f,g=0,l=b.length;g<l;g++)d=b[g],n!==r?(e=d.getAttribute("onclick"),f=d.getAttribute("href"),p?(d=d.getAttribute("id"),(n.test(e)||n.test(f)||p.test(d))&&
a.push(b[g])):(n.test(e)||n.test(f))&&a.push(b[g])):p!==r&&(d=d.getAttribute("id"),p.test(d)&&a.push(b[g]));return a}}}if("undefined"!==typeof f&&"undefined"!==typeof n){var q;l+=/\/$/.test(l)?"":"/";var u=function(a,d){if(q===d)return v(l+a,d),w;if(b.d(d,"Array")||b.d(d,"NodeList"))for(var e=0,f=d.length;e<f;e++)if(q===d[e])return v(l+a+"/"+(e+1),d[e]),w};e.c(document,"mousedown",function(a){a=a||window.event;q=a.target||a.srcElement;var d={};for(m(f,function(a,e){d[a]=b.d(e,"Function")?e():document.getElementById(e)});q&&
q!==document&&m(d,u)!==w;)q=q.parentNode})}}})();(function(){var a=mt.l,b=mt.lang,e=mt.event,d=mt.j;if("undefined"!==typeof h.b&&b.d(c.cvcf,"Array")&&0<c.cvcf.length){var g={da:function(){for(var b=c.cvcf.length,d,f=0;f<b;f++)(d=a.T(decodeURIComponent(c.cvcf[f])))&&e.c(d,"click",g.pa())},pa:function(){return function(){h.b.a.et=86;var a={n:"form",t:"clk"};a.id=this.id;h.b.a.ep=d.stringify(a);h.b.g()}}};a.O(function(){g.da()})}})();
(function(){var a=mt.event,b=mt.j;if(c.med&&"undefined"!==typeof h.b){var e=+new Date,d={n:"anti",sb:0,kb:0,clk:0},g=function(){h.b.a.et=86;h.b.a.ep=b.stringify(d);h.b.g()};a.c(document,"click",function(){d.clk++});a.c(document,"keyup",function(){d.kb=1});a.c(window,"scroll",function(){d.sb++});a.c(window,"unload",function(){d.t=+new Date-e;g()});a.c(window,"load",function(){setTimeout(g,5E3)})}})();})();
