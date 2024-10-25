const notas = [10, 6.5, 8, 7.5]

const media = function(){
    let soma = 0
    for (nota of notas){
        soma += nota
    }

    return soma / notas.length 
}

console.log(`A média das notas ${notas} é ${media()}`)