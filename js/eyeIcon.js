const handlerShowPassword = (passID, confirmId, pIcon, cIcon) => {
  const pass = document.querySelector(`#${passID}`);
  const cPass = document.querySelector(`#${confirmId}`);
  const pCon = document.querySelector(`.${pIcon}`);
  const cCon = document.querySelector(`.${cIcon}`);

  pCon.addEventListener("click", () => {
    if (pCon.classList.contains("fa-eye")) {
      pass.setAttribute("type", "text");
      pCon.classList.replace("fa-eye", "fa-eye-slash");
    } else {
      pass.setAttribute("type", "password");
      pCon.classList.replace("fa-eye-slash", "fa-eye");
    }
  });

  cCon.addEventListener("click", () => {
    if (cCon.classList.contains("fa-eye")) {
      cPass.setAttribute("type", "text");
      cCon.classList.replace("fa-eye", "fa-eye-slash");
    } else {
      cPass.setAttribute("type", "password");
      cCon.classList.replace("fa-eye-slash", "fa-eye");
    }
  });
};
export default handlerShowPassword;
