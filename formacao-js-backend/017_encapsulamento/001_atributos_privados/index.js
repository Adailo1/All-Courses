import User from "./User.js"

const novoUser = new User('Adailo', 'am@gmail.com', '05-09-2024')

novoUser.nome = 'Márcia' //Isso não pode acontecer, é muito perigoso | Usar # para criar um atributo privado no objeto
console.log(novoUser.exibirInfos()) //Adailo
console.log(novoUser.nome) //Márcia

//É diferente pois #nome e nome já não são mais a mesma propriedade, então na linha 7 na verdade foi criado uma nova propriedade chamada nome
console.log(novoUser)
/*
User {
  email: 'am@gmail.com',
  nascimento: '05-09-2024',
  role: 'estudante',
  ativo: true,
  nome: 'Márcia' -> Perceba que o nome está no final e não no começo, pois foi criado agora
}
*/