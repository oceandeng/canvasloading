(function(G, $){
	$.fn.toolBar = function(opt){
	    var $w = $(G),
	        $ele = this,
	        $item = $ele.find('.tool-item'),
	        body = '.fold-body',
	        close = '.fold-close',
	        offset = 6;

	    return this.each(function(){
	    	$item.on('mouseenter', function(){
	    		var $_this = $(this),
	    			$body = $_this.find(body),
	    			_l = $body.outerWidth();

	    		$body.stop().animate({
	    			left: - _l + offset
	    		})
	    	}).on('mouseleave', function(){
	    		var $_this = $(this),
	    			$body = $_this.find(body);

	    		$body.stop().animate({
	    			left: 0
	    		})
	    	})


	    })
	}

	$.fn.goDetail = function(){
		var $ele = this,
			speed = 200,
			detail = '.go-detail';

		return this.each(function(){
			$ele.on('mouseenter', function(){
				var $_this = $(this);

				$_this.find(detail).stop().animate({
					top: 0
				}, speed)
			}).on('mouseleave', function(){
				var $_this = $(this),
					_t = $_this.outerHeight();

				$_this.find(detail).stop().animate({
					top: _t
				}, speed)
			})
		})
	}

	$('#toolBar').toolBar()
	$('.case-img').goDetail()


	var $p = $('#getPhone')

	$('#pClose').on('click', function(){
		$p.animate({
			left: $p.outerWidth()
		}, function(){
			$('.arrow').show()
		});
	})

	$('.arrow').on('click', function(){
		$('.arrow').hide()
		$p.animate({
			left: 0
		})
	})
})(window, jQuery)
