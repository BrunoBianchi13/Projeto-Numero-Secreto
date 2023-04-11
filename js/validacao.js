

function verificaChute(chute){
    const numero = +chute

    if (Number.isNaN(numero)) {
        elemntoChute.innerHTML +='<div>Valor invalidos</div>'
        return
    }

    if (numeroMaioropOuMenor(numero)) {

        elemntoChute.innerHTML +=`<div>Valor invalido: O número  precisa estar entre ${menorValor} e o ${maiorValor}</div>`  
        return
    }

    if (acertou(numeroSecreto,chute)) {

        document.body.innerHTML = `<h2> Parabens!!! Voce acertou o número  secreto!</h2> <h3>O número secreto era ${numeroSecreto}!</h3> <h2 id="jogarNovamente"> Jogar Novamente</h2> `
        
    } else if (chute > numeroSecreto) {
        elemntoChute.innerHTML +=`<div>O número  secreto é menor <i class="fa-solid fa-down-long"></i></div>`  
        
    }else{
        elemntoChute.innerHTML +=`<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`  
    }
}


function numeroMaioropOuMenor(numero){
    return numero > maiorValor || numero < menorValor
}

function acertou(numeroSecreto,chute){
    return numeroSecreto == chute
}

document.body.addEventListener('click', e=>{
    if (e.target.id == 'jogarNovamente') {
        window.location.reload()
    }
})