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
