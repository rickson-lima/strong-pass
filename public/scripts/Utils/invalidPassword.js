export default function invalidPassword(el, results) {
  if (el.value != "") el.innerHTML = "";

  const iconsList = document.querySelectorAll("li > i");

  // percorrer a lista de elementos
  iconsList.forEach((icon) => {
    // pegar o valor do atributo data-key do elemento
    const key = icon.getAttribute("data-key");

    // pegar o objeto do array de resultados correspondente a chave passada
    const obj = results.find((k) => k.funcao === key);

    const status = obj.status;

    // mudar o íconde de acordo com o resultado
    status === "valido"
      ? (icon.className = "fa-check")
      : (icon.className = "fa-times");

    // adicionar classe padrão do font awesome
    icon.classList.add("fas");
  });

  document.getElementById("password").focus();
}
