//Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.

const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14]
let soma = 0
for (let i = 0; i < numeros.length ; i++){
    soma += numeros[i]
}

let media = soma / numeros.length

console.log(media)