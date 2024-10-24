const calculaMedia = (notas) => {
    let soma = 0
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i]
    }
    return (soma / notas.length).toFixed(2) 
}

const notas = [10, 6, 8, 5.5, 10]
console.log(notas)
notas.pop() //Apaga último dado do arrayw 
const media = calculaMedia(notas)
console.log(`Notas do aluno: ${notas} | Média do aluno: ${media}`)