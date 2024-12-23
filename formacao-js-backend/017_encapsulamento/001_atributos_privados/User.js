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

    exibirInfos(){
        return `${this.#nome}, ${this.#email}`
    }
}