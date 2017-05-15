(function(G, $){
	$.fn.toolBar = function(opt){
	    var $w = $(G),
	        $ele = this,
	        $item = $ele.find('.tool-item'),
	        body = '.fold-body',
	        close = '.fold-close',
	        offset = 5;

	    return this.each(function(){
	    	$item.on('mouseenter', function(){
	    		var $_this = $(this),
	    			$body = $_this.find(body),
	    			_l = $body.outerWidth();

	    		$body.animate({
	    			left: - _l + 5
	    		})
	    	}).on('mouseleave', function(){
	    		var $_this = $(this),
	    			$body = $_this.find(body);

	    		$body.animate({
	    			left: 0
	    		})
	    	})


	    })
	}

	$.fn.goDetail = function(){
		var $ele = this,
			detail = '.go-detail';

		return this.each(function(){
			$ele.on('mouseenter', function(){
				var $_this = $(this);

				$_this.find(detail).stop().animate({
					top: 0
				})
			}).on('mouseleave', function(){
				var $_this = $(this),
					_t = $_this.outerHeight();

				$_this.find(detail).stop().animate({
					top: _t
				})
			})
		})
	}

	$('#toolBar').toolBar()
	$('.case-img').goDetail()
})(window, jQuery)
