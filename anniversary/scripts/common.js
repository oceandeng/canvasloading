// body 高度
var sW = 0, sH = 0, dW = 0, dH = 0, cH = 0;
sW = $(window).width() >= 640 ? 640 : $(window).width();
sH = $(window).height();
dW = document.body.clientWidth;

/**
 * 页面初始化事件绑定
 */
$(function(){


})

// 页面data-href跳转事件
$(function(){
    $(document).on(oTools.clickEvent, '*[data-href]', function(){
        var $_this = $(this);
        location.href = $_this.attr('data-href');
    });
});


(function(){

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
