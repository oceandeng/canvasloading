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

    

})(window, jQuery)
