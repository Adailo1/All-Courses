//Crie uma função que receba a idade de uma pessoa e retorne se ela é maior de idade (idade >= 18). Imprima o resultado no console.
const verificaIdade = (idade) => idade >= 18

let idade = (Math.random() * 100)
idade = Math.floor(idade)
console.log(idade)
console.log(verificaIdade(idade) ? "Maior de idade" : "Menor de idade")