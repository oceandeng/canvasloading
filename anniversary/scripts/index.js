(function(){
	/*
	    注意：$.mggScrollImg返回的scrollImg对象上有
	            next，prev，go三个方法，可以实现外部对滚动索引的控制。
	    如：scrollImg.next();//会切换到下一张图片
	        scrollImg.go(0);//会切换到第一张图片
	*/

	$(window).load(function(){

		_fullImgScreen('*[data-full-screen]')

		setTimeout(function(){
			$('.index-img-1').show().addClass('animated bounceInDown')
		}, 200)
		setTimeout(function(){
			$('.top-left-img').show().addClass('animated fadeInLeft')
			$('.bottom-right-img').show().addClass('animated fadeInRight')
		},500)
	})
	$(window).resize(function(){
		_fullImgScreen('*[data-full-screen]')
	})

	function _fullImgScreen(ele){
		$(ele).each(function(i, v){
			var $_this = $(v),
			$_img = $_this.find('img'),
			_imgw = $_img.width(),
			_imgh = $_img.height(),
			ratio = _imgw / _imgh;

			$_img.width(sW)
			if($_img.height() < sH){
				$_img.height(sH)
				$_img.width(parseInt(sH * ratio))
			}
		})
	}
})()
