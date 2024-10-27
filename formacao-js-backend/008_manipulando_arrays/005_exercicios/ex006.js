//Crie uma função que receba um array de números e retorne a soma de todos os elementos.

function somaArray(array){
    return array.reduce((cont, valor) => {
        return cont + valor
    })
}

const valores = [3, 6, 9, 10, 24, 30, 41, 50, 29, 8, 15, 18, 17]
const valoresSomados = somaArray(valores)

console.log(valoresSomados)