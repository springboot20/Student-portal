/**
 * Check if any of the inpu is left unfilled or all of the input is not fill
 * @param {*} userId
 * @param {*} emailId
 * @param {*} passId
 * @param {*} confirmId
 */

const handleInputCheck = (
  userId,
  emailId,
  passId,
  confirmId,
  successId,
  errorId
) => {
  if (
    userId.value === "" ||
    emailId.value === "" ||
    passId.value === "" ||
    confirmId.value === ""
  ) {
    errorId.classList.add("active");
    successId.classList.remove("active");
    setTimeout(() => errorId.classList.remove("active"), 1500);
  } else {
    setTimeout(() => {
      userId.value = "";
      emailId.value = "";
      passId.value = "";
      confirmId.value = "";
      successId.classList.remove("active");
    }, 2500);

    successId.classList.add("active");
    errorId.classList.remove("active");
  }
};

/**
 * Check for password lenght if password length is less than six it add error class to passord field if not it add a valid class
 * @param {*} pass
 * @param {*} pField
 */

function checkUsername(userInput, uField) {
  if (userInput.value.length < 8) {
    uField.classList.add("error");
    uField.classList.remove("valid");
  } else {
    uField.classList.add("valid");
    uField.classList.remove("error");
  }
}

function checkPassLength(pass, pField) {
  let pattern =
    /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[-\#\$\.\%\*]+)(?=.*[a-zA-Z]).{8,16}$/g;
  if (pass.value.match(pattern)) {
    pField.classList.add("error");
    pField.classList.remove("valid");
  } else {
    pField.classList.add("valid");
    pField.classList.remove("error");
  }
}

function confirmPass(passInput, confirmInput, cField) {
  if (
    !(passInput.value.length === confirmInput.value.length) ||
    !(passInput.value === confirmInput.value)
  ) {
    cField.classList.add("error");
    cField.classList.remove("valid");
  } else {
    cField.classList.add("valid");
    cField.classList.remove("error");
  }
}

/**
 * Check if the email matches the REGEX Expression if it does not match it add error class to email field if not it add a valid class
 * @param {*} email
 * @param {*} eField
 */

function checkEmail(email, eField) {
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.value.match(pattern)) {
    eField.classList.add("error");
    eField.classList.remove("valid");
  } else {
    eField.classList.add("valid");
    eField.classList.remove("error");
  }
}

export {
  handleInputCheck,
  checkUsername,
  checkPassLength,
  checkEmail,
  confirmPass,
};
