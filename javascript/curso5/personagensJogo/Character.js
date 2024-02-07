module.exports = class Character {
    constructor (nome, pontosVida, pontosAtaque, pontosDefesa) {
        this.nome = nome
        this.pontosVida = pontosVida
        this.pontosAtaque = pontosAtaque
        this.pontosDefesa = pontosDefesa
    }
    atacar (alvo) {
        alvo.pontosVida -= this.pontosAtaque - alvo.pontosDefesa
    }
}