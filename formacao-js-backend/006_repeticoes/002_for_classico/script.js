const notas = [10, 6.5, 8, 7.5]

const media = () => {
    let soma = 0
    for (let i = 0; i < notas.length ; i++){
        soma += notas[i]
    }

    return soma / notas.length 
}

console.log(`A média das notas ${notas} é ${media()}`)