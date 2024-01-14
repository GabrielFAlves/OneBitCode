let metro = prompt("Digite o valor em metros: ");
let resultado;

const escolha = parseFloat(prompt("Você quer converter para qual media:\n1: milímetro (mm)\n2: centímetro (cm)\n3: decímetro (dm)\n4: decâmetro (dam)\n5: hectômetro (hm)\n6: quilômetro (km)"));

switch (escolha) {
    case 1:
        resultado = metro * 1000;
        alert("O valor " + metro + " metros, convertido para " + resultado + " mm.");
        break;
    case 2:
        resultado = metro * 100;
        alert("O valor " + metro + " metros, convertido para " + resultado + " cm.");
        break;
    case 3:
        resultado = metro * 10;
        alert("O valor " + metro + " metros, convertido para " + resultado + " dm.");
        break;
    case 4:
        resultado = metro * 0.1;
        alert("O valor " + metro + " metros, convertido para " + resultado + " dam.");
        break;
    case 5:
        resultado = metro * 0.01;
        alert("O valor " + metro + " metros, convertido para " + resultado + " hm.");
        break;
    case 5:
        resultado = metro * 0.001;
        alert("O valor " + metro + " metros, convertido para " + resultado + " km.");
        break;
    default:
        alert("Opção inválida.");
};

