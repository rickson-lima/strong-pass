import emptyFields from './Utils/emptyFields.js'
import invalidEmail from './Utils/invalidEmail.js'
import invalidPassword from './Utils/invalidPassword.js'
import loginError from './Utils/loginError.js'
import registeredEmail from './Utils/registeredEmail.js'

const disclaimerEl = document.querySelector('span[class="disclaimer"]');

const checkError = json => {
  const msg = json.mensagem

  if (msg.includes("Parametro ausente")) {
    emptyFields(disclaimerEl);
  } else if (msg === "E-mail invalido") {
    invalidEmail(disclaimerEl);
  } else if (msg === "Senha fora do padrão") {
    invalidPassword(disclaimerEl, json.resultado);
  } else if (msg === "O e-mail do usuário já esta cadastrado") {
    registeredEmail(disclaimerEl, msg)
  } else {
    loginError(disclaimerEl, msg)
  }
}

export const getResponseObj = json => checkError(json)