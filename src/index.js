import "./styles.css";

const email = document.getElementById("email");
const emailError = document.querySelector(".email-error");

const country = document.getElementById("country");
const countryError = document.querySelector(".country-error");

const postal = document.getElementById("postal");
const postalError = document.querySelector(".postal-error");

const password = document.getElementById("password");
const passError = document.querySelector(".password-error");
const confirmPassword = document.getElementById("confirm-password");
const confirmPasswordError = document.querySelector(".confirm-password-error");

const form = document.querySelector("form");

email.addEventListener("input", (e) => {
  if (email.validity.typeMismatch) {
    emailError.textContent = "Hey there enter valid email";
    emailError.className = "error";
    e.preventDefault();
  } else {
    emailError.textContent = "";
    emailError.className = "";
  }
});

password.addEventListener("input", (e) => {
  if (password.validity.tooShort) {
    passError.textContent =
      "Your password is weak like you. Enter more characters";
    passError.className = "error";
    e.preventDefault();
  } else {
    passError.textContent = "";
    passError.className = "";
  }

  if (password.value === confirmPassword.value) {
    confirmPasswordError.textContent = "";
    confirmPasswordError.className = "";
  }
});

country.addEventListener("input", (e) => {
  if (country.validity.tooShort) {
    countryError.textContent =
      "Shortest country name is 4, so dont tell me you invented a new one";
    countryError.className = "error";
    e.preventDefault();
  } else {
    countryError.textContent = "";
    countryError.className = "";
  }
});

postal.addEventListener("input", (e) => {
  if (postal.validity.tooShort) {
    postalError.textContent = "You postal has a fixed lenght of 6 bro";
    postalError.className = "error";
    e.preventDefault();
  } else {
    postalError.textContent = "";
    postalError.className = "";
  }
});

confirmPassword.addEventListener("input", () => {
  if (password.value !== confirmPassword.value) {
    confirmPasswordError.textContent = "Passwords don't match you dumbass";
    confirmPasswordError.className = "error";
  } else if (confirmPassword.validity.valueMissing) {
    confirmPasswordError.textContent = "AT least try to repeat you bogus";
    confirmPasswordError.className = "error";
  } else {
    confirmPasswordError.textContent = "";
    confirmPasswordError.className = "";
  }
});

form.addEventListener("submit", (e) => {
  if (email.validity.typeMismatch) {
    emailError.textContent = "Hey there enter valid email";
    emailError.className = "error";
    e.preventDefault();
  } else if (email.validity.valueMissing) {
    emailError.textContent = "Add something here";
    emailError.className = "error";
    e.preventDefault();
  } else {
    emailError.textContent = "";
    emailError.className = "";
  }

  if (password.validity.tooShort) {
    passError.textContent =
      "Your password is weak like you. Enter more characters";
    passError.className = "error";
    e.preventDefault();
  } else if (password.validity.valueMissing) {
    passError.textContent = "No password not allowed";
    passError.className = "error";
    e.preventDefault();
  } else {
    passError.textContent = "";
    passError.className = "";
  }

  if (country.validity.tooShort) {
    countryError.textContent =
      "Shortest country name is 4, so dont tell me you invented a new one";
    countryError.className = "error";
    e.preventDefault();
  } else if (country.validity.valueMissing) {
    countryError.textContent = "no country bein shown";
    countryError.className = "error";
    e.preventDefault();
  } else {
    countryError.textContent = "";
    countryError.className = "";
  }

  if (postal.validity.tooShort) {
    postalError.textContent = "You postal has a fixed lenght of 6 bro";
    postalError.className = "error";
    e.preventDefault();
  } else if (postal.validity.valueMissing) {
    postalError.textContent = "give me your address or else!";
    postalError.className = "error";
    e.preventDefault();
  } else {
    postalError.textContent = "";
    postalError.className = "";
  }

  if (password.value !== confirmPassword.value) {
    confirmPasswordError.textContent = "Passwords don't match you dumbass";
    confirmPasswordError.className = "error";
    e.preventDefault();
  } else if (confirmPassword.validity.valueMissing) {
    confirmPasswordError.textContent = "AT least try to repeat you bogus";
    confirmPasswordError.className = "error";
    e.preventDefault();
  } else {
    confirmPasswordError.textContent = "";
    confirmPasswordError.className = "";
  }
});
