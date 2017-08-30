// JavaScript Document
(function ($) {
	$.fn.slide = function (options) {
		$.fn.slide.defaults = {
			margin: '30px'
		};
		var opts = $.extend({}, $.fn.slide.defaults, options);
		return this.each(function () {
			var $this = $(this);
			var prev = $this.find(".prev");
			var next = $this.find(".next");
			var content = $this.find("ul");
			var slide = $this.find("li");
			var step = slide.outerWidth() + opts.margin;
			var length = slide.length + 1;
			var l = parseInt(content.css("left"));

			slide.css({"float":"left","margin-left":opts.margin})
			slide.eq(length-1).css({"margin-left":0})

			checkbtn(l);
			next.click(function(){
				var l = parseInt(content.css("left"));
				//console.log(l)
				checkbtn(l - step);
				if(l<=0 && l>=-1*(step*(length-3))){
					var s=(l - step);
					content.animate({left:s});
				}
				if(l<-1*(step*(length-2))){
					content.animate({left:-1*(step*(length-2))});
				}
			});
			prev.click(function(){
				var l = parseInt(content.css("left"));
				//console.log(l)
				checkbtn(l + step)
				if(l >= -1*(step*(length-2)) && l < 0){
					var s=(l + step);
					content.animate({left:s});
				}
				if(l > 0){
					content.animate({left:0});
				}
			});
			function checkbtn(l){
				if(l >= 0){prev.addClass("disabled")}
				else{prev.removeClass("disabled")}
				if(l <= -1*(step*(length-2))){next.addClass("disabled")}
				else{next.removeClass("disabled")}
			}
		});
	};
})(jQuery);
