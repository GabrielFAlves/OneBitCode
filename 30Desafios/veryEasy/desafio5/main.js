function maiorLetra (str) {
    // toLowerCase() transforma todas as letras em minuscula
    const lowerCaseString = str.toLowerCase()
    // separar uma string em um array
    const lerttersArray = lowerCaseString.split('')
    // ordenar esse array
    const sortedArray = lerttersArray.sort()
    return sortedArray[sortedArray,length - 1]
}