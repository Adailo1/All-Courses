//Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos dos arrays fornecidos, utilizando Spread Operator.

function juntaArray(...arrays){ //Spread operator
    return arrays
}

let novoArray = juntaArray([1, 2, 3], ['Mateus', 'Marcos', 'Lucas', 'João'], [150, 31,28, 7, 12])

console.log(novoArray)