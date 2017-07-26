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
                    $subCon.css('left', 0)

                    // if(_ccw < pw){
                    //     $subCon.css('left', _l)
                    // }else{
                    //     $subCon.css('right', 0)
                    // }
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
        bClass: '.banner-row',
        wrapClass: '.index-top-banner'
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
            this.$dotWrap = this.$dom.find(options.slideWrap).find(options.mainWrap),
            this.$wrap = this.$dom.find(options.wrapClass)
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

            if(this.$item.eq(index).attr('data-bg') != undefined){
                this.$wrap.css({
                    background: this.$item.eq(index).attr('data-bg')
                })
            }else{
                this.$wrap.css({
                    background: '#000'
                })
            }
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
     * 云服务tab效果
     */
    var cloudTabDefault = {
        tabTit: '.tab-tit',
        tabCon: '.tab-con',
        tabTitItem: '.tab-tit-item',
        tabConItem: '.tab-con-item'
    }

    $.fn.cloudTab = function(options){
        var options = $.extend({}, cloudTabDefault, options)

        function CloudTab(ele){
            this.$this = $(ele)
            this.$tabTit = this.$this.find(options.tabTit)
            this.$tabCon = this.$this.find(options.tabCon)
            this.$tabTitItem = this.$tabTit.find(options.tabTitItem)
            this.$tabConItem = this.$tabCon.find(options.tabConItem)
        }

        CloudTab.prototype.init = function(){
            this.eventFn()
        }
        CloudTab.prototype.eventFn = function(){
            var _this = this;

            this.$tabTitItem.on('mouseenter', function(){
                var $_this = $(this),
                    $parent = $_this.parent(),
                    $item = $parent.find(options.tabTitItem),
                    $siblings = $parent.siblings().find(options.tabTitItem),
                    index = $parent.index();

                $item.addClass('active')
                $siblings.removeClass('active')

                _this.showCon(index)
            })
        }
        CloudTab.prototype.showCon = function(index){
            this.$tabConItem.each(function(n, i){
                var $_this = $(i);

                if(n === index){
                    $_this.stop().fadeIn()
                    $_this.siblings().hide()
                }
            })
        }


        return this.each(function(){
            var instance = new CloudTab(this)
            instance.init()
        })
    }


    /**
     * 解决方案切换效果
     */
    var solutionSlideDefault = {
        wrap: '.solution',
        menu: '.solution-slide-menu',
        con: '.solution-slide-item',
        moveBg: '.move-bg'
    }
    $.fn.solutionSlide = function(options){
        var options = $.extend({}, solutionSlideDefault, options)

        function SolutionSlide(ele){
            this.$wrap = $(options.wrap)
            this.$this = $(ele)
            this.$menuItem = this.$this.find(options.menu).find('li')
            this.$conItem = this.$this.find(options.con)
            this.$moveBg = this.$this.find(options.moveBg)
            this.speed = 200
        }

        SolutionSlide.prototype.init = function(){
            this.initStyle()
            this.eventFn()


        }
        SolutionSlide.prototype.initStyle = function(){
            var bgImg = '';
            this.$menuItem.each(function(n, i){
                var $_this = $(i)

                if($_this.hasClass('active')){
                    bgImg = $_this.attr('data-bg')
                }
            })

            this.$wrap.css({
                background: 'url(' + bgImg + ') no-repeat center center'
            })
        }
        SolutionSlide.prototype.eventFn = function(){
            var _this = this;

            this.$menuItem.on('mouseenter', function(){
                var $_this = $(this),
                    _top = $_this.position().top,
                    index = $_this.index()

                _this.$moveBg.stop().animate({
                    top: _top
                }, _this.speed, function(){
                    $_this.addClass('active').siblings().removeClass('active')
                    var bgImg = $_this.attr('data-bg')

                    var image = new Image()
                    image.onload = function(){
                        _this.switchBg(image.src)
                    }

                    image.src = bgImg
                })

                _this.showCon(index)
            })

        }
        SolutionSlide.prototype.showCon = function(index){
            this.$conItem.eq(index).stop().fadeIn().siblings().hide()
        }
        SolutionSlide.prototype.switchBg = function(bgImg){
            this.$wrap.css({
                background: 'url(' + bgImg + ') no-repeat center center'
            })
        }

        return this.each(function(){
            var instance = new SolutionSlide(this);
            instance.init()
        })
     }

     /**
      * 选择中企 fadeInUp
      */
    var fadeInUpDefault = {
        item: '.choice-zhongqi-item'
    }
    $.fn.fadeInUp = function(options){
        var options = $.extend({}, fadeInUpDefault, options),
            _this = this;

        function FadeInUp(ele){
            this.$this = $(ele)
            this.$item = this.$this.find(options.item)
        }

        FadeInUp.prototype.init = function(){
            this.eventFn()
            this.initStyle()
        }
        FadeInUp.prototype.initStyle = function(){
            this.$item.hide()
        }
        FadeInUp.prototype.eventFn = function(){
            var _this = this,
                $w = $(window),
                wH = ~~this.$this.innerHeight(),
                pT = ~~this.$this.position().top;

            $w.on('scroll', function(){
                var sT = ~~$w.scrollTop()

                if(sT > (pT - wH)){
                    if(!_this.$item.hasClass('animated')){
                        _this.$item.show().addClass('animated').addClass('fadeInUpSlow')
                    }
                }else{
                    _this.$item.hide().removeClass('animated').removeClass('fadeInUpSlow')
                }
            })
        }

        return this.each(function(){
            var instance = new FadeInUp(_this)
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
     * 底部二维码显示与隐藏
     */
    $.fn.footerQR = function(){
        return this.each(function(){
            var $this = $(this),
                $btn = $this.find('i'),
                $con = $btn.next();

            $btn.on('mouseenter', function(){
                $con.show()
            }).on('mouseleave', function(){
                $con.hide()
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
     * bottom-phone
     */
    $.fn.imzixun = function(opt){
        var $w = $(G),
            $ele = this;

        $w.scroll(function(e){
            var sc = $w.scrollTop() + $w.outerHeight(),
                fT = $('.footer').offset().top,
                dH = $(document).outerHeight();

            if(sc > fT){
                $ele.css({
                    right: -136
                })
            }else{
                $ele.css({
                    right: 0
                })
            }
        })
    }

    /**
     * tool-bar 移入展开
     * @params dom元素 id
     */
    var toolBarToogleDefault = {
        cart: '#cart',
        item: '.tool-item',
        con: '.t-con',
        scon: '.s-p-con',
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
            $freeCall = $ele.find(opt.freeCall),
            speed = 200;

        publicToogleFn({
            $ele: $ele,
            item: opt.item,
            con: opt.con,
            scon: opt.scon
        })

        /**
         * 公共伸缩函数
         * @param obj {object}
         */
        function publicToogleFn(obj){
            obj.$ele.find(obj.item).on('click', function(){
                var $this = $(this),
                    $con = $this.find(obj.con),
                    $scon = $this.find(obj.scon),
                    _w = $con.outerWidth();
                
                $this.addClass('active');
                if($scon.size() > 0){
                    $scon.stop().animate({
                        left: - _w
                    }, speed, function(){
                        $scon.stop().animate({
                            height: 106
                        }, speed)
                    })
                }else{
                    $con.stop().animate({
                        left: - _w + 3
                    })
                }
            }).on('mouseleave', function(){
                var $this = $(this),
                    $con = $this.find(obj.con),
                    $scon = $this.find(obj.scon);

                $this.removeClass('active');
                if($scon.size() > 0){
                    $scon.stop().animate({
                        height: 53
                    }, speed, function(){
                        $scon.stop().animate({
                            left: 0
                        })
                    })
                }else{
                    $con.stop().animate({
                        left: 0
                    }, speed)
                }
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
