/*
* @Author: ocean
* @Date:   2015-06-29 10:14:28
* @Last Modified by:   ocean
* @Last Modified time: 2015-12-17 16:05:38
*/

'use strict';
var ua = window.navigator.userAgent.toLowerCase();

var oTools = {
    charset: 'utf-8',
    // 版本检测
	isAndroid: /android/i.test(ua),
	isIOS: /iphone|ipad|ipod/i.test(ua),
	isWechat: /MicroMessenger/i.test(ua),
    // 检测是否支持 touch 事件
    clickEvent: "ontouchstart" in document.documentElement ? "tap" : "click",
    ranNum: Math.ceil(Math.random() * 1e10),
    timeNum: Date.now(),

    $: function(s){
        return document.querySelectorAll(s);
    },
    $$: function(s){
        return document.querySelector(s);
    },
    alertmess: function(str, time){
        var html = '<div class="mess">' + str + '</div>',
            fullW = $(window).width(),
            fullH = $(window).height(),
            twidth = parseInt(fullW * 0.8);

        if($('.mess').size() < 1){
            $('body').append(html);

            $('.mess').css({
                'width' : twidth,
                'min-height': '30px',
                'line-height' : '30px',
                'font-size': '16px',
                'marginLeft' : parseInt(-twidth/2-10),
                'background' : 'rgba(0, 0, 0, .8)',
                'color' : '#fff',
                'z-index' : 99999,
                'position' : 'fixed',
                'left' : '50%',
                'top' : '40%',
                'border-radius' : '5px',
                'text-align' : 'center',
                'padding' : '5px 10px'
            }).fadeIn();

            setTimeout(function(){
                $('.mess').fadeOut(function(){
                    $('.mess').remove();
                });
            }, time || 2000);
        }
    },
    emptyArr: function(arr){
        arr.splice(0, arr.length);
        return arr;
    },
    addDomLoaded: function(fn){
        if(document.addEventListener){
            document.addEventListener('DOMContentLoaded', function(){
                fn();
                document.removeEventListener('DOMContentLoaded');
            }, false);
        }
    },
    // cookie
    getcookie: function(name) {
        var cookie_start = document.cookie.indexOf(name);
        var cookie_end = document.cookie.indexOf(";", cookie_start);
        return cookie_start == -1 ? '' : unescape(document.cookie.substring(cookie_start + name.length + 1, (cookie_end > cookie_start ? cookie_end : document.cookie.length)));
    },
    setcookie: function(cookieName, cookieValue, seconds, path, domain, secure) {
        var expires = new Date();
        expires.setTime(expires.getTime() + seconds);
        document.cookie = escape(cookieName) + '=' + escape(cookieValue)
                + (expires ? '; expires=' + expires.toGMTString() : '')
                + (path ? '; path=' + path : '; path=/')
                + (domain ? '; domain=' + domain : '')
                + (secure ? '; secure' : '');
    },
    //删除cookie
    unsetCookie: function(name) {
        document.cookie = name + "= ; expires=" + new Date(0);
    },
    // url操作
    getQuery: function(key) {
        var search = window.location.search;
        if (search.indexOf('?') != -1) {
            var params = search.substr(1).split('&');
            var query = {};
            var q = [];
            var name = '';

            for (i = 0; i < params.length; i++) {
                q = params[i].split('=');
                name = decodeURIComponent(q[0]);

                if (name.substr(-2) == '[]') {
                    if (!query[name]) {
                        query[name] = [];
                    }
                    query[name].push(q[1]);
                } else {
                    query[name] = q[1];
                }

            }
            if (key) {
                if (query[key]) {
                    return query[key];
                }

                return null;
            } else {
                return query;
            }
        }
    },
    // 清空字符串空格
    trim: function(str) {
        return str.replace(/(^\s*)|(\s*$)/g, '');
    },
    // 判断是否是空对象
    isObjectEmpty: function(obj){
        for (i in obj){
            return false
        }
        return true;
    },
    // 字符串长度，中英文都是1个字符
    strlength: function(str) {
        return (/msie/.test(navigator.userAgent.toLowerCase()) && str.indexOf('\n') !== -1) ? str.replace(/\r?\n/g, '_').length : str.length;
    },
    // 截取字符串，中英文都是1个字节
    cutstr: function (str,len){
        var str_length = 0;
        var str_len = 0;
            str_cut = new String();
            str_len = str.length;
        for(var i = 0;i<str_len;i++){
            a = str.charAt(i);
            str_length++;
            if(escape(a).length > 4){
                //中文字符的长度经编码之后大于4
                str_length++;
            }
            str_cut = str_cut.concat(a);
            if(str_length>=len){
                str_cut = str_cut.concat("...");
                return str_cut;
            }
        }
        //如果给定字符串小于指定长度，则返回源字符串；
        if(str_length<len){
            return  str;
        }
    },
    //随机颜色
    randomColor: function(){
        var col = [0, 1, 2];
        col[0] = Math.random() * 100 + 155;
        col[0] = col[0].toFixed();
        col[1] = Math.random() * 100 + 155;
        col[1] = col[1].toFixed();
        col[2] = Math.random() * 100 + 155;
        col[2] = col[2].toFixed();
        var num = Math.floor(Math.random() * 3);
        col[num] = 0;
        return "rgba(" + col[0] + "," + col[1] + "," + col[2] + ",";
    },
    //指定范围随机数  selectForm(2, 10);
    selectForm: function(lowerValue, upperValue){
        var choices = upperValue - lowerValue + 1;
        return Math.floor(Math.random() * choices + lowerValue);
    },
    animationEnd: function(ele, addFlash){
      var events = ["animationend", "webkitAnimationEnd", "mozAnimationEnd", "MSAnimationEnd", "oanimationend"];
      if(ele){
        for (var i = 0; i < events.length; i++) {
          ele.addEventListener(events[i], addFlash, false);
        }
      }
    }
}

var OO = {
    // 判断属性是否来自原型
    hasPrototypeProperty: function(object, name){
        return !object.hasOwnproperty(name) && (name in object);
    },
    getAbsoluteURL: (function(){
        var a;

        return function(url){
            if(!a) a = document.createElement('a');
            a.href = url;

            return a.href;
        }
    })(),
    setStyle: function(elem, prop){
        if(!elem){
            return false;
        };
        for(var i in prop){
            elem.style[i] = prop[i];
        }
    }
};

//html5 动画
// window.requestAnimationFrame = (function() {
//     return window.requestAnimationFrame ||
//         window.webkitRequestAnimationFrame ||
//         window.mozRequestAnimationFrame ||
//         window.oRequestAnimationFrame ||
//         // if all else fails, use setTimeout
//         function(callback) {
//             return window.setTimeout(callback, 1000 / 60); // shoot for 60 fps
//         };
// })();

// window.cancelAnimationFrame = (function() {
//     return window.cancelAnimationFrame ||
//         window.webkitCancelAnimationFrame ||
//         window.mozCancelAnimationFrame ||
//         window.oCancelAnimationFrame ||
//         function(id) {
//             window.clearTimeout(id);
//         };
// })();


/* requestAnimationFrame.js
 * by zhangxinxu 2013-09-30
*/
(function() {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||    // name has changed in Webkit
                                      window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
            var id = window.setTimeout(function() {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
    }
})();

// html5 audio
window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext;

// 页面data-href跳转事件
$(function(){
    $(document).on(oTools.clickEvent, '*[data-href]', function(){
        var $_this = $(this);

        location.href = $_this.attr('data-href');
    });
});

// 事件截流
function Processor(fn){
    this.timeoutId = null;
    this.performProcessing = fn;
    this.process();
}

Processor.prototype.process = function(e){
        clearTimeout(this.timeoutId);

        var that = this;
        this.timeoutId = setTimeout(function(){
            that.performProcessing(e);
        }, 100);
}

/*
* @Author: ocean
* @Date:   2015-06-29 10:16:24
* @Last Modified by:   ocean
* @Last Modified time: 2016-04-13 13:17:55
*/

var publoading = function(arg){
	var isEmpty = function(obj){
		var name;
		for(name in obj){
			return false;
		}
		return true;
	};
	var pathRoundRect = function(ctx, width, height, radius){
        ctx.beginPath();
        ctx.arc(width - radius, height - radius, radius, 0, Math.PI / 2);
        ctx.lineTo(radius, height);
        ctx.arc(radius, height - radius, radius, Math.PI / 2, Math.PI);
        ctx.lineTo(0, radius);
        ctx.arc(radius, radius, radius, Math.PI, Math.PI * 3 / 2);
        ctx.lineTo(width - radius, 0);
        ctx.arc(width - radius, radius, radius, Math.PI * 3 / 2, Math.PI * 2);
        ctx.closePath();
	};
    var fillRoundRect = function (ctx, x, y, width, height, radius, /*optional*/fillColor){
        if(2*radius > width || 2*radius > height){
            return;
        }
        ctx.save();
        ctx.translate(x, y);
        pathRoundRect(ctx, width, height,radius);
        ctx.fillStyle = fillColor || "black";
        ctx.globalAlpha = 0.5;
        ctx.fill();
        ctx.restore();
    };

	function LoadingImg(arg){
		this.page_body = document.getElementsByTagName("html")[0];
	    this.init(arg);
	}

	LoadingImg.prototype = {
	    constructor:LoadingImg,
	    init: function (arg) {

	        var isConsist = !isEmpty(arg);
	        this.id = isConsist ? arg.id ? arg.id : 'loading' : 'loading';
	        this.block = isConsist ? arg.block ? arg.block : 12 : 12;
	        this.height = isConsist ? arg.height ? arg.height : 15 : 15;
	        this.width = isConsist ? arg.width ? arg.width : 3 : 3;
	        this.time = isConsist ? arg.time ? arg.time : 100 : 100;
	        this.full = arg.full || false;

	    },
	    start: function(){

	    	var flag = true;
	    	var childs = this.page_body.childNodes;

			for(var i = 0, l = childs.length; i < l; i ++){
				if(childs[i].nodeName.toLowerCase() == "canvas" && childs[i].id == this.id){
					flag = false;
				}else{
					flag = true;
				}
			}

			if(flag){
		    	this.createDom();
		    	this.setStyle();
		    	this.draw();
			}

	    },
	    createDom: function(){
			this.canvas = document.createElement('canvas');
			this.offcanvas = document.createElement('canvas');

			if(this.full){
				this.fullBg = document.createElement('div');
	       	 	this.fullBg.appendChild(this.canvas);
				this.page_body.appendChild(this.fullBg);
			}else{
		        this.page_body.appendChild(this.canvas);
			}


	    },
	    setStyle: function(){
	    	if(this.fullBg){
	    		this.fullBg.style.backgroundColor = 'rgba(0, 0, 0, .6)';
	    		this.fullBg.style.position = 'fixed';
	    		this.fullBg.style.top = '0';
	    		this.fullBg.style.zIndex = 99;
	    		this.fullBg.style.width = '100%';
	    		this.fullBg.style.height = '100%';
	    	}

	    	this.canvas.id = this.id;
	        this.canvas.width = this.offcanvas.width = 160;
	        this.canvas.height = this.offcanvas.height = 160;
	        this.canvas.style.width = this.offcanvas.style.width = "80px";
	        this.canvas.style.height = this.offcanvas.style.height = "80px";
	        this.canvas.style.position = 'fixed';
	    	this.canvas.style.zIndex = 999;
	        this.canvas.style.top = '30%';
	        this.canvas.style.left = '50%';
	        this.canvas.style.marginLeft = '-40px';
	    },
	    draw: function(){
	    	this.ctx = this.canvas.getContext("2d");

	        this.offctx = this.offcanvas.getContext("2d");
	        this.offctx.width = this.height*6;
	        this.offctx.height = this.height*6;

	        this.offctx.translate(this.offctx.width/1.5, this.offctx.height/1.5);
	        var radius = 2;

	        this.view(radius);

	    },
	    loop: function(alpha){
	        this.offctx.rotate(Math.PI*2/this.block);
	        this.offctx.beginPath();
	        this.offctx.fillStyle = "rgba(255,255,255,"+alpha+")";
	        this.offctx.arc(0, this.offctx.width/2-this.height*2,this.width/2, 0 ,Math.PI, true);
	        this.offctx.arc(0, this.offctx.width/2-this.height, this.width/2, Math.PI, 0, true);
	        this.offctx.closePath();
	        this.offctx.fill();
	    },
	    view: function(radius){
	        var that = this;
	        this.offctx.rotate(Math.PI*2/this.block);

			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

	        if(!this.full){
				fillRoundRect(this.ctx, 0, 0, this.canvas.width, this.canvas.height, 10);
			}
            this.ctx.drawImage(this.offcanvas, 0, 0);
            this.offctx.clearRect(-this.offctx.width/2, -this.offctx.height/2, this.offctx.width, this.offctx.height);

            radius >= this.block? radius = 1:radius += 1;

	        for(var i = 1; i <= this.block; i ++){
	            this.loop(i/this.block);
	        };

	        this.timeout = setTimeout(function(){
	            that.view(radius);
	        }, that.time);

	    },
	    removeDom: function(){
	    	var that = this;

			this.fullBg.parentNode.removeChild(this.fullBg);
            clearTimeout(that.timeout);
	    },
	    close: function(){
	    	this.removeDom();
	    }
	}
	return new LoadingImg(arg);
};

/********************************************
// -- 调用DEMO
*********************************************/

var pubfullLoad = publoading({
	'id': 'publoading',
	'width': 5,
	'height': 20,
	'full': true
});
