import User from './User.js'

class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo=true){
        super(nome, email, nascimento, role, ativo)
    }

    aprovarEstudante(estudante, curso){
        return `${estudante} passou no curso de ${curso}, responsável: ${this.nome}`
    }

    reprovarEstudante(estudante, curso){
        return `${estudante} reprovou no curso de ${curso}, responsável: ${this.nome}`
    }
}

const novoDocente = new Docente('Ana', 'a@a.com', '01-01-2024')

console.log(novoDocente)
console.log(novoDocente.reprovarEstudante('Adailo', 'Ciência da computação'))

