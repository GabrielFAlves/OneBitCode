let listaEspera = ["Gabriel", "Paulo", "Guilherme"];

do {

    let mensagem = "Lista de espera:\n";
    for (let i = 0; i < listaEspera.length; i++) {
        mensagem += listaEspera[i] + "\n";
    }
    
    alert(mensagem);
    
    const menu = parseInt(prompt("Opções:\n1: Novo Paciente\n2: Consultar Paciente\n3: Sair"));

    switch(menu) {
        case 1:
            let novoPaciente = prompt("Digite o nome do novo Paciente: ");
            listaEspera.push(novoPaciente);
            break;
        case 2:
            let consultarPaciente = listaEspera.shift();
            alert(consultarPaciente);
            break;
        case 3:
            alert("Saindo do programa. Até mais!");
            break;
        default:
            alert("Opção inválida. Tente novamente.");
            break;
    }
} while (menu !== 3);
    