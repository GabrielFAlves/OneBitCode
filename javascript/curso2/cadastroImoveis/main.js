let imoveisCadastrados = [];
let menu = "";

do{

    menu = parseInt(prompt("O programa tem: " + imoveisCadastrados.length + " imóves cadastrados.\n1: Salvar um novo imóvel.\n2: Mostrar imóveis salvos.\n3: Sair."));

    switch (menu) {
        case 1:
            // imovel é um objeto
            const imovel = {};
            imovel.proprietario = prompt("Digite o nome do proprietario: ");
            imovel.quartos = prompt("Digite a quantidade de quartos: ");
            imovel.banheiros = prompt("Digite a quantidade de banheiros: ");
            imovel.garagem = prompt("Possui garagem? s/n");

            imoveisCadastrados.push(imovel);
            break;

        case 2:
            for(let i = 0; i < imoveisCadastrados.length; i++) {
                alert("Imóvel: " + (i + 1) + 
                "\nProprietário: " + imoveisCadastrados[i].proprietario +
                "\nQuartos: " + imoveisCadastrados[i].quartos + 
                "\nBanheiros: " + imoveisCadastrados[i].banheiros + 
                "\nGaragem: " + imoveisCadastrados[i].garagem
                );
            };
            break;
        
        case 3:
            alert("Saindo do programa. Até mais!");
            break;
        
        default:
            alert("Opção inválida, tente novamente!");
            break;
    };

} while (menu !== 3);