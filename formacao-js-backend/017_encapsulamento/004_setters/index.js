import User from "./User.js"

const novoUser = new User('Adailo', 'am@gmail.com', '05-09-2024')

novoUser.nome = 'Julia' //Setter

console.log(novoUser.nome) //Getter