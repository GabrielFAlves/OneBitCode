const Character = require("./Character")

module.exports = class Thief extends Character {
    atacar (alvo) {
        alvo.pontosVida -= (this.pontosAtaque - alvo.pontosDefesa) * 2
    }
}