import { getUsers } from "./LocalStore.js"
import showErrorMessage from "./msg.js"

const checkUserLogs = (form, emailId, passId, eField, pField, successId, errorId) => {
     const users = getUsers()
     let exist = users.some((user) => (user.userEmail === emailId) && (user.userPassword === passId))
     if (!exist) {
          eField.classList.add('error');
          eField.classList.remove('valid');

          pField.classList.add('error');
          pField.classList.remove('valid');

          form.reset()
          errorId.classList.add('active')
     } else {
          eField.classList.add('valid');
          eField.classList.remove('error');

          pField.classList.add('valid');
          pField.classList.remove('error');

          errorId.classList.remove('active')
          successId.classList.add('active')
          setTimeout(() => location.href = form.getAttribute('action'), 2500)
     }

     localStorage.setItem('user-login', JSON.stringify(users))
}

export default checkUserLogs
