import * as Alerts from "./alerts.js";

// Função que faz a requisição de login e de cadastro
export default function FetchAPI(url = "", data = {}) {
  fetch(url, {
    method: "post",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then(function (res) {
      if (res.status === 200) {
        alert("Autendicado com sucesso!");
        resetForm()
        return;
      }
      else if (res.status === 201) {
        alert("Cadastrado com sucesso!");
        resetForm()
        window.location.href = "/entrar";
        return;
      }
      else
        res.json().then((json) => Alerts.getResponseObj(json))

    })
    .catch((err) => console.log("Erro na requisição: " + err));
}

function resetForm() {
  const form = document.querySelector('form')
  form.reset()
  
  return
}