export default class User {
    constructor(nome, email, nascimento, role, ativo = true){
        this.nome = nome
        this.email = email
        this.nascimento = nascimento
        this.role = role || 'estudante'
        this.ativo = ativo
    }

    exibirInfos(){
        return `${this.nome}, ${this.email}`
    }
}

const novoUser = new User('Adailo', 'a@a.com', '05-09-2003')
console.log(novoUser)
/*
User {
  nome: 'Adailo',
  email: 'a@a.com',
  nascimento: '05-09-2003',
  role: 'estudante',
  ativo: true
}
*/
console.log(novoUser.exibirInfos()) //Adailo, a@a.com

//console.log(User.prototype.isPrototypeOf(novoUser)); //true, novoUser é um protótipo de User

