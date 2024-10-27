//Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.

function filtraArray(array){
    return array.filter(valor => {
        if (valor % 3 == 0 && valor > 5) return valor
    })
}

const valores = [3, 6, 9, 10, 24, 30, 41, 50, 29, 8, 15, 18, 17]
const valoresFiltrados = filtraArray(valores)

console.log(valoresFiltrados)