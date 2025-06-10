const form = document.querySelector("form");

form.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Evento");
  setResultado("Olá mundo");
});

function setResultado(msg) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";
  const p = document.createElement("p");
  p.classList.add("paragrafo__resultado");
  p.innerHTML = "Qualquer coisa";
  resultado.appendChild(p);
}
// 20:11
