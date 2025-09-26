let estado = 0;

function mudarCor() {
  const vermelho = document.getElementById("vermelho");
  const amarelo = document.getElementById("amarelo");
  const verde = document.getElementById("verde");

  
  vermelho.classList.remove("acesa");
  amarelo.classList.remove("acesa");
  verde.classList.remove("acesa");

  
  if (estado === 0) {
    vermelho.classList.add("acesa");
    estado = 1;
  } else if (estado === 1) {
    amarelo.classList.add("acesa");
    estado = 2;
  } else {
    verde.classList.add("acesa");
    estado = 0;
  }
}
