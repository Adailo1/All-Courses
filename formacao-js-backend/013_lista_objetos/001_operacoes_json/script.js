const estudantes = require('../estudantes.json')

function buscaInfo(lista, chave, valor){
    return lista.find((estudante) => estudante[chave].includes(valor))
}

const estudanteEncontrado = buscaInfo(estudantes, 'nome', 'Husein')
const telefoneEstudante = buscaInfo(estudantes, 'telefone', '75993785074')

console.log(estudanteEncontrado)
console.log(telefoneEstudante)