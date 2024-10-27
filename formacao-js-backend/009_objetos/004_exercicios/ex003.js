//Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois, utilize colchetes para acessar diretamente as propriedades do objeto livro e imprimir no console os detalhes do livro.

const livro = {
    titulo: "Harry Potter e a pedra filosofal",
    autor: "J.K Rowling",
    anoPublicacao: 1997,
    genero: "Fantasia",
    idade: 2024 - 1997
}

console.log(`O livro se chama ${livro["titulo"]}, foi escrito pela ${livro["autor"]}, publicado em ${livro["anoPublicacao"]} à ${livro["idade"]} anos atrás, é do gênero de ${livro["genero"]}`)