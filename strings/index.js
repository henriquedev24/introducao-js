var nomeCompleto = " allAn Arauj o"

function primeiroNome(canela) {
    var a = canela.trim().toLowerCase().substring(0,5) 
    return a.charAt(0).toUpperCase()+a.substring(1)
}

function segundoNome(cachorro) {
    var b = cachorro.trim().substring(6)
    return b.replaceAll(' ', '')
}

console.log(primeiroNome(nomeCompleto))
console.log(segundoNome(nomeCompleto))