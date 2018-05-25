document.getElementById('menu_icon').addEventListener('click', function(e) {
	var x = document.getElementById("menu_id");
	if (x.className === "menu_class") {
		x.className += " responsive";
	} else {
		x.className = "menu_class";
	}
});

document.getElementById('chatbox').addEventListener('click', function(e){
	var x = document.getElementById("chatbox");
	if (x.className === "chatbox") {
		x.className = "chatboxActive";
	} else {
		x.className = "chatbox";
	}
});
