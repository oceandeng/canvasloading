// body 高度
var sW = 0, sH = 0, dW = 0, dH = 0, cH = 0;
sW = $(window).width() >= 640 ? 640 : $(window).width();
sH = $(window).height();
dW = document.body.clientWidth;

/**
 * 页面初始化事件绑定
 */
$(function(){
	var preloadGuanbi = new Image()
	preloadGuanbi.src = '../images/icon/guanbi.png';

	$('#navBox').on(oTools.clickEvent, function(){
		mainNav()
	})


})

// 页面data-href跳转事件
$(function(){
    $(document).on(oTools.clickEvent, '*[data-href]', function(){
        var $_this = $(this);
        location.href = $_this.attr('data-href');
    });
});

// 发送信息成功弹层
function mainNav(){
    var mainNav = new Dialog({
        'id': 'mainNav',
        'type': 'popup',
        'lock': false,
        'width':'100%',
		'height': '100%',
        'closeButton': false,
        'animation':'animated bounceInRight',
		'outAnimation': 'animated bounceOutRight',
        'contentStyle': {
            'background': '#fff'
        },
        'onReady': function(){
			var $item = $('.nav-group').not('.first-nav').find('.nav-r-con');

			if(!myScroll){
				var myScroll = new IScroll('#wrapper', {
					scrollbars: true,
					probeType: 3,
					mouseWheel: true,
					interactiveScrollbars: true,
					shrinkScrollbars: false,
					bounce: false

				})

				myScroll.on('scroll', function () {
					$item.each(function(k, v){
						var $this = $(this),
							_t = $this.offset().top;

						if(_t - sH < 0){
							if($this.index() % 2  == 0){
								$this.not('animated').addClass('animated bounceInRight')
							}else{
								$this.not('animated').addClass('animated bounceInLeft')
							}
						}else{
							$this.removeClass('animated bounceInLeft bounceInRight')
						}
					})
				});
			}

			setTimeout(function(){
				$item.filter(function(index){
					if(index % 2 == 0) return this
				}).addClass('animated bounceInRight')
				$item.filter(function(index){
					if(index % 2 == 1) return this
				}).addClass('animated bounceInLeft')
			}, 300)
		},
		'addFlashFn': function(_this){
			$('#navClose').addClass('animated bounceInDown')
		}

    });

	$('#navClose').on(oTools.clickEvent, function(){
		mainNav.close()
	})
}
