const botao = document.getElementById("botao");

function exubirAlerta() {
    const nome = document.getElementById("nome").value;
    const sobrenome = document.getElementById("sobrenome").value;
    const campo = document.getElementById("campo").value;
    const anoNascimento = document.getElementById("anoNascimento").value;

    const nomeCompleto = nome + " " + sobrenome;

    const idade = calcularIdade(parseInt(anoNascimento, 10));

    alert(
        'Nome Completo: ' + nomeCompleto + '\n' +
        'Campo de Estudo: ' + campo + '\n' +
        'Idade: ' + idade + ' anos'
    );
}

function calcularIdade(anoNascimento) {
    const anoAtual = new Date().getFullYear();
    return anoAtual - anoNascimento;
}

botao.addEventListener("click", exubirAlerta);