const menorValor = 1
const maiorValor = 100

const numeroSecreto = gerarNuemro()

function gerarNuemro(){
    return parseInt(Math.random() * maiorValor + 1)
}


console.log(numeroSecreto)

const eleMenor = document.getElementById('menor-valor')
eleMenor.innerHTML = menorValor

const eleMaior = document.getElementById('maior-valor')
eleMaior.innerHTML = maiorValor