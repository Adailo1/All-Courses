//Crie 3 variáveis de tipos diferentes, utilize template strings para combinar os diferentes tipos de dados (number, string, boolean) em uma única string e exiba o resultado no console.

const userName = 'Adailo'
const userAge = 21
const isDev = true

console.log(`Name: ${userName}, Age: ${userAge}, ${isDev ? 'User is a Developer' : "User isn't a Developer"}`)