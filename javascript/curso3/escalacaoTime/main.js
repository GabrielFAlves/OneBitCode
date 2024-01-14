function addJogador () {
    const posicao = document.getElementById('posicao').value
    const nome = document.getElementById('nome').value
    const camisa = document.getElementById('camisa').value

    const confirmacao = confirm("Escalar " + nome + " como " + posicao + " ?")

    if (confirmacao) {
        const listaTime = document.getElementById('listaTime')
        const jogador = document.createElement('li')
        jogador.id = "jogador-" + camisa
        jogador.innerText = posicao + ": " + nome + " (" + camisa + ")"
        listaTime.appendChild(jogador)

        document.getElementById("posicao").value = ""
        document.getElementById("nome").value = ""
        document.getElementById("camisa").value = ""
    }
}

function removerJogador () {
    const number = document.getElementById("numberToRemove").value
    const playerToRemove = document.getElementById("jogador-" + number)

    const confirmation = confirm("Remover o jogador " + playerToRemove.innerText + "?")

    if (confirmation) {
        document.getElementById("listaTime").removeChild(playerToRemove)
        document.getElementById("numberToRemove").value = ""
    }
}