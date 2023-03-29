let userDetails = [];

const getPrevDetails = () => {
  if (localStorage.getItem("users-details")) {
    userDetails = JSON.parse(localStorage.getItem("users-details"));
  }
};

addEventListener("load", () => {
  getPrevDetails();
});

const email = document.getElementById("email");
const passWord = document.getElementById("password");

const eField = document.querySelector(".email");
const pField = document.querySelector(".password");

const successAlert = document.querySelector(".notification-message");
const errorAlert = document.querySelector(".error-notification-message");

const closeBtn = document.querySelector(".close");
const form = document.querySelector("form");

closeBtn.addEventListener("click", function () {
  this.parentElement.classList.remove("active");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (email.value === "") eField.classList.add("error");
  if (passWord.value === "") pField.classList.add("error");

  let emailValue = email.value;
  let passwordValue = passWord.value;

  let _isFound = false;
  userDetails = JSON.parse(localStorage.getItem("users-details"));

  console.log(userDetails);

  for (let ind = 0; ind < userDetails.length; ind++) {
    let eExist = userDetails[ind].email === emailValue;
    let pExist = userDetails[ind].password === passwordValue;

    if (eExist && pExist) {
      _isFound = true;
      localStorage.setItem("user-index", JSON.stringify(ind));
      console.log(localStorage.getItem("user-index"));
    }
  }

  if (_isFound === false) {
    eField.classList.add("error");
    pField.classList.add("error");

    errorAlert.classList.add("active");
  } else {
    setTimeout(() => {
      location.href = form.getAttribute("action");
      email.value = "";
      passWord.value = "";
    }, 2500);

    eField.classList.add("valid");
    pField.classList.add("valid");

    successAlert.classList.add("active");

    eField.classList.remove("error");
    pField.classList.remove("error");
  }

  setTimeout(() => {
    eField.classList.remove("valid");
    pField.classList.remove("valid");
    errorAlert.classList.remove("active");
  }, 2500);
});
