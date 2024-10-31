/*
Crie um array de objetos JavaScript representando informações de filmes. Cada objeto deve conter pelo menos as seguintes propriedades:

id (number): identificador do filme.
titulo (string): título do filme.
diretor (string): nome do diretor.
anoLancamento (number): ano de lançamento do filme.

Crie uma função chamada filtrarFilmesPorAno que receba um ano como parâmetro e retorne um novo array contendo apenas os filmes lançados nesse ano.

Utilize a função para filtrar os filmes lançados em um ano específico e imprima no console o array resultante. Em seguida, refaça a operação com outro ano.
*/

const filmes = [
    {id: 1, titulo: 'Super Mário o filme', diretor: 'Alguém', anoLancamento: 2023},
    {id: 2, titulo: 'Shang-chi', diretor:'Não sei', anoLancamento: 2021},
    {id: 3, titulo: 'Venom 2', diretor: 'Sei lá', anoLancamento: 2021}
]

function filtrarFilmesPorAno(ano){
    return filmes.filter(value => {
        if (value.anoLancamento === ano) return value
    })
}

console.log(filtrarFilmesPorAno(2021))
console.log("===================================")
console.log(filtrarFilmesPorAno(2023))