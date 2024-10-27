//Tire dados repetitivos de uma lista de alunos

const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"]

const nomesAtualizados = new Set(nomes)
const nomesArray = [...nomesAtualizados]

console.log(nomesArray);