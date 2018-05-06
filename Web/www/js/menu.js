function displayMenu() {
    var x = document.getElementById("menu_id");
    if (x.className === "menu_class") {
        x.className += " responsive";
    } else {
        x.className = "menu_class";
    }
}
