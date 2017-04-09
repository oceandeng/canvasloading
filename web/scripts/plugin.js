(function(G, $){
    /**
     * card-area 伸缩效果
     * @param {string} id  dom对象
     */
    var cardAreaDefault = {
        id: "#cardArea",
        sid: '.card-item'
    }
    $.fn.cardArea = function(options){
        var options = $.extend({}, cardAreaDefault, options)

        return this.each(function(){
            var $ele = $(options.id),
                $sele = $ele.find(options.sid);

            $sele.on('mouseenter', function(){
                $(this).addClass('active').siblings().removeClass('active')
            })
        })
    }

    /**
     * topmenu 顶部菜单 底部active条及下拉菜单
     * @param {string} itemClass 一级菜单class名
     * @param {string} contentClass 二级菜单class名
     */
    var topMenuDefault ={
        itemClass: '.menu-item',
        contentClass: '.menu-detail'
    }
    $.fn.topMenu = function(options){
        var options = $.extend({}, topMenuDefault, options),
            $this = this,
            mB = '<div class="top-border"></div>',
            $item = $this.find(options.itemClass);

        return this.each(function(){

            $this.on('mouseenter', function(e){
                var $_item = $(e.target).parent(),
                    _w = $_item.width(),
                    _l = $_item.position().left;

                $this.append(mB)
                $this.find('.top-border').css({'left': _l}).stop().animate({
                    width: _w
                })

            }).on('mouseleave', function(){
                var $tB = $this.find('.top-border')

                $tB.stop().animate({
                    width: 0
                }, function(){
                    $tB.remove()
                })
            })

            $item.on('mouseenter', function(e){
                var $_this = $(this),
                    $tB = $this.find('.top-border'),
                    _w = $_this.width(),
                    _l = $_this.position().left;

                $tB.stop().animate({'width': _w,'left': _l})
                $_this.find(options.contentClass).stop().slideDown()
            }).on('mouseleave', function(e){
                var $_this = $(this);

                $_this.find(options.contentClass).stop().slideUp()
            })
        })
    }

    /**
     * top-slide 顶部幻灯
     *
     */
    var mainSliderDefault = {

    }
    $.fn.mainSlider = function(options){
        var options = $.extend({}, mainSliderDefault, options)

        return this.each(function(){
            var $this = $(this)

console.log('a');

        });
    }


})(window, jQuery)
