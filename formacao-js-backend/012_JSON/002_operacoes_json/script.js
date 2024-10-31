const estudante = require('./estudante.json') //importação do json para o JS

const stringEstudante = JSON.stringify(estudante) //Objeto para string
const objEstudante = JSON.parse(stringEstudante)
//String para objeto

console.log(objEstudante)
