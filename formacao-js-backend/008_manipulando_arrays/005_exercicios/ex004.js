//Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.

function separaPar(lista){
    return lista.filter(valor => {
        if (valor % 2 == 0) return valor
    })
}

const valores = [10, 24, 30, 41, 50, 29, 8, 15, 18, 17]

const valoresPar = separaPar(valores)

console.log(valoresPar)