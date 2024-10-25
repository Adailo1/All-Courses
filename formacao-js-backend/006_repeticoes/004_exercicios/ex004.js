//Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'.

let listaNumeros = [20, 30, 20, 10, 40, 50, 5]
let minmax = filtraArray(listaNumeros) 

function filtraArray(array){
    let min = 0
    let max = 0
    for (numero of array){
        if (min === 0) min = numero
        if (min >= numero) min = numero
        if (max <= numero) max = numero
    }

    return [min, max]
}

console.log(`O menor número é ${minmax[0]} e o maior número é ${minmax[1]}`)