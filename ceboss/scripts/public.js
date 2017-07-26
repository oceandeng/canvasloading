/**
 * 全局公用对象
 * @object
 */
var CEBOSS = window.CEBOSS || {}

// 命名空间，自动声明对象，防止重写覆盖
CEBOSS.namespace = function(ns) {
	if (!ns || !ns.length) return null;
	var levels = ns.split(".");
	var nsobj = CEBOSS;
	for (var i = (levels[0] == "CEBOSS") ? 1 : 0; i < levels.length; ++i) {
		nsobj[levels[i]] = nsobj[levels[i]] || {};
        nsobj = nsobj[levels[i]]
    }
    return nsobj
};
 
// 公用工具方法
CEBOSS.namespace('CEBOSS.unit');

// 公用api调用
CEBOSS.namespace('CEBOSS.api');

// 全局发布订阅对象
CEBOSS.namespace('CEBOSS.pubsub');


/* jQuery Tiny Pub/Sub - v0.7 - 10/27/2011
 * http://benalman.com/
 * Copyright (c) 2011 "Cowboy" Ben Alman; Licensed MIT, GPL */
(function($){
	var o = $({});

	$.subscribe = function() {
		o.on.apply(o, arguments);
	};

	$.unsubscribe = function() {
		o.off.apply(o, arguments);
	};

	$.publish = function() {
		o.trigger.apply(o, arguments);
	};
})(jQuery);