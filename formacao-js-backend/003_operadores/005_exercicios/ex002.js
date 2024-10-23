//Crie uma variável numérica com um valor. Utilize um operador ternário para verificar se esse valor é par ou ímpar. Exiba o resultado no console.
let num = Math.random() * 100
num = Math.floor(num) 

console.log(`O número sorteado foi: ${num}`)
console.log(num % 2 == 0 ? "É par" : "É impar")