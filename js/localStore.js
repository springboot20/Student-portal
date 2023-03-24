const getUsers = () => {
	let users
	localStorage.getItem('user-logins') === null ? users = [] : users = JSON.parse(localStorage.getItem('user-logins'));

	return users
}

const LocalStore = (username, email, password, conPassword) => {
	let user = getUsers()
	const usersLogin = {
		userName: username.value,
		userEmail: email.value,
		userPassowrd: password.value,
		userConfirm: conPassword.value
	}

	user.push(usersLogin)
	localStorage.setItem('user-login', JSON.stringify(usersLogin))
}

export { getUsers, LocalStore }
