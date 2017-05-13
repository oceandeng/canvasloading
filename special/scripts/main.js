(function(G, $){
	$.fn.imzixun = function(opt){
	    var $w = $(G),
	        $ele = this,
	        $open = $ele.find('.tool-bar-open'),
	        $close = $ele.find('.tool-bar-close');

	    $w.scroll(function(e){
	        var sc = $w.scrollTop() + $w.outerHeight(),
	            fT = $('.footer').offset().top,
	            dH = $(document).outerHeight();

	        if(sc > fT){
	            $open.hide()
	            $close.show()
	        }else{
	            $open.show()
	            $close.hide()
	        }
	    })
	}


})(window, jQuery)
