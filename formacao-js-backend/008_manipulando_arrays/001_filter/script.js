//Use o filter para filtrar em um array de alunos quais ficaram reprovados
const alunos = [['Ana', 7], ['Marcos', 4.5], ['Maria', 8], ['Mauro', 7.5], ['Ruan', 6.5]]

const reprovados = alunos.filter(aluno => {
    if (aluno[1] < 7) return aluno     
})

console.log(reprovados)