/*
 * ZQDL执行脚本
 * author:gaoshiyong<gaoshiyong1272@vip.163.com>
 * jQuery版本必须在1.42以上
 */

/**
 * [description] 语言包内容
 * @return {[type]} [description]
 */
var LANG = window.LANG || {};



//中文简体
LANG.cn = window.LANG.cn || {};
LANG.cn['loading']                             		= '加载中';
LANG.cn['load_tips']                             	= '加载中，请稍后…';
LANG.cn['inter_url']                             	= '请输入请求地址！';
LANG.cn['char']                             		= '字符';
LANG.cn['back_to_top']                           	= '返回顶部';
LANG.cn['you_can_inter_char']                       = '您可以输入@=@char@=@个字';
LANG.cn['your_input_has_exceeded']                  = '您的输入已经超过了@=@char@=@字';
LANG.cn['upload_image_type_error']                  = '上传文件格式有误，请重新上传！';
LANG.cn['upload_image_time_out']                  	= '上传文件超时，请重试！';


function OASGetLangVal(key){
	return LANG.cn[key];
}

/**
 * [description] 加载JOSN组件(JSON.stringify(JSON),JSON.parse(str))
 * @return {[type]} [description]
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('3(5 p!==\'w\'){p={}}(6(){\'1y 1z\';6 f(n){7 n<10?\'0\'+n:n}3(5 11.m.q!==\'6\'){11.m.q=6(){7 1e(o.W())?o.1L()+\'-\'+f(o.1I()+1)+\'-\'+f(o.1H())+\'T\'+f(o.1q())+\':\'+f(o.1D())+\':\'+f(o.1C())+\'Z\':x};J.m.q=1B.m.q=1A.m.q=6(){7 o.W()}}y e,A,8,C,N,l;6 L(b){A.1h=0;7 A.M(b)?\'"\'+b.G(A,6(a){y c=N[a];7 5 c===\'H\'?c:\'\\\\u\'+(\'17\'+a.18(0).O(16)).1c(-4)})+\'"\':\'"\'+b+\'"\'}6 z(a,b){y i,k,v,h,B=8,9,2=b[a];3(2&&5 2===\'w\'&&5 2.q===\'6\'){2=2.q(a)}3(5 l===\'6\'){2=l.I(b,a,2)}1x(5 2){E\'H\':7 L(2);E\'P\':7 1e(2)?J(2):\'x\';E\'1w\':E\'x\':7 J(2);E\'w\':3(!2){7\'x\'}8+=C;9=[];3(Q.m.O.1v(2)===\'[w 1u]\'){h=2.h;D(i=0;i<h;i+=1){9[i]=z(i,2)||\'x\'}v=9.h===0?\'[]\':8?\'[\\n\'+8+9.K(\',\\n\'+8)+\'\\n\'+B+\']\':\'[\'+9.K(\',\')+\']\';8=B;7 v}3(l&&5 l===\'w\'){h=l.h;D(i=0;i<h;i+=1){3(5 l[i]===\'H\'){k=l[i];v=z(k,2);3(v){9.1d(L(k)+(8?\': \':\':\')+v)}}}}U{D(k 1f 2){3(Q.m.1g.I(2,k)){v=z(k,2);3(v){9.1d(L(k)+(8?\': \':\':\')+v)}}}}v=9.h===0?\'{}\':8?\'{\\n\'+8+9.K(\',\\n\'+8)+\'\\n\'+B+\'}\':\'{\'+9.K(\',\')+\'}\';8=B;7 v}}3(5 p.V!==\'6\'){A=/[\\\\\\"\\1t-\\1s\\1F-\\1r\\1m\\1n-\\1o\\1p\\1l\\1k\\1j-\\1i\\1b-\\1a\\19-\\15\\Y\\X-\\12]/g;N={\'\\b\':\'\\\\b\',\'\\t\':\'\\\\t\',\'\\n\':\'\\\\n\',\'\\f\':\'\\\\f\',\'\\r\':\'\\\\r\',\'"\':\'\\\\"\',\'\\\\\':\'\\\\\\\\\'};p.V=6(a,b,c){y i;8=\'\';C=\'\';3(5 c===\'P\'){D(i=0;i<c;i+=1){C+=\' \'}}U 3(5 c===\'H\'){C=c}l=b;3(b&&5 b!==\'6\'&&(5 b!==\'w\'||5 b.h!==\'P\')){14 13 1E(\'p.V\');}7 z(\'\',{\'\':a})}}3(5 p.R!==\'6\'){e=/[\\1G\\1m\\1n-\\1o\\1p\\1l\\1k\\1j-\\1i\\1b-\\1a\\19-\\15\\Y\\X-\\12]/g;p.R=6(c,d){y j;6 S(a,b){y k,v,2=a[b];3(2&&5 2===\'w\'){D(k 1f 2){3(Q.m.1g.I(2,k)){v=S(2,k);3(v!==1J){2[k]=v}U{1K 2[k]}}}}7 d.I(a,b,2)}c=J(c);e.1h=0;3(e.M(c)){c=c.G(e,6(a){7\'\\\\u\'+(\'17\'+a.18(0).O(16)).1c(-4)})}3(/^[\\],:{}\\s]*$/.M(c.G(/\\\\(?:["\\\\\\/1M]|u[0-1N-1O-F]{4})/g,\'@\').G(/"[^"\\\\\\n\\r]*"|1P|1Q|x|-?\\d+(?:\\.\\d*)?(?:[1R][+\\-]?\\d+)?/g,\']\').G(/(?:^|:|,)(?:\\s*\\[)+/g,\'\'))){j=1S(\'(\'+c+\')\');7 5 d===\'6\'?S({\'\':j},\'\'):j}14 13 1T(\'p.R\');}}}());',62,118,'||value|if||typeof|function|return|gap|partial||||||||length||||rep|prototype||this|JSON|toJSON||||||object|null|var|str|escapable|mind|indent|for|case||replace|string|call|String|join|quote|test|meta|toString|number|Object|parse|walk||else|stringify|valueOf|ufff0|ufeff|||Date|uffff|new|throw|u206f||0000|charCodeAt|u2060|u202f|u2028|slice|push|isFinite|in|hasOwnProperty|lastIndex|u200f|u200c|u17b5|u17b4|u00ad|u0600|u0604|u070f|getUTCHours|x9f|x1f|x00|Array|apply|boolean|switch|use|strict|Boolean|Number|getUTCSeconds|getUTCMinutes|Error|x7f|u0000|getUTCDate|getUTCMonth|undefined|delete|getUTCFullYear|bfnrt|9a|fA|true|false|eE|eval|SyntaxError'.split('|'),0,{}));


//创建组件
var ZQDL = window.ZQDL || {};

/**
 * [log 输出日志,支持原生console和alert输出日志]
 * @return
 */
ZQDL.LOG = ZQDL.log = function() {
    if (typeof(console) == "object" && typeof(console.log) == "function") console.log.apply(console, arguments);
};





/**
 * [ZQDL.namespace 创建局部命名空间]
 * @param  {[sting]} ns [传入命名空间字符串]
 * @return {[object]}   [返回命名空间对象]
 */
ZQDL.namespace = function(ns) {
    if (!ns || !ns.length) return null;
    var levels = ns.split(".");
    var nsobj = ZQDL;
    for (var i=(levels[0] == "ZQDL") ? 1 : 0; i<levels.length; ++i) {
        nsobj[levels[i]] = nsobj[levels[i]] || {};
        nsobj = nsobj[levels[i]];
    }
    return nsobj;
};

/**
 * 创建工具类对象
 */
ZQDL.namespace('ZQDL.util');

/**
 * 获得当前url域名
 * @param url : 需要解析的url
 */
ZQDL.util.domain = {
    // 获得当前域名
    domain: function(url) {
        var durl = /http:\/\/([^\/]+)\//i;
        var hosts = url.match(durl);
        hosts = hosts[1];
        d_arr = hosts.split('.');
        hosts = d_arr[d_arr.length - 2] + '.' + d_arr[d_arr.length - 1];
        return hosts;
    },
    // 域名前缀
    domain_pre: function(url) {
        var durl = /http:\/\/([^\/]+)\//i;
        var hosts = url.match(durl);
        hosts = hosts[1];
        d_arr = hosts.split('.');
        return d_arr[0];
    },
    //将当前域名解析成数组
    domain_arr: function(url) {
        var durl = /http:\/\/([^\/]+)\//i;
        var hosts = url.match(durl);
        hosts = hosts[1];
        d_arr = hosts.split('.');
        return d_arr;
    },
    currentUrl: window.location.href
};
/**
 * [getUrlParam description] 获取url地址或者指定字符串中参数,只获取链接地址中的第一次出现的key的值作为返回值
 * @param  {[string]} key  [description] 键值名称
 * @param  {[string]} stri [description]
 * @return {[type]}      [description]
 */
ZQDL.util.getUrlParam = function(key,str){
    var val = null;
    var tempStr = str == undefined ? window.location.search.substring(1) : str.split('?')[1];
    if(tempStr.length != 0){
        var arr = tempStr.split('&');
        var len = arr.length;
        for(i=0 ; i < len ; i++){
            if(arr[i].split('=')[0] == key){
                val = arr[i].split('=')[1];
                break;
            }
        }
    }
    return val;
};

//cnzz统计后加载
ZQDL.util.cnzzopen = true;		// 是否开启cnzz统计
ZQDL.util.cnzz = function(){
	if(!ZQDL.util.cnzzopen)return false;		//
	var cnzzobj = $('#cnzz_stat_icon_'+ ZQDL.util.path['analytics']['cnzz']);
	if(0 == cnzzobj.length ) return ;
	var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");
    var cnzz = document.createElement("script");
    cnzz.src = cnzz_protocol + "s4.cnzz.com/z_stat.php?id=" + ZQDL.util.path['analytics']['cnzz'];
    cnzzobj.append(cnzz);
};

//qq后加载
ZQDL.util.qqwpa = function(){
	var obj = $('body');
	if(0 == obj.length ) return ;
	var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");
    var cnzz = document.createElement("script");
    cnzz.src = cnzz_protocol + "wpa.b.qq.com/cgi/wpa.php?key=" + ZQDL.util.path['analytics']['qq'];
    obj.append(cnzz);
};
//qq后加载
ZQDL.util.baiduhm = function(){
	var obj = $('body');
	if(0 == obj.length ) return ;
	var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");
    var cnzz = document.createElement("script");
    cnzz.src = cnzz_protocol + "hm.baidu.com/h.js%3F5" + ZQDL.util.path['analytics']['baidu'];
    obj.append(cnzz);
};
ZQDL.util.BizQQWPA = function(obj){
	try{
    	BizQQWPA.addCustom({aty: '0', a: '1002', nameAccount: 800144700, selector: obj});
    }catch(e){
    	ZQDL.LOG('无法加载QQ插件');
    }
};

//从浏览器中启用调试模式
if(ZQDL.util.getUrlParam('debug') == 1){
    ZQDL.config.set('debug',true);
}


//关闭debug模式
if(ZQDL.util.getUrlParam('closeecho') == 1){
    ZQDL.config.set('debug',false);
}


/**
 * [ZQDL.util.ajax description] 异步请求地址,假如是不同地址会强制跨域
 * @param options.url(String)  请求连接地址必选是完整的链接地址 （必选）
 * @param options.type (String) 请求类型 默认 - post
 * @param options.data(String)  请求参数 （可选）
 * @param options.textType (String)  返回数据类型 默认是json 支持格式为jQuery模式
 * @param options.success (function)  请求成功处理方法 （可选）
 * @param options.error (function)  请求失败处理方法（可选）
 * @return {[type]} [description]
 */
ZQDL.util.ajax = function(options){

    if(!options.url) {
        alert(OASGetLangVal('inter_url'));
        return;
    }

    //设置默认参数
    var definOpt = {
        url : null,
        type : 'post',
        dataType : 'json',
        data : {},
        success : null,
        error : null,
        timeout : 120000,
        cache : false
    };

    //合并参数
    var opt = $.extend({},definOpt,options);

    //设置请求方式
    opt.type = opt.type == 'get' ? 'GET' : 'POST';

    //判断是否为同域
    var host = location.protocol + '//' + location.hostname;
    if(opt.url.indexOf(location.protocol) != -1){
    	var crossdomain = opt.url.substr(0, host.length) == host ? false : true;
    }else{
    	var crossdomain = false;
    }

    if(crossdomain) {
        if(opt.data.jsonpCallback) opt.jsonpCallback = opt.data.jsonpCallback;
        opt.type = 'GET';
        opt.dataType = "jsonp";
        opt.jsonp = "callback";
    }
    $.ajax(opt);
};

/**
 * [showBrowser description] 查看浏览器相关信息
 * @return {[type]} [description]
 */
ZQDL.util.browser = function(){
    if(ZQDL.util.getUrlParam('liulanqi')) {
        var maxNum = ZQDL.util.getUrlParam('num') ? parseInt(ZQDL.util.getUrlParam('num')) : 30;
        var i = 0,str = '';
        for(key in window.navigator){
            str += key +"==>" + window.navigator[key] + "\n";
            if(i > maxNum) break;
            i++;
        }
        alert(str);
    };
};

/**
 * 创建cookie对象
 */
ZQDL.namespace('ZQDL.cookie');

/**
 * [get description] 读取cookie值
 * @param  {[string]} key     [description] cookie键值名称
 * @param  {[object]} options [description] cookie可选对象
 * @return {[string]}         [description] 返回cookie键值所对应的的值，没有值返回null
 */
ZQDL.cookie.get = function (key, options) {
    options = options || {};
    var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
};

/**
 * [remove description] 删除指定键值所对应的cookie值
 * @param  {[type]} key     [description]
 * @param  {[type]} options [description]
 * @return {[type]}         [description]
 */
ZQDL.cookie.remove = function (key,options) {
    ZQDL.cookie.set(key, null , options ? options : {});
};


/**
 * [set description] 添加指定名称cookie值 , 过期时间小时制
 * @param {[type]} key   [description]
 * @param {[type]} value [description]
 * @param {[type]} opt   [description] cookie相关属性，
 */
ZQDL.cookie.set = function (key, value, options) {
    options = $.extend({},{
        domain : '',
        path : '/'
    }, options);

    //删除cookie操作处理
    if (value === null) {
        options.expires = -1;
    }

    //设置过期时间
    if (typeof options.expires === 'number') {
        var seconds = options.expires, t = options.expires = new Date();
        t.setTime(t.getTime() + seconds*1000);
    }

    //强制转换为字符串格式
    value = '' + value;

    //设置cookie信息
    return (document.cookie = [
        encodeURIComponent(key), '=',
        options.raw ? value : encodeURIComponent(value),
        options.expires ? '; expires=' + options.expires.toUTCString() : '',
        options.path ? '; path=' + options.path : '',
        options.domain ? '; domain=' + options.domain : '',
        options.secure ? '; secure' : ''
    ].join(''));
};


// 创建应用
ZQDL.namespace('ZQDL.apps');
ZQDL.apps.sso = {
	login : function(){
        var domain = ZQDL.util.domain.domain_arr(ZQDL.util.domain.currentUrl);
        var post = {'is_ajax':1};
        var url = location.protocol + '//'+ ZQDL.util.path['300cn'] + 'www.' + domain[1] + '.' + domain[2];
        if(domain[1] != '300'){
        	url = location.protocol + '//www.bpis.com.cn';
        }
        //取回余额 + 判断登录
        $.ajax({
            url:url+ '/sso/login',
            crossDomain:true,
            type:'post',
            dataType:'jsonp',
            data:post,
            success : function(info){
                if(info.status == '1'){
                    var userTmp = info.info;
                    $("#home_login").hide();
                    $("#home_reg").hide();
                    $("#member").show();
                    $("#userinfo").html(userTmp).show();
                    $(".home_out_line").show();
                    $("#home_out").show();
                }else{
                    $(".home_out_line").hide();
                    $("#home_out").hide();
                    $("#userinfo").hide();
                    $("#member").hide();
                    $("#home_login").show();
                    $("#home_reg").show();
                }
            },
            error:function(xhr, textStatus, errorThrow){
            	ZQDL.LOG(errorThrow.message);
            }
        });
    }
};


/**************************************** 页面公用部分 ********************************/
/**
 * 回到顶部
 */
$(window).scroll(function () {
    if($(document).scrollTop()>300){
        $(".scrolltop a.t").show();
    }else{
        $(".scrolltop a.t").fadeOut(200);
    }
});
$(".scrolltop a.t").bind("click",function(){
    var winTop = $(window).scrollTop();
    $('body,html').animate({scrollTop:0}, winTop/6);

});


$(function(){
    $('.pop_zixun a').on('click',function(){
        var val = $(this).attr('value');
        $('#admin_add_value').val(val);
        $(".zx_pop").show();return false;
    });
    $('body').on('click','.zixun_pop',function(){
        var val = $(this).attr('value');
        $('#admin_add_value').val(val);
        $(".zx_pop").show();return false;
    });

    //关闭弹窗
    $(".zx_pop a.close").bind("click",function(){$(".zx_pop").hide(); return false;});
    try{
    	ZQDL.apps.sso.login();
    }catch(e){
    	ZQDL.LOG('单点登录异常');
    }
    setTimeout('ZQDL.util.cnzz()',3000);
 // 在线咨询弹窗显示与隐藏
    $('.onlineserver ul li').on('mouseover', function() {
        $(this).stop().animate({'width': 194},300).addClass('on').siblings('').removeClass('on');
    });
    $('.onlineserver ul li').on('mouseout', function() {
        $(this).stop().animate({'width': 51},300).removeClass('on');
    });

    // 活动推广
    $('.activityrecommend .shouqi').on('mouseenter', function() {
        $('.activityrecommend').css({'width':'194px','height':'203px'});
        $('.activityrecommend .shouqi').hide();
        $('.activityrecommend .zhankai').fadeIn();
    });

    $('.activityrecommend .zhankai').on('mouseleave', function() {
        $('.activityrecommend').css({'width':'51px','height':'51px'});
        $('.activityrecommend .zhankai').hide();
        $('.activityrecommend .shouqi').fadeIn();
    });
});

(function(G, $){
    /**
     * 返回顶部
     * @speed {number} 动画速度
     */
    var goTopDefault = {
        speed: 500
    };
    $.fn.goTop = function(opt){
        var $w = $(G),
            opt = $.extend({}, goTopDefault, opt),
            $ele = this;

        $w.scroll(function(e){
            var sc = $w.scrollTop();

            if(sc > 100) {
                $ele.removeClass('go-top-none');
            } else {
                $ele.addClass('go-top-none');
            }
        });
        $ele.click(function(event) {
            $('body, html').animate({
                scrollTop: 0
            }, opt.speed);
        });
    };

    /**
     * tool-bar 移入展开
     * @params dom元素 id
     */
    var toolBarToogleDefault = {
        onlineConnect: '#onlineConnect',
        sPhone: '#sPhone',
        hotActive: '#hotActive',
        freeCall: '#freeCall'
    };
    $.fn.toolBarToogle = function(opt){
        var opt = $.extend({}, toolBarToogleDefault, opt),
            $ele = this,
            $onlineConnect = $ele.find(opt.onlineConnect),
            $sPhone = $ele.find(opt.sPhone),
            $hotActive = $ele.find(opt.hotActive),
            $freeCall = $ele.find(opt.freeCall);

        // 线上沟通
        publicToogleFn({
            $ele: $onlineConnect,
            sonClass: '.t-i',
            toogleClass: '.f-s'
        });

        // 售前电话
        publicToogleFn({
            $ele: $sPhone,
            sonClass: '.p-t-i',
            toogleClass: '.p-t-i-i'
        });

        // 热门活动
        publicToogleFn({
            $ele: $hotActive,
            hideNew: true,
            sonClass: '.h-a-i',
            toogleClass: '.h-a-i-i'
        });

        // 免费回呼
        publicToogleFn({
            $ele: $freeCall,
            sonClass: '.f-t-i',
            toogleClass: '.f-t-i-i',
            needhide: false
        });

        /**
         * 公共伸缩函数
         * @param obj {object}
         * @param obj.$ele {object} 最外层jquey对象
         * @param obj.hideNew {boolean} 隐藏提示图标
         * @param obj.sonClass {string} 子元素
         * @param obj.toogleClass {string} 显示隐藏元素
         * $param obj.needhide {boolean} 是否用隐藏
         */
        function publicToogleFn(obj){
            var $sonClass = obj.$ele.find(obj.sonClass),
                $toogleClass = $sonClass.find(obj.toogleClass),
                left = $toogleClass.outerWidth();

            $sonClass.on('mouseenter', function(){
                obj.hideNew && $sonClass.find('.new-icon').hide();
                $toogleClass.show();
                $sonClass.stop().animate({
                    left: -left
                }).addClass('active');
            }).on('mouseleave', function(){
                $sonClass.stop().animate({
                    left: 0
                }, function(){
                    $sonClass.removeClass('active');
                    if(obj.needhide !== false){
                        $toogleClass.hide();
                    }
                    obj.hideNew && $sonClass.find('.new-icon').show();
                })
            })
        }
    }

})(window, jQuery);
