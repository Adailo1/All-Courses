//Crie um array de números chamado valores. Depois,escreva um programa que some todos os elementos deste array utilizando o método reduce.

const valores = [10, 20, 30, 40, 50]

const soma = valores.reduce((cont, valor) => {
    return cont + valor
})

console.log(soma)