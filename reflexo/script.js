let podeClicar = false;
let pontuacaoJogador1 = 0;
let pontuacaoJogador2 = 0;
let temporizador = null;

const tela = document.getElementById("tela");

const mensagem = document.getElementById("mensagem");
const textoPontuacaoJogador1 = document.getElementById("placar1");
const textoPontuacaoJogador2 = document.getElementById("placar2");
const botaoIniciar = document.getElementById("iniciar");

const botaoJogador1 = document.getElementById("jogador1");
const botaoJogador2 = document.getElementById("jogador2");

botaoIniciar.addEventListener("click", iniciarJogo);
botaoJogador1.addEventListener("click", cliqueJogador1);
botaoJogador2.addEventListener("click", cliqueJogador2);

function iniciarJogo() {
  
  tela.classList.remove("verde", "vermelho");
  tela.classList.add("cinza");
  mensagem.textContent = "Aguardando mudança de cor...";
  podeClicar = false;

  const tempoAleatorio = Math.floor(Math.random() * 3000) + 2000;

  
  temporizador = setTimeout(() => {
    tela.classList.remove("cinza");
    tela.classList.add("verde");
    mensagem.textContent = "CLIQUE AGORA!";
    podeClicar = true;
  }, tempoAleatorio);
}

function cliqueJogador1() {
  if (podeClicar) {
    pontuacaoJogador1++;
    textoPontuacaoJogador1.textContent = pontuacaoJogador1;
    finalizarRodada("Jogador 1");
  }
}

function cliqueJogador2() {
  if (podeClicar) {
    pontuacaoJogador2++;
    textoPontuacaoJogador2.textContent = pontuacaoJogador2;
    finalizarRodada("Jogador 2");
  }
}

function finalizarRodada(vencedor) {
  clearTimeout(temporizador);
  podeClicar = false;
  mensagem.textContent = `${vencedor} venceu!`;
  tela.classList.remove("cinza", "verde");
  tela.classList.add("vermelho");
}
