// Você recebeu um array numeros contendo valores numéricos. Crie um programa que verifique se um número específico está presente nesse array. Se estiver, o programa deve retornar a posição (índice) desse número. Caso contrário, se o número não estiver presente, o programa deve retornar "-1".

const notas = [10, 6, 9, 8, 10]
const especifico = 9
let verifica = 0

notas.forEach(numero => {
    if (numero === especifico){
        verifica = notas.indexOf(especifico)
    } else if (verifica !== notas.indexOf(especifico)) {
        verifica = -1
    }
})

console.log(verifica)