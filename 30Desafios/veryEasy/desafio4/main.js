// Cálculos de Viagens Espaciais

function square (num) {
    // split('') separa uma string em um array // join('') transforma array em string
    const digitArray = num.toString().split('')
    const squaredArray = digitArray.map(digit => Number(digit) ** 2).join('')
    return Number(squaredArray)
}

console.log(square(765))