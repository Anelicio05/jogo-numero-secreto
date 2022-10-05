const menorValor = document.getElementById('menor-valor')
const maiorValor = document.getElementById('maior-valor')

const menorNumero = 1
const maiorNumero = 100

menorValor.innerHTML = menorNumero
maiorValor.innerHTML = maiorNumero

const numeroSecreto = geraNumero()
   
function geraNumero(){
   return parseInt(Math.random() * maiorNumero + 1)
}

console.log(numeroSecreto)