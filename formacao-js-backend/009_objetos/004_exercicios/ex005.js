//Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois altere o gênero do livro para "Aventura".

const livro = {
    titulo: "Percy Jackson e a maldição do titan",
    autor: "Rick Riordan",
    anoPublicacao: 2007,
    genero: "Fantasia",
    idadePublicacao: 2024 - 2007
}

console.log(livro)

livro.genero = "Aventura"

console.log(livro)