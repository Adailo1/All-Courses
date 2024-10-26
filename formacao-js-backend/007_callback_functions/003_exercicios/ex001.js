//Utilize o método forEach para imprimir cada elemento de um array juntamente com seu índice.

const notas = [10, 6, 8, 5.5, 10]
let cont = 0

notas.forEach(nota => {
    console.log(cont, nota)
    cont++
})