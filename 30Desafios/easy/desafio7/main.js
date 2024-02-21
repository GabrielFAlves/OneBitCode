function organize (arr) {
    const newArr = []

    arr.foreach( list => {
        newArr.push(...list)
    })

    return newArr.sort((a, b) => a - b)
}