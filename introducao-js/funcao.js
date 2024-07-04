var conteudo = 'x'
funcaoQueImprime(conteudo)

function queSoma10EImprime(valor){
    console.log(valor+10)
}

function funcaoQueImprime(conteudo){
    console.log(conteudo)
    queNaoFazNada()
    queSoma10EImprime(30)
}

function queNaoFazNada(){
    queSoma10EImprime(-1)
}

