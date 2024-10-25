const estudantes = ['João', 'Juliano', 'Caio', 'Ana']
const medias = [10, 8, 7.5, 9]
let listaCompleta = []

for (let i = 0; i < estudantes.length; i++){
    listaCompleta[i] = [estudantes[i], medias[i]]
}

console.log(listaCompleta) //[ [ 'João', 10 ], [ 'Juliano', 8 ], [ 'Caio', 7.5 ], [ 'Ana', 9 ] ]