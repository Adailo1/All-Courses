//Cálculo de média
const geraNota = () => {
    let nota = Math.random() * 11
    return Math.floor(nota)
}

const calculaMedia = (notas) => {
    let soma = 0
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i]
    }
    return (soma / notas.length).toFixed(2) 
}

const notas = [geraNota(), geraNota(), geraNota(), geraNota()]
const media = calculaMedia(notas)
console.log(`Notas: ${notas}, Média das provas: ${media}`) 