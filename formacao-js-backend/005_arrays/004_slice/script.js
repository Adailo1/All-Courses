//dividir a lista de estudantes em duas salas

const listaEstudantes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

const listaEstudantes1 = listaEstudantes.slice(0, listaEstudantes.length / 2)
const listaEstudantes2 = listaEstudantes.slice(listaEstudantes.length / 2, listaEstudantes.length)
console.log(listaEstudantes1, listaEstudantes2)