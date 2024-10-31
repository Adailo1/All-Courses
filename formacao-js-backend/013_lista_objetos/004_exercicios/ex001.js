/*
Crie um array de objetos JavaScript representando informações de livros. Cada objeto deve conter pelo menos as seguintes propriedades:

id (number): identificador do livro.
titulo (string): título do livro.
autor (string): nome do autor.
anoPublicacao (number): ano de publicação do livro.

Crie uma função chamada encontrarLivroPorId que receba o id de um livro como parâmetro e retorne o objeto do livro correspondente. Se nenhum livro for encontrado, a função deve retornar null.

Utilize a função para encontrar um livro com um id existente e imprima no console as informações do livro encontrado. Em seguida, utilize a função para encontrar um livro com um id inexistente e imprima no console uma mensagem indicando que o livro não foi encontrado.
*/

const livros = [
    {id:1, titulo: 'Aprendendo a aprender', autor: 'Barbara oakley', anoPublicacao: 2015},
    {id: 2, titulo: 'A voz na sua cabeça', autor: 'Ethan kross', anoPublicacao: 2021},
    {id: 3, titulo: 'Jesus, o maior psicologo que já existiu', autor: 'Mark W. Baker', anoPublicacao: 2020},
    {id: 4, titulo: 'Hiperfoco', autor: 'Chris Bailey', anoPublicacao: 2019},
    {id: 5, titulo: 'Sem esforço', autor: 'Greg McKeown', anoPublicacao: 2021},
    {id: 6, titulo: 'O ego é seu inimigo', autor: 'Ryan Holiday', anoPublicacao: 2017},
    {id: 7, titulo: 'O Deus que destrói sonhos', autor: 'Rodrigo Bibo', anoPublicacao: 2021},
    {id: 8, titulo: '1 Ano em 12 semanas', autor: 'Brian P. Moran', anoPublicacao: 2021},
    {id: 9, titulo: 'Como fazer amigos e inflienciar pessoas', autor: 'Dale Carnegie', anoPublicacao: 1930},
    {id: 10, titulo: 'O Deus esquecido', autor: 'Francis Chan', anoPublicacao: 2010},
    {id: 11, titulo: 'A cultura do jejum', autor: 'Luciano Subirá', anoPublicacao: 2022},
    {id: 12, titulo: 'A pirâmide da sabedoria', autor: 'David Soares', anoPublicacao: 2023},
    {id: 13, titulo: 'Meu amigo Espírito Santo', autor: 'Abe Huber', anoPublicacao: 2019},
    {id: 14, titulo: 'O vinho novo é melhor', autor: 'Robert Thom', anoPublicacao: 2006},
]

function encontrarLivroPorId(id){
    return livros.filter((value) => {
        if (value.id === id) return value
    })
}

console.log(encontrarLivroPorId(13))