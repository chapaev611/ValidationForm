var form = document.querySelector('.formWithValidation');
var validateBtn = form.querySelector('.validateBtn');
var from = form.querySelector('.from');
var password = form.querySelector('.password');
var passwordConfirmation = form.querySelector('.passwordConfirmation');
var where = form.querySelector('.where');
var message = form.querySelector('.message');
var fields = form.querySelectorAll('.field');


var generateEror = function(text) {
	var error = document.createElement('div');
	error.className = "error";
	error.innerText = text;
	return error;
}

var removeValidation = function() {
	var errors = form.querySelectorAll('.error');

	for(var i = 0; i < errors.length; i++) {
		errors[i].remove();
	}
}

var checkFieldsPresence = function() {
	for(var i = 0; i < fields.length; i++) {
		if(!fields[i].value) {
			let error = generateEror('Заполните поле!');
			form[i].parentElement.appendChild(error);
		}
	}

}

var checkPasswordMatch = function() {
	if(password.value !== passwordConfirmation.value) {
		let error = generateEror("Пароли не совпадают!");
		password.parentElement.appendChild(error);
	}
}


form.addEventListener('submit', function(event) {
	event.preventDefault();

	removeValidation();

	checkFieldsPresence();

	checkPasswordMatch();
});

