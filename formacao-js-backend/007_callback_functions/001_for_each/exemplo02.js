//Adicionar um ponto extra em cada nota do aluno (Caso a nota não seja 10), e mostrar na tela a média do aluno

const notas = [10, 6.5, 8, 7.5]
let soma = 0

const novasNotas = notas.map(nota => nota < 9 ? nota + 1 : 10)  

novasNotas.forEach(nota => {
    soma += nota
})

const media = soma / novasNotas.length

console.log(`A média do aluno após a adição de 1 ponto em cada nota é de: ${media}`, novasNotas)