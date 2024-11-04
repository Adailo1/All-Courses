export default class User {
    #nome //#Transforma o atributo em um atributo privado
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true){
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }

    get nome() { //Método acessor, não leva nenhum parâmetro
        return this.#nome
    }

    get email() { //Método acessor, não leva nenhum parâmetro
        return this.#email
    }

    get nascimento() { //Método acessor, não leva nenhum parâmetro
        return this.#nascimento
    }

    set nome(novoNome){
        this.#nome = novoNome
    }

    exibirInfos(){
        return `${this.nome}, ${this.email}`
    }
}