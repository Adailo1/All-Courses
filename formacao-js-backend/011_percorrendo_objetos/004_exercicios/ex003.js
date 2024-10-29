/*
Crie um arquivo chamado metodosObjeto.js para realizar este exercício.

Utilize o objeto carro do exercício 2 com as propriedades iniciais (marca, modelo, ano, cor) e adicione:

ligado: uma propriedade do tipo booleana que indica se o carro está ligado ou não.
ligar: um método que imprime no console uma mensagem indicando que o carro está ligado.
desligar: um método que imprime no console uma mensagem indicando que o carro está desligado. Observação: se o carro já está ligado (ligado = true), não pode ser ligado novamente e vice-versa.
obterDetalhes: um método que retorna uma string contendo todos os detalhes do carro (marca, modelo, ano, cor, estado de ligado/desligado).
Em seguida, faça o seguinte:

Chame os métodos ligar e desligar do objeto carro e imprima no console as mensagens resultantes.
Chame o método obterDetalhes e imprima no console a string retornada.
*/

let carro = {
    marca: 'Fiat', 
    modelo: 'Cronos', 
    ano: 2024,
    cor: 'Preto',
    ligado: false,
    ligar(){
        if (!this.ligado){
            this.ligado = true
            console.log('Ligando carro... Ligado')
        } else {
            console.log('O carro já está ligado')
        }
    },
    desligar(){
        if (this.ligado){
            this.ligado = false
            console.log('Desligando carro... Desligado')
        } else {
            console.log('O carro já está desligado')
        }
    },
    mostrarDetalhes(){
        console.log(`\nDetalhes do carro\nMarca:${this.marca}\nModelo:${this.modelo}\nAno: ${this.ano}\nCor: ${this.cor}\nLigado: ${this.ligado ? 'O carro está ligado' : 'O carro está desligado'}`)
    }
}

carro.ligar()
carro.desligar()
carro.mostrarDetalhes()