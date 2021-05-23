// todo: Next function must return true or false
function findWord(phrase, word) {
    return phrase.indexOf(word) >= 0
}
function countLastWordLength(phrase) {
    let fraseSeparada = phrase.split(" ")
    return fraseSeparada[fraseSeparada.length -1].length
}

function replaceLastWord(phrase, word) {
    let fraseSeparada = phrase.split(" ")
    fraseSeparada[fraseSeparada.length-1] = word
    return fraseSeparada.join(" ")
}

function sumAges(firstUserPhrase, SecondUserPhrase, ThirdUserPhrase) {

    // get first age
    let number1 = Number(getAges(firstUserPhrase))
    let number2 = Number(getAges(SecondUserPhrase))
    let number3 = Number(getAges(ThirdUserPhrase))
    return number1 + number2 + number3
}

function getAges(user){
    let texto = user.split(" ")
    return texto[texto.length - 2]
}

function arraySumValues(array) {
    let suma = 0
    for (let i = 0; i < array.length; i++){
        suma += array[i]
    }
    return suma
}
function populateArray(number, limit) {
    const resultado = []
    let iterador = number
    for (let i = 2; iterador * i < limit; i++){
        resultado.push(iterador * i)
    }
    return resultado
}

function getEmail(user) {
    return user.email
}

function findMiddleNumber(array) {
    if(array.length % 2 === 1){
        return array[Math.floor(array.length/2)]
    }
    return array.slice(array.length/2 -1, array.length/2 + 1)
}

// todo: replace this with an actual task
function getEmails(users) {
    const emails = []
    for (let i = 0; i < users.length; i++){
        emails.push(users[i].email)
    }
    return emails
}
