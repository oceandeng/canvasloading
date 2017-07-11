$(function(){
    // main-slide 顶部幻灯插件调用
    $('#mainSlider').mainSlider()

    // cloud service调用
    $('#cloudTab').cloudTab()

    // 解决方案切换调用
    $('#solutionSlide').solutionSlide()

    // choice zhongqi invoke
    $('#choice').fadeInUp()

    $(".banner-con").on("mousemove",function(event){
        var $_this = $(this),
            _l = $_this.offset().left,
            _t = $_this.offset().top,
            offsetNum = 50;

        var x              = parseInt(event.clientX - _l);
        var y              = parseInt(event.clientY - _t);

        var bgCentralityX  = $_this.width() / 2; //  背景图的中心点
        var bgCentralityY  = $_this.height() / 2; //  背景图的中心点

        var imgOffsetX      = (bgCentralityX - x) / offsetNum;
        var imgOffsetY      = - (bgCentralityY - y) / offsetNum;

        $_this.css({
            'transform': 'rotateX(' + imgOffsetY + "deg)"+' rotateY('+  imgOffsetX + "deg)"
        });

    }).on("mouseleave",function(){
        $(this).css("transform","rotateX(0deg) rotateY(0deg)");
    });

})
