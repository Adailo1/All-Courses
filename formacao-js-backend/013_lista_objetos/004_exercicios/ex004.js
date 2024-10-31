/*
Crie um array de objetos JavaScript representando informações de animais. Cada objeto deve conter pelo menos as seguintes propriedades:

id (number): identificador do animal.
nome (string): nome do animal.
especie (string): espécie do animal.
idade (number): idade do animal.

Crie uma função chamada ordenarAnimais que receba como parâmetro uma função de comparação para realizar a ordenação do array.

Você pode criar funções para fazer a ordenação crescente ou decrescente:
*/

const animais = [
    {id: 1, nome: 'Akali', especie: 'Gato', idade: 1},
    {id: 2, nome: 'Nico', especie: 'Cachorro', idade: 2},
    {id: 3, nome: 'Aphelios', especie: 'Cachorro', idade: 2.5},
    {id: 4, nome: 'Alune', especie: 'Cachorro', idade: 2},
    {id: 5, nome: 'Kitkit', especie: 'Gato', idade:4 }
]

function ordenarAnimais(){
    return animais.sort((a, b) => {
        if (a.idade > b.idade) return -1
        else if (a.idade < b.idade) return 1
        else return 0
    })
}

console.log(ordenarAnimais())