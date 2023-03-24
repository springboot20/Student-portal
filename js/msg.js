/**
 * Show error message for the form
 * @param {*} message
 * @param {*} className
 * @param {*} iconType
 */

 function showErrorMessage(message, className, iconType) {
     const div = document.createElement('div')

     div.className = `alert alert-${className}`
     div.appendChild(document.createTextNode(`${message}`))

     const icon = document.createElement('i')
     icon.className = `fas fa-${iconType}`
     div.appendChild(icon)

     const container = document.querySelector('.container')
     container.insertBefore(div, form)

     setTimeout(() => document.querySelector('.alert').remove(), 1600)
}

export { showErrorMessage}
