//Haverá uma palestra sobre padrões de projetos para as salas de JavaScript e Python

//Junte ambas as salas em uma única lista que exiba todos os estudantes

const salaJS = ['Evaldo', 'Camis', 'Mari']
const salaPython = ['Ju', 'Leo', 'Raquel']

const salaPalestra = [...salaJS, ...salaPython] //Também pode usar o método concat(), mas eu prefiro usar o spread

console.log(`Alunos que estarão na palestra: ${salaPalestra}`)