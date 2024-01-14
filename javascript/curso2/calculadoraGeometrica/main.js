function calculoAreaTriangulo () {
    const base = parseFloat(prompt("Digite o valor da base do triângulo: "));
    const altura = parseFloat(prompt("Digite o valor da altura do triângulo: "));
    return (base * altura) / 2;
};

function calculoAreaRetangulo () {
    const base = parseFloat(prompt("Digite o valor da base do retângulo: "));
    const altura = parseFloat(prompt("Digite o valor da altura do retângulo: "));
    return (base * altura);
};

function calculoAreaQuadrado () {
    const base = parseFloat(prompt("Digite o valor da base do quadrado: "));
    return (base * base);
};

function calculoAreaTrapezio () {
    const baseMaior = parseFloat(prompt("Digite o valor da base maior do trapézio: "));
    const baseMenor = parseFloat(prompt("Digite o valor da base menor do trapézio: "));
    const altura = parseFloat(prompt("Digite o valor da altura do trapézio: "));
    return ((baseMaior + baseMenor) * (altura / 2));
};

function calculoAreaCirculo () {
    const pi = 3.14;
    const raio = parseFloat(prompt("Digite o valor do raio: "));
    return (pi * (raio * raio));
};

function exibirMenu() {
    return parseInt(prompt("Digite qual área você quer calcular:\n1: Área do Triângulo.\n2: Área do Retângulo.\n3: Área do Quadrado.\n4: Área do Trapézio.\n5: Área do Círculo.\n6: Sair."));
};

function executar() {
    let menu = "";

    do {

        menu = exibirMenu()
        let resultado

        switch (menu) {
            case 1:
                resultado = calculoAreaTriangulo();
                break;
            case 2:
                resultado = calculoAreaRetangulo();
                break;
            case 3:
                resultado = calculoAreaQuadrado();
                break;
            case 4:
                resultado = calculoAreaTrapezio();
                break;
            case 5:
                resultado = calculoAreaCirculo();
                break;
            case 6:
                alert("Saindo...");
                break;
            default:
                alert("Opção não existe.");
                break;
            };

            if (resultado) {
                alert("O resultado é: " + resultado);
            };

    } while (menu !== 6);
};

executar();
