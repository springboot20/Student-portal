import handleInputCheck from './inputCheck.js'
import { checkUsername, checkPassLength, checkEmail, confirmPass } from './inputCheck.js'
import handlerShowPassword from './eyeIcon.js'

const form = document.querySelector('form')

const initApp = () => {
     const username = document.getElementById('username')
     const email = document.getElementById('email')
     const passWord = document.getElementById('password')
     const confirmPassword = document.getElementById('confirmPassword')
     const successAlert = document.querySelector('.notification-message')
     const errorAlert = document.querySelector('.error-notification-message')
     const closeBtn = document.querySelector('.close')

     const uField = document.querySelector('.user')
     const eField = document.querySelector('.email')
     const pField = document.querySelector('.password')
     const cField = document.querySelector('.confirm');

     (username.value == "") ? uField.classList.add('shake', 'error') : checkUsername(username, uField);
     (email.value == "") ? eField.classList.add('shake', 'error') : checkEmail(email, eField);
     (passWord.value == "") ? pField.classList.add('shake', 'error') : checkPassLength(passWord, pField);
     (confirmPassword.value == "") ? cField.classList.add('shake', 'error') : confirmPass(passWord, confirmPassword, cField);


     setTimeout(() => {
          uField.classList.remove('shake', 'error')
          eField.classList.remove('shake', 'error')
          pField.classList.remove('shake', 'error')
          cField.classList.remove('shake', 'error')
     }, 1600)

     setTimeout(() => {
          uField.classList.remove('valid')
          eField.classList.remove('valid')
          pField.classList.remove('valid')
          cField.classList.remove('valid')
     }, 2500)

     username.addEventListener('keyup', () => { checkUsername(username, uField) })
     email.addEventListener('keyup', () => { checkEmail(email, eField) })
     passWord.addEventListener('keyup', () => { checkPassLength(passWord, pField) })
     confirmPassword.addEventListener('keyup', () => { confirmPass(passWord, confirmPassword, cField) })
     handleInputCheck(username, email, passWord, confirmPassword, successAlert, errorAlert, closeBtn)
}

form.addEventListener('submit', (e) => {
     e.preventDefault()
     initApp()

})
handlerShowPassword('password', 'confirmPassword', 'pass-icon', 'cPass-icon')
