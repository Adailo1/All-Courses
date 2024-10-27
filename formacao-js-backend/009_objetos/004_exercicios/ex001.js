/*
Crie um objeto livro que represente as informações de um livro. O objeto deve conter as seguintes propriedades:

titulo (string): título do livro.
autor (string): nome do autor do livro.
anoPublicacao (number): ano de publicação do livro.
genero (string): gênero do livro.
No final do arquivo livro.js, instancie o objeto livro com dados de algum livro que você goste e imprima os detalhes do livro no console.
*/

const livro = {
    titulo: "Percy Jackson e a maldição do titan",
    autor: "Rick Riordan",
    anoPublicacao: 2007,
    genero: "Fantasia"
}

console.log(`Eu gosto do livro ${livro.titulo}, ele foi escrito pelo ${livro.autor}, faz parte de uma série de 5 livros e é o terceiro, foi publicado em ${livro.anoPublicacao} e é do gênero ${livro.genero}`)