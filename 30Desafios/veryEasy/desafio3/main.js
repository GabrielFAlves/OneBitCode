// Linguagem Limitada

function reverse (arr) {
    const novoArr = []

    for (let i = 0; i < arr.length; i++) {
        novoArr[i] = arr[arr.length - i -1] 
    }
    return novoArr
}

console.log(reverse([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))
console.log(reverse([0, 1, 2, 3, 4, 5, 6, 7, 8]))