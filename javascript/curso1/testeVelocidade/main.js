const veiculo1 = prompt("Digite a velocidade do primeiro veiculo: ");
const veiculo2 = prompt("Digite a velocidade do segundo veiculo: ");

const velo1 = parseFloat(veiculo1);
const velo2 = parseFloat(veiculo2);

if (velo1 > velo2) {
    alert("O primeiro veículo é mais rápido.");
} else if (velo1 == velo2) {
    alert("Os dois veículos estão na mesma velocidade.");
} else {
    alert("O segundo veículo é mais rápudo.");
};
