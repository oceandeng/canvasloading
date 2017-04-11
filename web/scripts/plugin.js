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

            $this.on('mouseleave', function(){
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

                if($tB.size() == 0){
                    $this.append(mB)
                    $this.find('.top-border').css({'left': _l}).animate({'width': _w})
                }

                $tB.stop().animate({'width': _w,'left': _l})
                $_this.find(options.contentClass).stop().slideDown()

            }).on('mouseleave', function(e){
                var $_this = $(this);

                $_this.find(options.contentClass).stop().slideUp()
            })

            // 下拉框事件
            $(options.contentClass).on('mouseenter', function(){
                $(this).show()
            }).on('mouseleave', function(){
                $(this).hide()
            })
        })
    }

    /**
     * top-slide 顶部幻灯
     *
     */
    var mainSliderDefault = {
        slideWrap: '.index-top-banner',
        mainWrap: '.slide-wrap',
        itemClass: '.slide-group',
        lClass: '.y-row',
        bClass: '.banner-row'
    }
    $.fn.mainSlider = function(options){
        var options = $.extend({}, mainSliderDefault, options)

        function MainSlider(dom, options){
            this.$dom = $(dom)
            this.$item = this.$dom.find(options.itemClass)
            this.len = this.$item.size()
            this.index = 1
            this.picTimer = null
            this.speed = 3000
            this.$dotWrap = this.$dom.find(options.slideWrap).find(options.mainWrap)
        }

        MainSlider.prototype.init = function(){
            this.addDot()
            this.eventFn()
        }
        MainSlider.prototype.eventFn = function(){
            var _this = this

            this.$dotWrap.find('.s-dot').on('click', function(){
                var $_this = $(this);
                this.index = $_this.index();

                $_this.addClass('active').siblings().removeClass('active')
                _this.go(this.index);
            })
        }
        MainSlider.prototype.addDot = function(){
            var dot = '<span class="s-dot"></span>',
                dotHtml = '';

            dotHtml = '<div id="sDotWrap" class="s-dot-warp">'
            for(var i = 0; i < this.len; i++){
                dotHtml += dot
            }
            dotHtml += '</div>'

            this.$dotWrap.append(dotHtml)
            this.$dotWrap.find('.s-dot').first().addClass('active')
            var mL = this.$dotWrap.find('.s-dot').width() * this.len / 2
            this.$dotWrap.find('#sDotWrap').css('margin-left', -mL)
        }
        MainSlider.prototype.next = function(){
            this.index++
            this.go(this.index)
        }
        MainSlider.prototype.prev = function(){
            this.index--
            this.go(this.index)
        }
        MainSlider.prototype.go = function(index){
            this.$item.hide()
            this.$item.eq(index).fadeIn()

        }
        MainSlider.prototype.autoPlay = function(){
            var _this = this;

            this.picTimer = setInterval(function(){
                _this.index < _this.len && _this.index++

                console.log(_this.index);
                _this.go(_this.index)
            }, _this.speed)
        }
        return this.each(function(){
            var mainSlider = new MainSlider(this, options)
            mainSlider.init();
        });
    }

    /**
     * 解决方案切换效果
     */
     var solutionSlideDefault = {
         wrap: '.slide-content',
         item: '.slide-item',
         next: '#solutionNext',
         prev: '#solutionPrev'
     }
     $.fn.solutionSlide = function(options){
         var options = $.extend({}, solutionSlideDefault, options)

         function SolutionSlide(ele){
             this.$this = $(ele)
             this.$wrap = this.$this.find(options.wrap)
             this.$item = this.$wrap.find(options.item)
             this.nextBtn = $(options.next)
             this.prevBtn = $(options.prev)
             this.index = 0
             this.showNum = 5
         }

         SolutionSlide.prototype.init = function(){
             this.initClass()
             this.event()
             this.refresh()
         }
         SolutionSlide.prototype.initClass = function(){
             var sonW = this.$item.width(),
                 sonLen = this.$item.size()

            this.$wrap.width(sonW * sonLen)
        }
        SolutionSlide.prototype.event = function(){
            var _this = this
            this.nextBtn.on('click', function(){
                _this.index < (_this.$item.size() - _this.showNum) && _this.index++
                _this.moveTo(_this.index)
            })
            this.prevBtn.on('click', function(){
                _this.index > 0 && _this.index--
                _this.moveTo(_this.index)
            })
        }
        SolutionSlide.prototype.moveTo = function(index){
            var _l = - index * this.$item.width()

            this.$wrap.animate({
                left: _l
            })
        }
        SolutionSlide.prototype.refresh = function(){
            var _this = this
            $(window).on('resize', function(){
                _this.initClass()
            })
        }

         return this.each(function(){
             var instance = new SolutionSlide(this);
             instance.init()
         })
     }

    /**
     * footer 二维码切换导航
     */
     $.fn.footerMenu = function(){
         return this.each(function(){
            var $this = $(this),
                $nav = $this.find('li').find('span'),
                $con = $this.find('.ewm');

            $nav.on('mouseenter', function(){
                var $_this = $(this)
                $_this.parent('li').addClass('active').siblings().removeClass('active')
            })
         })
     }

})(window, jQuery)
