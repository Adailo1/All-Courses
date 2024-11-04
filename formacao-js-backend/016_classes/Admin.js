import User from './User.js'

class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo=true){
        super(nome, email, nascimento, role, ativo)
    }

    criarCurso(nomeCurso, qtdVagas){
        return `${nomeCurso} criado com ${qtdVagas} vagas.`
    }
}

const novoAdmin = new Admin('Rodrigo', 'r@r.com', '10-10-2000')
console.log(novoAdmin) 
console.log(novoAdmin.exibirInfos()) //Método da classe User usada na classe Admin pelo super()
console.log(novoAdmin.criarCurso('Ciência da computação', 40)) //Método exclusivo da classe Admin