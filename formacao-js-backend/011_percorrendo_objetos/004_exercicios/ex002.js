/*
Crie um objeto chamado carro que represente as informações de um veículo. O objeto deve ter as seguintes propriedades:

marca (string): marca do carro.
modelo (string): modelo do carro.
ano (number): ano de fabricação do carro.
cor (string): cor do carro.
Utilize o loop for...in para percorrer todas as propriedades do objeto carro e imprima no console o nome da propriedade e o seu valor.

Adicione mais propriedades ao objeto carro para representar características adicionais do veículo.

Utilize novamente o loop for...in para percorrer todas as propriedades atualizadas do objeto carro e imprima no console o nome da propriedade e o seu valor.
*/

let carro = {
    marca: 'Fiat', 
    modelo: 'Cronos', 
    ano: 2024,
    cor: 'Preto'
}

for (let key in carro){
    console.log(key, carro[key])
}

carro.novo = true

console.log(`\n${"==================================="}\n`)

for (let key in carro){
    console.log(key, carro[key])
}