module.exports = class Character {
    constructor (name, pontosVida, pontosAtaque, pontosDefesa) {
        this.name = name
        this.pontosVida = pontosVida
        this.pontosAtaque = pontosAtaque
        this.pontosDefesa = pontosDefesa
    }
    atacar (alvo) {
        alvo.pontosVida -= this.pontosAtaque - alvo.pontosDefesa
    }
}