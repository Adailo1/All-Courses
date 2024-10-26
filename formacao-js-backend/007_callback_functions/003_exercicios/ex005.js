//Utilize o método forEach() para multiplicar cada elemento do array por 3 e exibir no console o resultado de cada multiplicação. Depois, utilize o método findIndex() para encontrar o índice do número 18 no array original.

const numeros = [6, 9, 12, 15, 18, 21]
const newNumeros = []

numeros.forEach(num => {
    newNumeros.push(num * 3)
    console.log(num)
})

numeros.findIndex(num => {
    if (num === 18) console.log("Index:", numeros.indexOf(18))
})