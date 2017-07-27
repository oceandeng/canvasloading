/**
 * 获取数据，渲染页面
 */
(function(W, $){
	var Index = function(){
		this.defaultTopMenuId = '';
		this.defaultLink = '';
		this.iframe = null;
		this._h = $(window).height() - $('.top').outerHeight();
	}

	// 初始化
	Index.prototype.init = function(){
		this.getTopMenuSub()
		this.getSecondMenuSub()
		this.requestData()
	}

	// 订阅获取主菜单，并绑定事件
	Index.prototype.getTopMenuSub = function(){
		var _this = this
		$.subscribe('getTopMenu', function(e, data){
			if(data){
				var compiledTemplate = _.template($('#topMenuTpl').html())
				$('#topMenu').append(compiledTemplate(data))

				$('#topMenu').find('a').click(function(){
					var $_this = $(this)

					var topMenuId = $_this.parent().attr('data-id')
					_this.getSecondMenu(topMenuId)
				})
			}
		})
	}

	// 订阅获取子菜单，并绑定事件
	Index.prototype.getSecondMenuSub = function(){
		var _this = this;
		var $leftSecondMenu = $('#leftSecondMenu');
		$.subscribe('getSecondMenu', function(e, data){
			if(data){
				var compiledTemplate = _.template($('#secondMenuTpl').html());
				$leftSecondMenu.empty().append(compiledTemplate(data))
				_this.defaultLink = data.secondMenu[0].childrens[0].content
				_this.appendIframe(_this.defaultLink)
			}
		})
		this.leftMenuEvent($leftSecondMenu)
	}

	// 请求获取主菜单
	Index.prototype.requestData = function(){
		var _this = this;
		CEBOSS.api.$get({}, '/scripts/data/topmenu.json').done(function(result){
			_this.topMenuId = result.data.functions[0].id;
			_this.getSecondMenu(_this.topMenuId)
			// 发布获取主菜单
			$.publish('getTopMenu', result.data)
		})
	}

	// 请求获取子菜单
	Index.prototype.getSecondMenu  = function(topMenuId){
		console.log('topMenuId: ', topMenuId)
		var params = {topMenuId: topMenuId}
		CEBOSS.api.$get(params, '/scripts/data/getSecondMenu.json').done(function(result){
			// 发布获取子菜单
			$.publish('getSecondMenu', result.data)
		})
	}

	// 左侧菜单绑定事件
	Index.prototype.leftMenuEvent = function($ele){
		var _this = this;
		$ele.on('click', '.second-tit', function(){
			var $_this = $(this),
				$_next = $_this.parents('h3').next();

			if($_next.is(':visible')) $_next.hide()
			else $_next.show()
		})

		$ele.on('click', '.second-link', function(){
			var $_this = $(this),
				link = $_this.attr('data-link');

			_this.changeIframeLink(link)
		})
	}

	// 添加iframe
	Index.prototype.appendIframe = function(link){
		this.iframe = document.createElement('iframe');
		this.iframe.id = 'mainFrame';
		this.iframe.setAttribute('frameborder', 0);
		this.iframe.style.width = '100%';
		this.iframe.style.background = 'white';
		this.iframe.style.height = this._h + 'px';
		this.iframe.src = link;

		document.getElementById('mainContent').appendChild(this.iframe)
	}

	// iframe切换页面
	Index.prototype.changeIframeLink = function(link){
		this.iframe.src = link;
	}

	// 调用
	var indexInstance = new Index()
	indexInstance.init()

})(window, jQuery);

/**
 * 左侧菜单展开折叠
 */
(function(W, $){
	var $toHidden = $('#toHidden'),
		$mainContent = $('#mainContent'),
		$left = $toHidden.parents('.left'),
		$toggleArrow = $('#toggleArrow'),
		$left_w = $left.outerWidth();

	$toHidden.on('click', function(){
		if($left.position().left == 0){
			$left.animate({
				left: - $left_w + 40
			}, function(){
				console.log('a')
				$toggleArrow.css('transform', 'rotate(180deg)')
			})
			$mainContent.animate({
				left: 40
			})
		}else{
			$left.animate({
				left: 0
			}, function(){
				$toggleArrow.css('transform', 'rotate(0)')
			})
			$mainContent.animate({
				left: 200
			})
		}
	})
})(window, jQuery);