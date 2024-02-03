const Character = require("./Character")

module.exports = class Mage extends Character {
    constructor (pontosMagia) {
        super(name, pontosVida, pontosAtaque, pontosDefesa)
        this.pontosMagia = pontosMagia
    }
    atacar (alvo) {
        alvo.pontosVida -= (this.pontosAtaque + this.pontosMagia) - alvo.pontosDefesa
    }
    curar (alvo) {
        alvo.pontosVida += this.pontosMagia * 2
    }
}