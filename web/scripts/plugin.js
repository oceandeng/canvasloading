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
        contentClass: '.menu-detail',
        subconClass: '.menu-subcontent',
        subitemClass: '.menu-subitem'
    }
    $.fn.topMenu = function(options){
        var options = $.extend({}, topMenuDefault, options),
            $this = this,
            mB = '<div class="top-border"></div>',
            $item = $this.find(options.itemClass),
            pw = $this.outerWidth();

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

                var $subCon = $_this.find(options.contentClass),
                    _iw = $subCon.attr('data-width');

                if($subCon.size() != 0){

                    var $subitem = $subCon.find(options.subitemClass),
                        _is = $subitem.size();

                    $subitem.css('width', _iw)

                    var _cw = $subitem.outerWidth() * _is

                    $subitem.last().css('border', 'none')
                    $subCon.css({'width': _cw}).show()

                    var _ccw = $subCon.outerWidth()

                    if(_ccw < pw){
                        $subCon.css('left', _l)
                    }else{
                        $subCon.css('right', 0)
                    }
                }

            }).on('mouseleave', function(e){
                var $_this = $(this)

                if(e.relatedTarget && e.relatedTarget.className != 'top-border'){
                    $_this.find(options.contentClass).hide()
                }
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
            this.index = 0
            this.picTimer = null
            this.speed = 5000
            this.$dotWrap = this.$dom.find(options.slideWrap).find(options.mainWrap)
        }

        MainSlider.prototype.init = function(){
            this.addDot()
            this.eventFn()
            this.autoPlay()
        }
        MainSlider.prototype.eventFn = function(){
            var _this = this

            this.$dotWrap.find('.s-dot').on('click', function(){
                var $_this = $(this);
                _this.index = $_this.index();

                $_this.addClass('active').siblings().removeClass('active')
                _this.go(_this.index);
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
            this.autoPlay()
        }
        MainSlider.prototype.autoPlay = function(){
            var _this = this;

            clearInterval(this.picTimer);
            this.picTimer = setInterval(function(){
                if(_this.index < _this.len - 1)
                    _this.index++
                else
                    _this.index = 0

                _this.$dotWrap.find('.s-dot').removeClass('active')
                _this.$dotWrap.find('.s-dot').eq(_this.index).addClass('active')

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
             this.initStyle()
             this.event()
             this.refresh()
         }
         SolutionSlide.prototype.initStyle = function(){
            var itemW = this.$this.width() / 5;
            this.$item.width(itemW)

            var sonLen = this.$item.size()
            this.$wrap.width(itemW * sonLen)
        }
        SolutionSlide.prototype.event = function(){
            var _this = this
            if(this.$item.size() <= this.showNum){
                this.nextBtn.hide()
                this.prevBtn.hide()
                return
            }

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
                _this.initStyle()
                _this.moveTo(0)
            })
        }

         return this.each(function(){
             var instance = new SolutionSlide(this);
             instance.init()
         })
     }

     /**
      * tab 选项卡
      */
    var pTabDefault = {
        titWrap: '.youyi-tab-tit',
        conWrap: '.youyi-tab-content',
        titItem: '.tit-item',
        conItem: '.con-item-row'
    };
    $.fn.publicTab = function(options){
        var options = $.extend({}, pTabDefault, options),
            _this = this,
            $titItem = _this.find(options.titWrap).find(options.titItem),
            $conItem = _this.find(options.conWrap).find(options.conItem);

        return this.each(function(){
            $titItem.on('mouseenter', function(){
                var $_this = $(this),
                    index = $_this.index();

                $_this.addClass('active').siblings().removeClass('active')
                $conItem.eq(index).show().siblings().hide()
            })
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
   /**
     * 返回顶部
     * @speed {number} 动画速度
     */
    var goTopDefault = {
        speed: 500
    }
    $.fn.goTop = function(opt){
        var $w = $(G),
            opt = $.extend({}, goTopDefault, opt),
            $ele = this;

        $w.scroll(function(e){
            var sc = $w.scrollTop()

            if(sc > 100) $ele.removeClass('none')
            else $ele.addClass('none')
        })
        $ele.click(function(event) {
            $('body, html').animate({
                scrollTop: 0
            }, opt.speed)
        });
    }

    /**
     * tool-bar 移入展开
     * @params dom元素 id
     */
    var toolBarToogleDefault = {
        cart: '#cart',
        item: '.tool-item',
        con: '.t-con',
        onlineConnect: '#onlineConnect',
        sPhone: '#sPhone',
        hotActive: '#hotActive',
        freeCall: '#freeCall'
    }
    $.fn.toolBarToogle = function(opt){
        var opt = $.extend({}, toolBarToogleDefault, opt),
            $ele = this,
            $cart = $ele.find(opt.cart),
            $onlineConnect = $ele.find(opt.onlineConnect),
            $sPhone = $ele.find(opt.sPhone),
            $hotActive = $ele.find(opt.hotActive),
            $freeCall = $ele.find(opt.freeCall);

        publicToogleFn({
            $ele: $ele,
            item: opt.item,
            con: opt.con
        })

        /**
         * 公共伸缩函数
         * @param obj {object}
         */
        function publicToogleFn(obj){
            obj.$ele.find(obj.item).on('mouseenter', function(){
                var $this = $(this),
                    $con = $this.find(obj.con),
                    _w = $con.outerWidth();
                $con.stop().animate({
                    left: - _w + 3
                })
            }).on('mouseleave', function(){
                $(this).find(obj.con).stop().animate({
                    left: 0
                })
            })
        }
    }

    /**
     * shock arrow
     */
    var shockArrow = {
        top: 200,
        diff: 2,
        speed: 200
    }
    $.fn.shockArrow = function(options){
        var options = $.extend({}, shockArrow, options)

        return this.each(function(){
            var $this = $(this),
                top = parseInt($this.position().top),
                otop = top - options.diff,
                target = parseInt(top + options.diff),
                timer = null;

            loop($this)

            function loop($ele){

                if(top < target){
                    $ele.animate({
                        top: target
                    }, options.speed, 'swing', function(){
                        top = $ele.position().top;
                        loop($ele)
                    })
                }else{
                    $ele.animate({
                        top: otop
                    }, options.speed, 'swing', function(){
                        top = $ele.position().top;
                        loop($ele)
                    })
                }

            }
        })
    }

    /**
     * 内页幻灯
     */
    var industrySliderDefault = {
        item: '.su-s-item',
        btn: '#suBtnGroup',
        prev: '#prev',
        next: '#next'
    }
    $.fn.industrySlider = function(options){
        var options = $.extend({}, industrySliderDefault, options)

        function IndustrySlider($ele){
            this.$ele = $ele
            this.$item = this.$ele.find(options.item)
            this.$btn = this.$ele.find(options.btn)
            this.$next = this.$ele.find(options.next)
            this.$prev = this.$ele.find(options.prev)
            this.index = 0
            this.size = this.$item.size()
        }

        IndustrySlider.prototype.init = function(){
            this.bindEvents()
            this.addPot()
        }
        IndustrySlider.prototype.bindEvents = function(){
            var _this = this

            this.$next.on('click', function(){
                _this.index++
                if(_this.index > _this.size) _this.index = _this.size
                _this.go(_this.go(_this.index))
            })
            this.$prev.on('click', function(){
                _this.index--
                if(_this.index < 0) _this.index = 0
                _this.go(_this.go(_this.index))
            })
        }
        IndustrySlider.prototype.addPot = function(){
            var html = '<div class="su-pot">'

            for(var i = 0; i < this.size; i ++){
                html += '<span class="su-pot-item"></span>'
            }

            html += '</div>';

            this.$btn.after(html)

            this.$ele.find('.su-pot-item').first().addClass('active')
        }
        IndustrySlider.prototype.go = function(index){
            this.$ele.find('.su-pot-item').eq(index).addClass('active').siblings().removeClass('active')
            this.$item.eq(index).stop().fadeIn().siblings().hide()
        }

        return this.each(function(){
            var instance = new IndustrySlider($(this))
            instance.init()
        })
    }

})(window, jQuery)
