function tabs (menu, show) {
	for (var i = 0; i < menu.length; i++) {
		menu[i].onclick = function() {
			for (var j = 0; j < show.length; j++) {
				show[j].style.display = 'none';
			};
			document.getElementById(this.dataset.tabs).style.display = 'block';
		};
	};
};

var menu = document.querySelectorAll('.tabs__menu_item');
var show = document.querySelectorAll('.tabs__image_item');

tabs(menu, show);