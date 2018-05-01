// Fonction de désactivation de l'affichage des "tooltips"
function deactivateTooltips() {

	var tooltips = document.querySelectorAll('.tooltip'),
		tooltipsLength = tooltips.length;

	for (var i = 0; i < tooltipsLength; i++) {
		tooltips[i].style.display = 'none';
	}

}


// La fonction ci-dessous permet de récupérer la "tooltip" qui correspond à notre input

function getTooltip(elements) {

	while (elements = elements.nextSibling) {
		if (elements.className === 'tooltip') {
			return elements;
		}
	}

	return false;

}


// Fonctions de vérification du formulaire, elles renvoient "true" si tout est ok

var check = {}, // On met toutes nos fonctions dans un objet littéral
	checked = {}; // Pour griser le bouton de validation

check['lastname'] = function(id) {

	var name = document.getElementById(id),
		tooltipStyle = getTooltip(name).style;

	if (!/[^a-z\u00E0-\u00F6\u00F8-\u00FF-']/i.test(name.value) && name.value.length >= 1) {
		name.className = 'correct';
		tooltipStyle.display = 'none';
		return true;
	} else {
		name.className = 'incorrect';
		tooltipStyle.display = 'inline-block';
		return false;
	}

};

check['firstname'] = check['lastname']; // La fonction pour le prénom est la même que celle du nom

check['useremail'] = function() {

	var email = document.getElementById('useremail'),
		tooltipStyle = getTooltip(email).style;

	if (/[a-zA-Z0-9._]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,6}/i.test(email.value)) {
		email.className = 'correct';
		tooltipStyle.display = 'none';
		return true;
	} else {
		email.className = 'incorrect';
		tooltipStyle.display = 'inline-block';
		return false;
	}

};

check['username'] = function() {

	var login = document.getElementById('username'),
		tooltipStyle = getTooltip(login).style;

		if (/[a-zA-Z0-9-_]{4,}/.test(login.value)) {
			login.className = 'correct';
			tooltipStyle.display = 'none';
			return true;
		} else {
			login.className = 'incorrect';
			tooltipStyle.display = 'inline-block';
			return false;
		}
};

check['userpwd'] = function() {

	var pwd1 = document.getElementById('userpwd'),
		tooltipStyle = getTooltip(pwd1).style;

	if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\S]{8,}$/.test(pwd1.value)) {
		pwd1.className = 'correct';
		tooltipStyle.display = 'none';
		return true;
	} else {
		pwd1.className = 'incorrect';
		tooltipStyle.display = 'inline-block';
		return false;
	}

};

// Mise en place des événements

(function() { // Utilisation d'une IIFE pour éviter les variables globales.

	var myForm = document.getElementById('myForm'),
		inputs = document.querySelectorAll('input[type=text], input[type=password]'),
		inputsLength = inputs.length;

	for (var i = 0; i < inputsLength; i++) {
		checked[inputs[i].id] = false;
		inputs[i].addEventListener('keyup', function(e) {
			checked[e.target.id] = check[e.target.id](e.target.id); // "e.target" représente l'input actuellement modifié
			var submitOk = true;
			for(var c in checked) {
			   submitOk = submitOk && checked[c];
			}
			document.getElementById("envoyer").disabled = !submitOk;
		});
	}

	myForm.addEventListener('submit', function(e) {

		var result = true;

		for (var i in check) {
			result = result && check[i](i);
		}

		if (result) {
			document.getElementById("myForm").submit();
		}

		e.preventDefault();

	});

	myForm.addEventListener('reset', function() {

		for (var i = 0; i < inputsLength; i++) {
			inputs[i].className = '';
		}

		deactivateTooltips();

	});

})();


// Maintenant que tout est initialisé, on peut désactiver les "tooltips"

deactivateTooltips();
