function convertName (fullname) {
    const nameSplit = fullname.split(" ")

    nameSplit.pop()

    const noLastName = nameSplit.join(" ")

    return noLastName
}

console.log(convertName("Gabriel Firmamento Alves"))