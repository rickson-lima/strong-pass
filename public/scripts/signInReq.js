// Este script envia os dados dos campos do formulário de LOGIN para a FetchAPI

import FetchAPI from "./fetchAPI.js";

const _url = "user/signIn";

const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");

const submitButton = document.querySelector("form button");

submitButton.addEventListener("click", loginRequest);

function loginRequest() {
  const email = emailElement.value;
  const senha = passwordElement.value;

  FetchAPI(_url, { email, senha });
}
