function verificaValorValido(chute){
    const numero = +chute // número inteiro

    if(naoEUmNumero(numero)){
        exibeChute.innerHTML += `<div class="erro">não é um número</div>`
    }

    if(valorMaioEMenor(numero)){
        exibeChute.innerHTML += `<div class="erro">o numero secreto tem que ser maior que ${menorNumero} e menor que ${maiorNumero}</div>`
    }

    if (numero === numeroSecreto) {
       document.body.innerHTML = `
        <h1>Você acertou o número secreto era ${numeroSecreto}!</h1>
        <button id="relod" class="bnt-relod">jogar novamente</button>
       `
    }else if(numero > numeroSecreto){
        exibeChute.innerHTML += `
            <div class = "mior-menor">O número secreto é menor</div>
        `
    }else{
        exibeChute.innerHTML += `
            <div class = "mior-menor">O número secreto é maior</div>
        `
    }
 
}

function naoEUmNumero(numero) {
    return Number.isNaN(numero)
}

function valorMaioEMenor(numero){
    return numero < menorNumero || numero > maiorNumero
}

document.body.addEventListener('click', e=>{
    if(e.target.id == "relod" ){
        window.location.reload()
    }
})