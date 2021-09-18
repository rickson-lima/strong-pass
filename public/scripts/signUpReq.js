// Este script envia os dados dos campos do formulário de CADASTRO para a FetchAPI

import FetchAPI from "./fetchAPI.js";

const _url = "user/signUp";

const nameElement = document.getElementById("name");
const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");

const submitButton = document.querySelector("form button");

submitButton.addEventListener("click", singupRequest);

function singupRequest() {
  const nome = nameElement.value;
  const email = emailElement.value;
  const senha = passwordElement.value;

  FetchAPI(_url, { nome, email, senha });
}
