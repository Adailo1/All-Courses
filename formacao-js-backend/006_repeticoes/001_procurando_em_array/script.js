const alunos = ['João', 'Juliana', 'Caio', 'Ana']
const medias = [10, 8, 7.5, 9]

const lista = [alunos, medias]

//Criando função
const buscaMedia = (nome) => {
    let nomeLista
    for (let i = 0; i < lista[0].length;i++){
        nomeLista = lista[0][i]
        if (nome.toUpperCase() === nomeLista.toUpperCase()){
            return `A média de ${nome} é: ${lista[1][i]}`
        } 
    }
    return `O nome ${nome} não está na lista`
}

console.log(buscaMedia('João'))