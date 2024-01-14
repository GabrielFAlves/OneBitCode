const nomeAtacante = prompt("Digite o nome do personagem atacante: ");
const poderAtaq = parseFloat(prompt("Digite quanto poder de ataque o atacante tem: "));
const nomeDefensor = prompt("Digite o nome do personagem defensor: ");
let pontoVida =  parseFloat(prompt("Digite a quantidade de pontos de vida do personagem defensor: "));
const poderDefesa = parseFloat(prompt("Digite quanto poder de defesa o defensor tem: "));
const escudo = prompt("Ele tem escudo? s/n");

let dano = 0;

if (poderAtaq > poderDefesa && escudo === "n") {
    dano = poderAtaq - poderDefesa;
} else if (poderAtaq > poderDefesa && escudo === "s") {
    dano = (poderAtaq - poderDefesa) / 2;
} else {
    dano = 0;
};

pontoVida -= dano;

alert(nomeAtacante + " causou " + dano + " pontos de dano em " + nomeDefensor);
alert(
    nomeAtacante + "\nPoder de ataque: " + poderAtaq + "\n\n" +
    nomeDefensor + "\nPontos de vida: " + pontoVida +
    "\nPoder de defesa: " + poderDefesa + "\nPossui escudo: " + escudo
  )