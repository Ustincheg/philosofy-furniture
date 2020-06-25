function HeaderMenuToggling() {
	// Element's initialization
	let _btnToggle = $('#header__btn-menu'),
			_menu = $('#header__menu')

	// Click function. Animating and setting up the focus 
	// on first available element (with HRef).
	_btnToggle.click(function () {
		_menu.toggleClass('closed');
		if (_menu.hasClass('closed')) {
			_menu.slideToggle(400);
		} else {
			_menu.slideToggle(400, function () {
				_menu.find('li a[href]:first-child')[0].focus();
			});
		}

		// Changing icon inside the button.
		_btnToggle.toggleClass('closed');
		if (_btnToggle.hasClass('closed')) {			
			_btnToggle.empty().prepend('&#xf00d;');
		} else {
			_btnToggle.empty().prepend('&#xf0c9;');
		}
	})

	// Watching for window resizing. 
	// Checking for tablet and mobile versions.
	WindowSize();
	$(window).resize(WindowSize);

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

// Starting script.
HeaderMenuToggling();