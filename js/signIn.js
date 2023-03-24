import { getUsers } from './LocalStore.js';
import { showErrorMessage } from './msg.js'

const email = document.getElementById('email');
const passWord = document.getElementById('password');

const eField = document.querySelector('.email');
const pField = document.querySelector('.password');

const successAlert = document.querySelector('.notification-message');
const errorAlert = document.querySelector('.error-notification-message');
const form = document.querySelector('form');

const users = getUsers();
let emailExist = users.some((user) => (user.userEmail === email));
let passExist = users.some((user) => (user.userPassword === pass));
console.log(users)
form.addEventListener('submit', (e) => {
	e.preventDefault();

	(email.value === '') ? eField.classList.add('shake', 'error') : checkEmail(emailExist, eField);
	(passWord.value === '') ? pField.classList.add('shake', 'error') : checkPassword(passExist, pField);

	if (emailExist && passExist) {
		errorAlert.classList.add('active');
		successAlert.classList.add('active');
		setTimeout(() => location.href = form.getAttribute('action'), 2500);
	} else {
		showErrorMessage('User details does not exist', 'danger', 'fa-circle-exclamation');
		errorAlert.classList.add('active');
	}

	localStorage.setItem('user-logins', JSON.stringify(users));

	setTimeout(() => {
		eField.classList.remove('shake');
		pField.classList.remove('shake');
	}, 600);
	setTimeout(() => errorAlert.classList.remove('active'), 5000);

});

email.addEventListener('keyup', () => { checkEmail(emailExist, eField) });
passWord.addEventListener('keyup', () => { checkPassword(passExist, pField) });

let checkEmail = (exist, field) => {
	if (!exist) {
		field.classList.add('error')
		field.classList.remove('valid')
	} else {
		field.classList.add('valid')
		field.classList.remove('error')
	}
}

let checkPassword = (exist, field) => {
	if (!exist) {
		field.classList.add('error')
		field.classList.remove('valid')
	} else {
		field.classList.add('valid')
		field.classList.remove('error')
	}
}
