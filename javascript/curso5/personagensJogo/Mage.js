const Character = require("./Character")

module.exports = class Mage extends Character {
    constructor (pontosMagia, nome, pontosVida, pontosAtaque, pontosDefesa) {
        super(nome, pontosVida, pontosAtaque, pontosDefesa)
        this.pontosMagia = pontosMagia
    }
    atacar (alvo) {
        alvo.pontosVida -= (this.pontosAtaque + this.pontosMagia) - alvo.pontosDefesa
    }
    curar (alvo) {
        alvo.pontosVida += this.pontosMagia * 2
    }
}