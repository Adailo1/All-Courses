/*
Crie uma nova variável chamada anoAtual e atribua a ela o ano atual (utilize new Date().getFullYear()). Crie um objeto chamado livro com as seguintes propriedades: título, autor, ano de publicação e gênero.

Adicione a propriedade idadePublicacao diretamente ao objeto livro, representando há quantos anos o livro foi publicado. Calcule essa idade subtraindo o anoDePublicacao do anoAtual.

Crie uma string chamada mostrarDetalhes contendo os detalhes do livro, incluindo a informação da idade de publicação.

Exiba a string mostrarDetalhes no console para verificar se as informações, incluindo a idade de publicação, são exibidas corretamente.
*/

const anoAtual = new Date().getFullYear()
const livro = {
    titulo: "A lâmina da assassina", 
    autor: "Sarah J. Mass", 
    anoPublicacao: 2015,
    genero: "Fantasia",
}
livro.idade = anoAtual - livro.anoPublicacao

const mostrarDetalhes = `O livro se chama ${livro.titulo}, foi escrito pela ${livro.autor}, publicado em ${livro.anoPublicacao} à ${livro.idade} anos atrás, é do gênero de ${livro.genero}`

console.log(mostrarDetalhes)