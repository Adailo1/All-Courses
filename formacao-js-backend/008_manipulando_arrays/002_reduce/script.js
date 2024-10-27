//Some as médias de cada sala

const salaJS = [7, 8, 8, 7, 10, 6.5, 10, 4, 10, 7]
const salaJava = [6, 5, 8, 9, 5, 6]
const salaPython = [7, 3.5, 8, 9.5]

let mediaJS = salaJS.reduce((acumulador, nota) => {
    return acumulador + nota
}, 0)
mediaJS = mediaJS / salaJS.length

let mediaJava = salaJava.reduce((acumulador, nota) => {
    return acumulador + nota
}, 0)
mediaJava = mediaJava / salaJava.length

let mediaPython = salaPython.reduce((acumulador, nota) => {
    return acumulador + nota
}, 0)
mediaPython = mediaPython / salaPython.length

console.log("Média JS:", mediaJS)
console.log("Média Java:", mediaJava)
console.log("Média Python:", mediaPython)
