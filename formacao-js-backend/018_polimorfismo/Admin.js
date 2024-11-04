import User from './User.js'

export default class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo=true){
        super(nome, email, nascimento, role, ativo)
    }

    exibirInfos(){
        return `${this.nome}, ${this.email}, ${this.role}`
    }

    criarCurso(nomeCurso, qtdVagas){
        return `${nomeCurso} criado com ${qtdVagas} vagas.`
    }
}

