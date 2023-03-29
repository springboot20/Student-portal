import {
  checkUsername,
  checkPassLength,
  checkEmail,
  confirmPass,
} from "./inputCheck.js";
import handlerShowPassword from "./eyeIcon.js";

let userDetails = [];

const getPrevDetails = () => {
  if (localStorage.getItem("users-details")) {
    userDetails = JSON.parse(localStorage.getItem("users-details"));
  }
};

addEventListener("load", () => {
  getPrevDetails();
});

const form = document.querySelector("form");

const username = document.getElementById("username");
const email = document.getElementById("email");
const passWord = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const successAlert = document.querySelector(".notification-message");
const errorAlert = document.querySelector(".error-notification-message");
const closeBtn = document.querySelectorAll(".close");
const signButton = document.querySelector("#signBtn");

console.log(closeBtn);

closeBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    this.parentElement.classList.remove("active");
  });
});

const uField = document.querySelector(".user");
const eField = document.querySelector(".email");
const pField = document.querySelector(".password");
const cField = document.querySelector(".confirm");
const initApp = () => {
  username.value === ""
    ? uField.classList.add("error")
    : checkUsername(username, uField);
  email.value === ""
    ? eField.classList.add("error")
    : checkEmail(email, eField);
  passWord.value === ""
    ? pField.classList.add("error")
    : checkPassLength(passWord, pField);
  confirmPassword.value === ""
    ? cField.classList.add("error")
    : confirmPass(passWord, confirmPassword, cField);

  setTimeout(() => {
    uField.classList.remove("valid");
    eField.classList.remove("valid");
    pField.classList.remove("valid");
    cField.classList.remove("valid");
    errorAlert.classList.remove("active");
    successAlert.classList.remove("active");
  }, 2500);

  const userLogs = {
    userName: username.value,
    email: email.value,
    password: passWord.value,
    confirmPassword: confirmPassword.value,
    courseList: [],
  };

  console.log(userLogs);

  if (
    !uField.classList.contains("error") &&
    !eField.classList.contains("error") &&
    !pField.classList.contains("error") &&
    !cField.classList.contains("error")
  ) {
    errorAlert.classList.remove("active");
    successAlert.classList.add("active");

    const span = document.createElement("span");
    span.className = "loader";
    signButton.textContent = `Signing Up..........`;
    signButton.disabled = true;
    signButton.append(span);

    userDetails.push(userLogs);
    console.log(userDetails);
    localStorage.setItem("users-details", JSON.stringify(userDetails));

    setTimeout(() => {
      window.location.href = form.getAttribute("action");
    }, 4500);
  } else {
    successAlert.classList.remove("active");
    errorAlert.classList.add("active");
  }
};
username.addEventListener("keyup", () => {
  checkUsername(username, uField);
});
email.addEventListener("keyup", () => {
  checkEmail(email, eField);
});
passWord.addEventListener("keyup", () => {
  checkPassLength(passWord, pField);
});
confirmPassword.addEventListener("keyup", () => {
  confirmPass(passWord, confirmPassword, cField);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  initApp();
});
handlerShowPassword("password", "confirmPassword", "pass-icon", "cPass-icon");
