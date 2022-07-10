import { login } from "./auth_manager.js";

const form = document.getElementById("form-account-login");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const values = {
    Email: email.value,
    Password: password.value,
  };
  console.log(values);
  login(values);
});
