const card = document.createElement('div')
card.className = 'teacher-card'

const cardBody = document.createElement('div')
card.className = 't-card-body'

const cardTitle = document.createElement('h3')
cardTitle.className = 't-card-title'
cardTitle.appendChild(document.createTextNode(`${name}`))

const cardBtn = document.createElement('div')
cardBtn.className = 't-card-btn'

const cardText = document.createElement('p')
cardTitle.className = 't-card-text'
cardTitle.appendChild(document.createTextNode(`${subject}`))

cardBody.appendChild(cardTitle)
cardBody.appendChild(cardText)

crad.appendChild(cardBody)
card.appendChild(cardBtn)



