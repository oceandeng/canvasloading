// body 高度
var sW = 0, sH = 0, dW = 0, dH = 0, cH = 0;
sW = $(window).width() >= 640 ? 640 : $(window).width();
sH = $(window).height();
dW = document.body.clientWidth;

var pConsultDialog = null
/**
 * 页面初始化事件绑定
 */
$(function(){

	$('#navBox').on(oTools.clickEvent, function(){
		mainNav()
	})
	$('.consult-btn').on(oTools.clickEvent, function(){
		$('.verify_image').attr('src', '/verify/verify?date='+new Date());
		pConsultDialog = consultDialog()
	})

})

// 页面data-href跳转事件
$(function(){
    $(document).on(oTools.clickEvent, '*[data-href]', function(){
        var $_this = $(this);
        location.href = $_this.attr('data-href');
    });
});

// 底部导航滚动效果
$(function(){
	var dH = $(document).height() - $(window).height(),
		$bnb = $('.bottom-nav-blue');

	if(!!$bnb.size()){
		$(window).on('scroll', function(){
			var scrollTop = window.pageYOffset  //用于FF
			|| document.documentElement.scrollTop
			|| document.body.scrollTop
			|| 0;
			if(scrollTop >= dH){
				$bnb.animate({
					bottom: $('.bottom-tool').height()
				})
			}else{
				$bnb.animate({
					bottom: 0
				})
			}
		})
	}
})

// $(function(){
// 	$('#shareBtn').on(oTools.clickEvent, function(){
// 		var _w = $(window).width(),
// 			_h = $(window).height(),
// 			mask = '<div class="mask"></div>';
//
// 		$('body').append($(mask))
// 		$('.bdshare-body').show()
// 		$('.bdshare-body').css({zIndex: 9999})
// 		$('.mask').css({
// 			width: _w,
// 			height: _h
// 		})
//
// 	})
// 	$(document).on(oTools.clickEvent, '.mask', function(){
// 		$('.mask').remove()
// 		$('.bdshare-body').hide()
// 	})
// })


// 分享
$(function(){
	$('#shareBtn').on(oTools.clickEvent, function(){
		if(oTools.isWechat){
			wshareDialog()
		}else{
			shareDialog()
		}
	})
})

// 导航菜单
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

// 咨询弹窗
function consultDialog(){
    var consult = new Dialog({
        'id': 'consult',
        'type': 'popup',
        'lock': true,
        'width':'90%',
        'closeButton': false,
        'animation':'animated bounceInDown',
        'contentStyle': {
            'background': '#fff',
			'border-radius': '5px'
        },
        'onReady': function(){

		},
		'addFlashFn': function(_this){
		}

    });

	$('#consultClose').on(oTools.clickEvent, function(){
		consult.close()
	})

	return consult
}

// 分享弹窗
function shareDialog(){
    var share = new Dialog({
        'id': 'share',
        'type': 'popup',
        'lock': true,
        'width':'80%',
        'closeButton': false,
        'contentStyle': {
            'background': 'none',
        },
        'onReady': function(){

		},
		'addFlashFn': function(_this){
		}

    });

	$('#shareClose').on(oTools.clickEvent, function(){
		share.close()
	})
}
function wshareDialog(){
    var share = new Dialog({
        'id': 'wshare',
        'type': 'popup',
        'lock': true,
        'width':'100%',
		'top': '0px',
        'closeButton': false,
        'contentStyle': {
            'background': 'none',
        },
        'onReady': function(){

		},
		'addFlashFn': function(_this){
		}

    });	
}
