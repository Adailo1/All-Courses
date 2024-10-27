//Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Em seguida, exclua a propriedade avaliacao do objeto livro. Depois, exiba os detalhes do livro no console, verificando se as informações atualizadas, sem a avaliação, são exibidas corretamente.
const livro = {
    titulo: "Percy Jackson e a maldição do titan",
    autor: "Rick Riordan",
    anoPublicacao: 2007,
    genero: "Fantasia",
    idadePublicacao: 2024 - 2007,
    avaliacao: 10
}

console.log(livro)

delete livro.avaliacao

console.log(livro)