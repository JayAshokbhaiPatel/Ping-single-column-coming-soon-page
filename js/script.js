const email_pattern = /^[a-zA-Z0-9_]+@gmail.com$/;

const form = document.querySelector(".subscribe-form");
console.log("🚀 ~ file: script.js ~ line 4 ~ form", form);
const email = document.querySelector(".subscribe-form__emailInput");
const error = document.querySelector("#error-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validateForm();
});

function isValidEmail(emailID) {
  return email_pattern.test(emailID);
}

function setError(fieldValue, errorMessage) {
  fieldValue.classList.remove("success");
  fieldValue.classList.add("error");
  error.textContent = errorMessage;
}

function setSuccess(fieldValue) {
  fieldValue.classList.remove("error");
  fieldValue.classList.add("success");
  error.textContent = "";
}

function validateForm() {
  const emailValue = email?.value?.trim();
  if (emailValue === "") {
    setError(email, "Email Field cannot be blank");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Please provide a valid email address");
  } else {
    setSuccess(email);
  }
}
