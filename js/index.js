// const navBar = document.querySelector('.side-nav')
// const btn = document.querySelector('.btn'),
//      searchBtbn = document.querySelector('#search-btn')

// btn.addEventListener('click', () => {
//      if (btn.classList.contains('fa-bars')) {
//           navBar.classList.add('active')
//           btn.classList.replace('fa-bars', 'fa-arrow-left')
//      } else {
//           navBar.classList.remove('active')
//           btn.classList.replace('fa-arrow-left', 'fa-bars')
//      }
// })


const toggleBtn = document.querySelector('.toggler input[type="checkbox"]')

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null
if (currentTheme) {
     if (toggleBtn.checked && currentTheme === 'dark') {
          document.documentElement.setAttribute('data-theme', currentTheme)
     }
}
const darkSwitch = () => {
     if (toggleBtn.checked) {
          document.documentElement.setAttribute('data-theme', 'dark')
          localStorage.setItem('theme', 'dark')
     } else {
          document.documentElement.setAttribute('data-theme', 'light')
          localStorage.setItem('theme', 'light')
     }
}
toggleBtn.addEventListener('change', darkSwitch, false)

$(window).on("load", function () {
     $("body").addClass("loaded");
});

function search(searchIconID, searchInputID) {
     let searchBtn = document.querySelector(`.${searchIconID}`);
     let searchInput = document.querySelector(`#${searchInputID}`);

     searchBtn.addEventListener('click', () => searchInput.focus())
     searchInput.addEventListener('keyup', (e) => {
          console.log(document.TEXT_NODE)
     })
}

search("search", "search-box")
