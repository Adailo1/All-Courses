//Crie uma função que receba dois arrays e os concatene em um único array.
const concatenaArray = (array1, array2) => {
    return [...array1, ...array2] //spread
}

const listaFrutas = ['Maçã', 'Banana', 'Uva']
const listaComida = ['Arroz', 'Feijão', 'Carne']
const listaCompras = concatenaArray(listaFrutas, listaComida)

console.log(listaCompras)