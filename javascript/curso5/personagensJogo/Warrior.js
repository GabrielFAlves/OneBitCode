const Character = require("./Character")

module.exports = class Warrior extends Character {
    constructor (pontosEscudo, nome, pontosVida, pontosAtaque, pontosDefesa) {
        super(nome, pontosVida, pontosAtaque, pontosDefesa)
        this.pontosEscudo = pontosEscudo
        this.posicao = "ataque"
    }
    atacar (alvo, posicao) {
        if (posicao === "ataque") {
            super.atacar(alvo)
        }
    }
    mudarPosicao () {
        if (this.posicao === "ataque") {
            this.posicao = "defesa"
            this.pontosDefesa += this.pontosEscudo
        } else {
            this.posicao = "ataque"
            this.pontosDefesa -= this.pontosEscudo
        }
    }
}