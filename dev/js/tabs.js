function tabs (menu, show) {
	for (var i = 0; i < menu.length; i++) {
		menu[i].onclick = function() {
			style(menu)
			for (var j = 0; j < show.length; j++) {
				show[j].style.display = 'none';
			};
			document.getElementById(this.dataset.tabs).style.display = 'block';
			this.classList.add('tabs__menu_active');
		};
	};
	function style (arr) {
		for (var i = 0; i< arr.length; i++) {
			arr[i].classList.remove('tabs__menu_active')
		}
	}
};

var menu = document.querySelectorAll('.tabs__menu_item');
var show = document.querySelectorAll('.tabs__image_item');

tabs(menu, show);