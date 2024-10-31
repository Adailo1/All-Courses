const estudantes = require('../estudantes.json')

const listaOrdenada = ordena(estudantes, 'nome')

console.log(listaOrdenada)

function ordena(lista, propriedade){
    return lista.sort((a, b) => {
        if (a[propriedade] < b[propriedade]) return -1
        if (a[propriedade] > b[propriedade]) return 1
        return 0;
    })
}