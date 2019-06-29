document.getElementById('menu_icon').addEventListener('click', function(e) {
	var x = document.getElementById("menu_id");
	if (x.className === "menu_class") {
		x.className += " responsive";
	} else {
		x.className = "menu_class";
	}
});

document.getElementById('ok_button').addEventListener('click', function(e) {
	var x = document.getElementById("script_alert");
	x.style.display = 'none';
});
