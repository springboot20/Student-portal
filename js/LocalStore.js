/**
 * Checks whether there is storage name USER-LOGIN if it is NULL
 * Then it set it to the empty array userArray = []
 */

let getUsers = () => {
     let userArray;
     if (localStorage.getItem('user-login') === null) {
          userArray = []
     } else {
          userArray = JSON.parse(localStorage.getItem('user-login'))
     }

     return userArray
}

let LocalStore = (username, email, passWord, confirmPassword) => {
     const users = getUsers()

     let userLogin = {
          username: username.value,
          userEmail: email.value,
          userPassword: passWord.value,
          userConfirmPass: confirmPassword.value
     }

     username.focus()

     users.push(userLogin)
     localStorage.setItem('user-login', JSON.stringify(users))
}
export { LocalStore, getUsers }
