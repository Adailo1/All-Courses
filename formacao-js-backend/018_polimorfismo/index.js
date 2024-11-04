import User from "./User.js"

const novoUser = new User('Adailo', 'am@gmail.com', '05-09-2024')

const dadosFictícios = User.exibirInfosGenericas('Cássio', 'c@c.com') //static function

console.log(dadosFictícios)

