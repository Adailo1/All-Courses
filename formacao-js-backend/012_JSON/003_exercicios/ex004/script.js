/*
a) Leia o conteúdo do arquivo animais.json.

b) Converta o conteúdo lido para um objeto JavaScript utilizando JSON.parse().

c) Adicione um novo animal ao array de animais. O novo animal deve ter um id único, nome, tipo e habitat.

d) Modifique o habitat de um animal existente no array de animais.

e) Remova um animal do array de animais.

f) Converta o objeto modificado para uma string JSON utilizando JSON.stringify().

g) Imprima no console o objeto JavaScript resultante das operações.
*/

let animais = require('./animais.json')

let stringAnimais = JSON.stringify(animais)
let objAnimais = JSON.parse(stringAnimais)

objAnimais.animais.push({ id: 4, nome: 'Cachorro', tipo: 'Mamífero', habitat: 'Animal doméstico',})

objAnimais.animais[1].habitat = 'Aquário'

objAnimais.animais.splice(2, 1)

stringAnimais = JSON.stringify(objAnimais)
console.log(stringAnimais)