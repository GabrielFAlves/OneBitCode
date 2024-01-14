// Ajudando a Academia

function avarege (...numbers) {
    const sum = numbers.reduce((acumulado, num) => acumulado + num, 0)

    return sum / numbers.length
}

console.log(avarege(10, 5, 9, 8))