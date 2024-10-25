//Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.

let listaNumeros = [20, 30, 20, 10, 40, 50]

function somaArray(array){
    let soma = 0
    for (numero of array){
        soma += numero
    }
    return soma
}

console.log(somaArray(listaNumeros))