let baralho = [
    'Ás de Espadas', '2 de Espadas', '3 de Espadas', '4 de Espadas', '5 de Espadas',
    '6 de Espadas', '7 de Espadas', '8 de Espadas', '9 de Espadas', '10 de Espadas',
    'Valete de Espadas', 'Dama de Espadas', 'Rei de Espadas',

    'Ás de Copas', '2 de Copas', '3 de Copas', '4 de Copas', '5 de Copas',
    '6 de Copas', '7 de Copas', '8 de Copas', '9 de Copas', '10 de Copas',
    'Valete de Copas', 'Dama de Copas', 'Rei de Copas',

    'Ás de Ouros', '2 de Ouros', '3 de Ouros', '4 de Ouros', '5 de Ouros',
    '6 de Ouros', '7 de Ouros', '8 de Ouros', '9 de Ouros', '10 de Ouros',
    'Valete de Ouros', 'Dama de Ouros', 'Rei de Ouros',

    'Ás de Paus', '2 de Paus', '3 de Paus', '4 de Paus', '5 de Paus',
    '6 de Paus', '7 de Paus', '8 de Paus', '9 de Paus', '10 de Paus',
    'Valete de Paus', 'Dama de Paus', 'Rei de Paus'
];

while (true) {

    const menu = parseInt(prompt("Escolha uma das opções:\n1: Adicionar uma carta\n2: Puxar uma carta\n3: Sair"));

    switch (menu) {
        case 1:
            let novaCarta = prompt("Digite o nome carta que deseja adicionar: ");
            baralho.unshift(novaCarta);
            break;
        case 2:
            alert("Você puxou: " + baralho.shift());
            break;
        case 3:
            alert("Saindo do programa. Até mais!");
            break;
    }

    if (menu === 3) {
        break;
    }
}