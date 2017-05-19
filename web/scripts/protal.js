(function(G, $){
    /**
     * 左侧菜单
     */
     var leftToolBarDefault = {
         topEle: '.protal-body',
         fEle: '.footer',
         tit: '.l-first-tit',
         con: '.l-sec-content',
         toogle: true
     }

     $.fn.leftToolBar = function(options){
        var options = $.extend({}, leftToolBarDefault, options)

        function LeftToolBar(ele) {
            this.$ele = $(ele)
            this.$parent = this.$ele.parent()
            this.$topele = this.$ele.parents(options.topEle)
            this.$footer = $(options.fEle)
            this.$tit = $(options.tit)
            this.$con = $(options.con)
        }
        LeftToolBar.prototype.init = function(){
            this.fixedFn()
            this.initStyle()
            options.toogle && this.eventsFn()
        }
        LeftToolBar.prototype.initStyle = function(){
            this.$tit.each(function(k, v){
                $(v).hasClass('active') && $(v).next().show()
            })

            this.$parent.height(this.$topele.outerHeight())
        }
        LeftToolBar.prototype.fixedFn = function(){
            var _this = this,
                mTop = this.$topele.position().top,
                fTop = this.$footer.position().top,
                fH = this.$footer.outerHeight();

            $(G).on('scroll', function(e){
                var sTop = $(G).scrollTop(),
                    eleH = _this.$ele.outerHeight(),
                    toF = fTop - sTop - eleH;

                if(sTop > mTop && toF > 0){
                    _this.$ele.removeAttr('style')
                    _this.$ele.css({
                        'position': 'fixed',
                        'top': 0
                    })
                }else if(toF <= 0){
                    _this.$ele.removeAttr('style')
                    _this.$ele.css({
                        'position': 'absolute',
                        'bottom': 0
                    })
                }else{
                    _this.$ele.css({'position': 'absolute'})
                }
            })
        }
        LeftToolBar.prototype.eventsFn = function(){
            this.$tit.on('click', function(){
                var $_this = $(this)

                // $_this.addClass('active').parent().siblings().find(options.tit).removeClass('active')
                $_this.next().slideDown()
                $_this.parent().siblings().find(options.con).slideUp()
            })

            this.$con.on('click', function(){
                var $_this = $(this)

                $_this.slideDown().parent().siblings().find(options.con).slideUp()
            })
        }

        return this.each(function(){
            var instance = new LeftToolBar(this)
            instance.init()
        })
     }

     /**
      * public tab
      */
     var tabDefault = {
         tit: '.tab-tit',
         con: '.tab-con',
         item: '.tab-con-item'
     }
     $.fn.publicTab = function(options){
         var options = $.extend({}, tabDefault, options)

         var PublicTab = function($ele){
             this.$tit = $ele.find(options.tit).find('ul').find('li')
             this.$item = $ele.find(options.con).find(options.item)
         }
         PublicTab.prototype.init = function(){
             this.eventFn()
             this.initCon()
         }
         PublicTab.prototype.initCon = function(){
            this.$item.eq(0).load(options.path + '0.html')
         }
         PublicTab.prototype.eventFn = function(){
             var _this = this

             this.$tit.on('click', function(){
                 var $_this = $(this),
                     index = $_this.index(),
                     $_item = _this.$item.eq(index);

                 $_this.find('a').addClass('active').parent().siblings().find('a').removeClass('active')

                 $_item.addClass('block').siblings().removeClass('block')
                 if($_item.find('.row').size() == 0){
                     $_item.load(options.path + index + '.html', function(response, status, xhr){})
                 }
             })
             this.$tit.find('a').on('click', function(e){
                e.preventDefault()
             })
         }

         return this.each(function(){
             var $this = $(this)
             var instance = new PublicTab($this)
             instance.init()
         })
     }

})(window, jQuery)

$(function(){
    // 左侧菜单效果调用
    $('#leftToolBar').leftToolBar()

    //industry slide
    $('#industrySlider').industrySlider();

})
