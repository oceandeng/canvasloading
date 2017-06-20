$(function(){
    // top-menu 顶部导航调用
    $('#topMenu').topMenu()

    // footer二维码导航调用
    $('#attentionMenu').footerMenu();

    // 返回顶部调用
    $('#goTop').goTop()

    // 展开效果调用
    $('#toolBar').toolBarToogle();

    // shock
    $('#shockArrow').shockArrow({speed: 500});

    // imzixunBody
    $('#imzixunBody').imzixun({speed: 500})


});


var oTools = oTools || {}

oTools.alertmess = function(str){
    var html = '<div class="mess">' + str + '</div>',
        fullW = $(window).width(),
        fullH = $(window).height(),
        twidth = 320 || parseInt(fullW * 0.8);

    if($('.mess').size() < 1){
        $('body').append(html);

        $('.mess').css({
            'width' : twidth,
            'min-height': '30px',
            'line-height' : '30px',
            'font-size': '16px',
            'marginLeft' : parseInt(-twidth/2-10),
            'background' : 'rgba(0, 0, 0, .6)',
            'color' : '#fff',
            'z-index' : 99999,
            'position' : 'fixed',
            'left' : '50%',
            'top' : '40%',
            'border-radius' : '5px',
            'text-align' : 'center',
            'padding' : '5px 10px'
        }).fadeIn();

        setTimeout(function(){
            $('.mess').fadeOut(function(){
                $('.mess').remove();
            });
        }, 2000);
    }
}