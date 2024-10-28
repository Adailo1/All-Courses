/*
Crie um objeto chamado calculadora que terá os seguintes métodos:

soma: uma função que aceita dois parâmetros e retorna a soma deles.
subtracao: uma função que aceita dois parâmetros e retorna a subtração do segundo parâmetro do primeiro.
multiplicacao: uma função que aceita dois parâmetros e retorna o resultado da multiplicação deles.
divisao: uma função que aceita dois parâmetros e retorna o resultado da divisão do primeiro pelo segundo. Certifique-se de tratar a divisão por zero, retornando uma mensagem apropriada nesse caso.
a) Chame cada função dentro do objeto calculadora passando valores como argumentos e imprima no console os resultados obtidos.

b) Adicione um novo método chamado calcularMedia ao objeto calculadora. Esta função deve aceitar um array de números como parâmetro e retornar a média aritmética dos valores.

c) Chame a função calcularMedia passando um array de números e imprima no console o resultado obtido.
*/

const calculadora = {
    soma(n1, n2){
        return n1 + n2
    },

    subtracao(n1, n2){
        return n2 - n1
    },

    multiplicacao(n1, n2){
        return n1 * n2
    },

    divisao(n1, n2){
        if (n2 !== 0) return n1/n2
        if (n2 === 0) return 'Não existe divisão por 0'
    },
    
    calcularMedia(notas){
        let soma = 0
        notas.forEach(element => {
            soma += element
        })
        return (soma / notas.length).toFixed(2)
    }
}

console.log(calculadora.soma(5, 2)) //7

console.log(calculadora.subtracao(5, 10)) //5

console.log(calculadora.multiplicacao(3, 4)) //12

console.log(calculadora.divisao(10, 5)) //2
console.log(calculadora.divisao(5, 0)) //Não existe divisão por 0

console.log(calculadora.calcularMedia([10, 15, 20, 3, 10, 25, 30])) //16,14