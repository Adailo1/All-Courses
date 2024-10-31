/*
Crie um array de objetos JavaScript representando informações fictícias de produtos. Cada objeto deve conter pelo menos as seguintes propriedades:

id (number): identificador do produto.
nome (string): nome do produto.
preco (number): preço do produto.

Crie uma função chamada filtrarOrdenarProdutosPorPreco que recebe um valor máximo (maxPreco) como parâmetro e retorna um novo array contendo apenas os produtos cujo preço é menor ou igual ao valor máximo, ordenados em ordem crescente de preço.

Utilize a função para filtrar e ordenar os produtos com um valor máximo específico e imprima no console o array resultante.
*/

const produtos = [
    {id: 1, nome: 'Uniforme Red Canids 2024', preco: 150},
    {id: 2, nome: 'Uniforme Corinthians 2024', preco: 600},
    {id: 3, nome: 'Camisa Nike', preco: 100}
]

function filtrarOrdenarProdutosPorPreco(maxPreco){
    let produtosFiltrados = []
    produtos.filter(value => {
        if (value.preco <= maxPreco){
            produtosFiltrados.push(value)
        }
    })

    return produtosFiltrados.sort((a, b) =>{
        if (a.preco > b.preco) return 1
        else if (b.preco > a.preco) return -1
        else return 0
    })
}

console.log(filtrarOrdenarProdutosPorPreco(200))