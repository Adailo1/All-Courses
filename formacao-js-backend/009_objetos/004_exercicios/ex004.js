/*
Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois, adicione uma nova propriedade chamada avaliacao. Esta propriedade deve ser inicializada como null.

No final do arquivo livro.js, adicione uma avaliação ao objeto.

Caso a propriedade avaliacao seja null, atribua a avaliação ao objeto livro.

Caso contrário, imprima uma mensagem indicando que o livro já possui uma avaliação.
*/

const livro = {
    titulo: "A lâmina da assassina", 
    autor: "Sarah J. Mass", 
    anoPublicacao: 2015,
    genero: "Fantasia",
    idadePublicacao: 9,
    avaliacao: null
}

if (livro.avaliacao === null) livro.avaliacao = 10
else console.log("O livro já foi avaliado")

console.log(`O livro se chama ${livro["titulo"]}, foi escrito pela ${livro["autor"]}, publicado em ${livro["anoPublicacao"]} à ${livro["idadePublicacao"]} anos atrás, é do gênero de ${livro["genero"]}, a nota do usuário para esse livro é: ${livro.avaliacao}`)
