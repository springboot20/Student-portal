const cardTemplete = document.querySelector('.main-teacher-container')
let output = ''

const getTeacherProfiles = (url) => {
     fetch(`${url}`)
          .then((respoanse) => {
               return respoanse.json()
          })
          .then((data) => {
               setTimeout(() => {
                    data.forEach(({ img, name, subject }) => {
                         output += `
                         <div class="teacher-card">
                              <img src="${img}" alt="${name.toLowerCase()}" class="card-img skeleton">
                              <div class="t-card-body">
                                   <h3 class="t-card-title">${name}</h3>
                                   <p class="t-card-text">${subject}</p>
                              </div>
                              <div class="t-card-btn">
                                   <a href="07086807968"><span class="fa fa-phone"></span></a>
                                   <a href="www.facebook.com/${name}"><span class="fab fa-github"></span></a>
                                   <a href="www.github.com/${name}"><span class="fab fa-facebook"></span></a>
                                   <a href="www.linkedin.com/${name}"><span class="fab fa-linkedin"></span></a>
                              </div>
                         </div>

                         `
                         cardTemplete.innerHTML = output
                    })
               }, 5000)
          })
          .catch((error) => {
               console.log(error)
          })
}
getTeacherProfiles('json/teacher.json')
