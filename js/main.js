import { handleInputCheckForLogin } from './inputCheck.js'

const form = document.querySelector('form')
const successAlert = document.querySelector('.notification-message')
const errorAlert = document.querySelector('.error-notification-message')

const initApp = () => {
     const email = document.getElementById('email').value
     const passWord = document.getElementById('password').value

     const eField = document.querySelector('.email')
     const pField = document.querySelector('.password')
     handleInputCheckForLogin(form, email, passWord, eField, pField, successAlert, errorAlert)
}

form.addEventListener('submit', (e) => {
     e.preventDefault()
     initApp()
})
