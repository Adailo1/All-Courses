/*
1 - Crie um objeto chamado pessoa que represente informações sobre uma pessoa. O objeto deve ter as seguintes propriedades: nome e notas. Adicione um método chamado calcularMediaNotas ao objeto pessoa. Este método deve calcular a média das notas da pessoa.

Adicione um método chamado classificarDesempenho ao objeto pessoa. Este método deve retornar uma categoria de desempenho com base na média calculada. Utilize as seguintes categorias:

Desempenho excelente: média >= 9
Bom desempenho: 7.5 <= média entre 7.6 e 8.9
Desempenho regular: 6 <= média entre 6 e 7.5
Desempenho insuficiente: média < 6
Chame o método calcularMediaNotas para calcular a média das notas da pessoa e imprima no console a média calculada.

Chame o método classificarDesempenho e imprima no console a categoria de desempenho da pessoa.
*/

const pessoa = {
    nome: 'Adailo',
    notas: [10, 9.5, 9.2, 8],
    calcularMedia(){
        let soma = this.notas.reduce((cont, valor) => {
            return cont + valor
        })
        return (soma / this.notas.length).toFixed(2)
    },
    classificarDesempenho(){
        let media = this.calcularMedia()
        if(media >= 9) console.log('Desempenho excelente')
        else if(media >= 7.6) console.log('Bom desempenho')
        else if(media >= 6) console.log('Desempenho regular')
        else console.log('Desempenho insuficiente')
    }
}

console.log(pessoa.calcularMedia())
pessoa.classificarDesempenho()