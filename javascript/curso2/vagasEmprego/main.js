let vagas = [];

function exibirMenu () {
    return parseInt(prompt("Escolha a sua opção:\n1: Listar vagas disponíveis\n2: Criar um nova vaga\n3: Visualizar uma vaga\n4: Inscrever um candidato em uma vaga\n5: Excluir uma vaga\n6: Sair"))
};

function listarVagas() {
    const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
        textoFinal += indice + ". "
        textoFinal += vaga.nome
        textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
        return textoFinal
    }, "")
  
    alert(vagasEmTexto);
  };

function criarVaga () {
    const nome = prompt("Digite o nome da vaga: ");
    const descricao = prompt("Digite a descrição da vaga: ");
    const dataLimite = prompt("Data limite para inscrição: ");

    let confirmar = confirm("Deseja criar uma nova vaga com essas informações?\n" +
    "Nome: " + nome + "\nDescrição: " + descricao + "\nData limite: " + dataLimite);

    if (confirmar) {
        const novaVaga = { nome, descricao, dataLimite, candidatos: [] };
        vagas.push(novaVaga);
        alert("Vaga criada.");
    };
};

function exibirVaga () {
    const indice = prompt("Digite o indice da vaga: ");
    const vaga = vagas[indice];
    const candidatosEmTexto = vaga.candidatos.reduce((textoFinal, candidato) => textoFinal + "\n - " + candidato, "");

    alert(
        "Vaga nº " + indice +
        "\nNome: " + vaga.nome +
        "\nDescrição: " + vaga.descricao +
        "\nData limite: " + vaga.dataLimite +
        "\nQuantidade de candidatos: " + vaga.candidatos.length +
        "\nCandidatos inscritos: " + candidatosEmTexto
    );
};

function inscreverCandidato () {
    const candidato = prompt("Informe o nome do(a) candidato(a):");
    const indice = prompt("Informe o índice da vaga para a qual o(a) candidato(a) deseja se inscrever:");
    const vaga = vagas[indice];

    const confirmar = confirm(
        "Deseja inscrever o candidato " + candidato + " na vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
    );

    if (confirmar) {
        vaga.candidato.push(candidato);
        alert("Incrição realizada.");
    };
};

function excluirVaga () {
    const indice = prompt("Digite o íncide da vaga que quer excluir: ");
    const vaga = vagas[indice];

    const confirmar = confirm(
        "Deseja excluir a vaga " + indice + " ?\n" + 
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
    );

    if (confirmar) {
        vaga.splice(indice, 1);
        alert("Vaga excluida.");
    };
};

function executar () {
    let menu = "";

    do {
        menu = exibirMenu();

        switch (menu) {
            case 1:
                listarVagas();
                break;
            case 2:
                criarVaga();
                break;
            case 3:
                exibirVaga();
                break;
            case 4:
                inscreverCandidato();
                break;
            case 5:
                excluirVaga();
                break;
            case 6:
                alert("Saindo...");
                break;
            default:
                alert("Opção não existe!");
                break;
        };
    } while (menu !== 6);
};

executar();