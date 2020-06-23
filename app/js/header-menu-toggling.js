function HeaderMenuToggling() {
	let _btnToggle = $('#header__btn-menu'),
			_menu = $('#header__menu');

	WindowSize();
	$(window).resize(WindowSize);

	_btnToggle.click(function () {
		_menu.toggleClass('closed');
		if (_menu.hasClass('closed')) {
			_menu.slideToggle(400);
		} else {
			_menu.slideToggle(400);
		}

		_btnToggle.toggleClass('closed');
		if (_btnToggle.hasClass('closed')) {			
			_btnToggle.empty().prepend('&#xf00d;');
		} else {
			_btnToggle.empty().prepend('&#xf0c9;');
		}
	})

	function WindowSize() {
		let _windowSize = $('html').width();

		if (_windowSize > 576) {
			_menu.css({display: 'flex'});
		} else {
			if (_menu.hasClass('closed')) {
				_menu.css({display: 'none'});
			} else {
				_menu.css({display: 'flex'});
			}
		} 
	}
}

HeaderMenuToggling();