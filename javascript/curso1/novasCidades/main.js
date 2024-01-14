const nomeTurista = prompt("Digite seu nome: ");

let visitou = prompt("Já visitou algum a cidade? s/n")

let contadorCidades = 0;
let nomeCidade = [];

while (visitou === "s") {
    nomeCidade.push(prompt("Qual o nome da cidade que você visitou? "));
    contadorCidades++;
    visitou = prompt("Já visitou algum a cidade? s/n");
};

alert(nomeTurista + " visitou " + contadorCidades + " o nome delas é: " + nomeCidade);