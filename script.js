let contador = 0;
let numero = document.getElementById("numero");

function sumar() {
  contador = contador + 1;
  numero.textContent = contador;
}

function restar() {
  contador = contador - 1;
  numero.textContent = contador;
}

function reiniciar() {
  contador = 0;
  numero.textContent = contador;
}
